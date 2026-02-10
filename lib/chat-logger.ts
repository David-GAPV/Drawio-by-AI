/**
 * Request-Response Logger for AI Chat
 *
 * Logs all chat requests, responses, tool calls (including get_aws_icon_style),
 * and LLM reasoning to timestamped log files.
 *
 * Log files are stored in: logs/chat/
 * Format: logs/chat/YYYY-MM-DD.jsonl (one JSON object per line)
 */

import fs from "fs"
import path from "path"

const LOG_DIR = path.join(process.cwd(), "logs", "chat")

interface ToolCallLog {
    toolName: string
    input: unknown
    output: unknown
    timestamp: string
    durationMs?: number
}

interface ChatLogEntry {
    timestamp: string
    requestId: string
    userId?: string
    sessionId?: string
    modelId?: string
    // Request
    userMessage?: string
    messageCount?: number
    hasImages?: boolean
    hasPdf?: boolean
    // Response
    responseText?: string
    reasoning?: string
    finishReason?: string
    // Token usage
    inputTokens?: number
    outputTokens?: number
    cachedTokens?: number
    totalTokens?: number
    // Tool calls
    toolCalls?: ToolCallLog[]
    // Errors
    error?: string
    // Duration
    durationMs?: number
}

// In-memory buffer for the current request
const requestBuffers = new Map<string, ChatLogEntry>()

/**
 * Ensure log directory exists
 */
function ensureLogDir(): void {
    try {
        if (!fs.existsSync(LOG_DIR)) {
            fs.mkdirSync(LOG_DIR, { recursive: true })
        }
    } catch (err) {
        console.error("[ChatLogger] Failed to create log directory:", err)
    }
}

/**
 * Get today's log file path
 */
function getLogFilePath(): string {
    const date = new Date().toISOString().split("T")[0] // YYYY-MM-DD
    return path.join(LOG_DIR, `${date}.jsonl`)
}

/**
 * Generate a unique request ID
 */
export function generateRequestId(): string {
    return `req_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
}

/**
 * Start logging a new request
 */
export function logRequestStart(
    requestId: string,
    data: {
        userId?: string
        sessionId?: string
        modelId?: string
        userMessage?: string
        messageCount?: number
        hasImages?: boolean
        hasPdf?: boolean
    },
): void {
    const entry: ChatLogEntry = {
        timestamp: new Date().toISOString(),
        requestId,
        ...data,
        toolCalls: [],
    }
    requestBuffers.set(requestId, entry)
    console.log(`[ChatLogger] Started logging request ${requestId}`)
}

/**
 * Log a tool call and its output
 */
export function logToolCall(
    requestId: string,
    toolName: string,
    input: unknown,
    output: unknown,
    durationMs?: number,
): void {
    const entry = requestBuffers.get(requestId)
    if (!entry) {
        console.warn(`[ChatLogger] No request buffer for ${requestId}, creating ad-hoc entry`)
        return
    }

    const toolLog: ToolCallLog = {
        toolName,
        input,
        output: typeof output === "string" && output.length > 5000
            ? output.substring(0, 5000) + `... [truncated, total ${output.length} chars]`
            : output,
        timestamp: new Date().toISOString(),
        durationMs,
    }

    entry.toolCalls = entry.toolCalls || []
    entry.toolCalls.push(toolLog)
    console.log(`[ChatLogger] Logged tool call: ${toolName} for request ${requestId}`)
}

/**
 * Log the final response
 */
export function logResponse(
    requestId: string,
    data: {
        responseText?: string
        reasoning?: string
        finishReason?: string
        inputTokens?: number
        outputTokens?: number
        cachedTokens?: number
        totalTokens?: number
        error?: string
        durationMs?: number
    },
): void {
    const entry = requestBuffers.get(requestId)
    if (!entry) {
        console.warn(`[ChatLogger] No request buffer for ${requestId}`)
        return
    }

    // Merge response data
    Object.assign(entry, data)

    // Truncate large response text for logging
    if (entry.responseText && entry.responseText.length > 10000) {
        entry.responseText = entry.responseText.substring(0, 10000) + `... [truncated, total ${data.responseText?.length} chars]`
    }

    // Write to file
    flushEntry(requestId)
}

/**
 * Write the log entry to disk and clean up buffer
 */
function flushEntry(requestId: string): void {
    const entry = requestBuffers.get(requestId)
    if (!entry) return

    try {
        ensureLogDir()
        const logFile = getLogFilePath()
        const line = JSON.stringify(entry) + "\n"
        fs.appendFileSync(logFile, line, "utf-8")
        console.log(`[ChatLogger] Flushed log for request ${requestId} to ${logFile}`)
    } catch (err) {
        console.error(`[ChatLogger] Failed to write log for ${requestId}:`, err)
    } finally {
        requestBuffers.delete(requestId)
    }
}

/**
 * Force flush all pending entries (e.g., on process exit)
 */
export function flushAll(): void {
    for (const requestId of requestBuffers.keys()) {
        flushEntry(requestId)
    }
}

/**
 * Get log file path for a specific date (for reading logs)
 */
export function getLogFileForDate(date: string): string {
    return path.join(LOG_DIR, `${date}.jsonl`)
}

/**
 * Read log entries for a specific date
 */
export function readLogs(date?: string): ChatLogEntry[] {
    const targetDate = date || new Date().toISOString().split("T")[0]
    const logFile = path.join(LOG_DIR, `${targetDate}.jsonl`)

    try {
        if (!fs.existsSync(logFile)) return []
        const content = fs.readFileSync(logFile, "utf-8")
        return content
            .split("\n")
            .filter((line) => line.trim())
            .map((line) => JSON.parse(line) as ChatLogEntry)
    } catch (err) {
        console.error(`[ChatLogger] Failed to read logs for ${targetDate}:`, err)
        return []
    }
}
