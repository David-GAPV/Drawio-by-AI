/**
 * AWS Architecture Icon Styles for draw.io (AWS Architecture Icons 2026)
 *
 * This file contains the official AWS icon color mappings based on the
 * AWS Architecture Icon set. Colors are derived from actual AWS drawio files.
 *
 * Reference: https://aws.amazon.com/architecture/icons/
 */

// ============================================================================
// AWS Service Category → fillColor mapping (official AWS 2026 icon colors)
// ============================================================================
export const AWS_CATEGORY_COLORS: Record<string, { fillColor: string; label: string }> = {
    compute: { fillColor: "#ED7100", label: "Compute" },
    storage: { fillColor: "#7AA116", label: "Storage" },
    database: { fillColor: "#C925D1", label: "Database" },
    networking: { fillColor: "#8C4FFF", label: "Networking & Content Delivery" },
    analytics: { fillColor: "#8C4FFF", label: "Analytics" },
    security: { fillColor: "#DD344C", label: "Security, Identity & Compliance" },
    management: { fillColor: "#E7157B", label: "Management & Governance" },
    application_integration: { fillColor: "#E7157B", label: "Application Integration" },
    machine_learning: { fillColor: "#01A88D", label: "Machine Learning" },
    migration: { fillColor: "#01A88D", label: "Migration & Transfer" },
    developer_tools: { fillColor: "#C925D1", label: "Developer Tools" },
    containers: { fillColor: "#ED7100", label: "Containers" },
    serverless: { fillColor: "#ED7100", label: "Serverless" },
    media_services: { fillColor: "#ED7100", label: "Media Services" },
    end_user_computing: { fillColor: "#ED7100", label: "End User Computing" },
    iot: { fillColor: "#7AA116", label: "Internet of Things" },
    front_end_web_mobile: { fillColor: "#ED7100", label: "Front-End Web & Mobile" },
    business_applications: { fillColor: "#DD344C", label: "Business Applications" },
    blockchain: { fillColor: "#ED7100", label: "Blockchain" },
    quantum: { fillColor: "#ED7100", label: "Quantum Technologies" },
    robotics: { fillColor: "#01A88D", label: "Robotics" },
    satellite: { fillColor: "#01A88D", label: "Satellite" },
    cost_management: { fillColor: "#7AA116", label: "Cloud Financial Management" },
    customer_enablement: { fillColor: "#01A88D", label: "Customer Enablement" },
    general: { fillColor: "#232F3E", label: "General / AWS" },
}

// ============================================================================
// AWS Service → category mapping (service_name → category key)
// ============================================================================
export const AWS_SERVICE_CATEGORY: Record<string, string> = {
    // Compute
    ec2: "compute", lambda: "compute", lightsail: "compute", batch: "compute",
    elastic_beanstalk: "compute", fargate: "compute", auto_scaling: "compute",
    autoscaling: "compute", outposts: "compute", parallel_cluster: "compute",
    parallel_computing_service: "compute", app_runner: "compute",
    ec2_image_builder: "compute", compute_optimizer: "compute",
    bottlerocket: "compute", serverless: "compute",
    serverless_application_repository: "compute",

    // Containers
    ecs: "containers", eks: "containers", ecr: "containers",
    ecs_anywhere: "containers", eks_anywhere: "containers",
    eks_cloud: "containers", eks_distro: "containers",
    red_hat_openshift: "containers",

    // Storage
    s3: "storage", elastic_block_store: "storage", elastic_file_system: "storage",
    fsx: "storage", fsx_for_lustre: "storage", fsx_for_windows_file_server: "storage",
    fsx_for_netapp_ontap: "storage", fsx_for_openzfs: "storage",
    storage_gateway: "storage", backup: "storage", snowball: "storage",
    snowball_edge: "storage", snowcone: "storage", snowmobile: "storage",
    glacier: "storage", glacier_deep_archive: "storage",
    file_cache: "storage", s3_express_one_zone: "storage",
    s3_tables: "storage", s3_vectors: "storage",

    // Database
    rds: "database", aurora: "database", dynamodb: "database",
    elasticache: "database", neptune: "database", redshift: "database",
    documentdb_with_mongodb_compatibility: "database",
    keyspaces: "database", timestream: "database", memorydb_for_redis: "database",
    quantum_ledger_database: "database",
    elasticache_for_redis: "database", elasticache_for_memcached: "database",
    elasticache_for_valkey: "database",
    database_migration_service: "database",

    // Networking & Content Delivery
    vpc: "networking", cloudfront: "networking", route_53: "networking",
    api_gateway: "networking", direct_connect: "networking",
    elastic_load_balancing: "networking", transit_gateway: "networking",
    global_accelerator: "networking", privatelink: "networking",
    network_firewall: "networking", app_mesh: "networking",
    cloud_wan: "networking", vpc_lattice: "networking",
    verified_access: "networking", client_vpn: "networking",
    site_to_site_vpn: "networking", nat_gateway: "networking",
    internet_gateway: "networking", application_load_balancer: "networking",
    network_load_balancer: "networking", gateway_load_balancer: "networking",
    classic_load_balancer: "networking",
    endpoints: "networking", endpoint: "networking",
    vpc_access_points: "networking", vpc_privatelink: "networking",

    // Analytics
    athena: "analytics", kinesis: "analytics", kinesis_data_streams: "analytics",
    kinesis_data_firehose: "analytics", kinesis_data_analytics: "analytics",
    kinesis_video_streams: "analytics",
    glue: "analytics", glue_databrew: "analytics", glue_data_catalog: "analytics",
    lake_formation: "analytics", quicksight: "analytics",
    opensearch_service: "analytics", elasticsearch_service: "analytics",
    emr: "analytics", managed_streaming_for_kafka: "analytics",
    data_exchange: "analytics", data_pipeline: "analytics",
    managed_service_for_apache_flink: "analytics",
    data_lake_resource_icon: "analytics", clean_rooms: "analytics",
    entity_resolution: "analytics", datazone: "analytics",

    // Security, Identity & Compliance
    identity_and_access_management: "security", cognito: "security",
    guardduty: "security", inspector: "security", macie: "security",
    shield: "security", waf: "security", firewall_manager: "security",
    key_management_service: "security", certificate_manager: "security",
    secrets_manager: "security", security_hub: "security",
    detective: "security", artifact: "security",
    single_sign_on: "security", organizations: "security",
    directory_service: "security", resource_access_manager: "security",
    audit_manager: "security", signer: "security",
    private_certificate_authority: "security",
    verified_permissions: "security", security_lake: "security",
    payment_cryptography: "security", security_incident_response: "security",

    // Management & Governance
    cloudwatch: "management", cloudwatch_2: "management",
    cloudformation: "management", cloudtrail: "management",
    config: "management", opsworks: "management",
    systems_manager: "management", trusted_advisor: "management",
    control_tower: "management", service_catalog: "management",
    well_architected_tool: "management", personal_health_dashboard: "management",
    management_console: "management", license_manager: "management",
    chatbot: "management", resilience_hub: "management",
    fault_injection_simulator: "management",
    launch_wizard: "management", resource_explorer: "management",

    // Application Integration
    step_functions: "application_integration", eventbridge: "application_integration",
    sns: "application_integration", sqs: "application_integration",
    mq: "application_integration", appflow: "application_integration",
    appsync: "application_integration",
    eventbridge_pipes: "application_integration",
    eventbridge_scheduler: "application_integration",

    // Machine Learning
    sagemaker: "machine_learning", bedrock: "machine_learning",
    comprehend: "machine_learning", lex: "machine_learning",
    polly: "machine_learning", rekognition: "machine_learning",
    textract: "machine_learning", transcribe: "machine_learning",
    translate: "machine_learning", forecast: "machine_learning",
    personalize: "machine_learning", kendra: "machine_learning",
    augmented_ai: "machine_learning", fraud_detector: "machine_learning",
    codewhisperer: "machine_learning", devops_guru: "machine_learning",
    lookout_for_metrics: "machine_learning",
    lookout_for_vision: "machine_learning",
    lookout_for_equipment: "machine_learning",
    healthlake: "machine_learning", omics: "machine_learning",
    healthscribe: "machine_learning", healthimaging: "machine_learning",
    q: "machine_learning", nova: "machine_learning",

    // Migration & Transfer
    transfer_family: "migration", datasync: "migration",
    migration_hub: "migration", server_migration_service: "migration",
    application_discovery_service: "migration",
    mainframe_modernization: "migration",

    // Developer Tools
    codecommit: "developer_tools", codebuild: "developer_tools",
    codedeploy: "developer_tools", codepipeline: "developer_tools",
    codestar: "developer_tools", cloud9: "developer_tools",
    cloud_development_kit: "developer_tools", codeartifact: "developer_tools",
    codecatalyst: "developer_tools", codeguru: "developer_tools",
    xray: "developer_tools", cloudshell: "developer_tools",
    corretto: "developer_tools",

    // IoT
    iot_core: "iot", greengrass: "iot", iot_analytics: "iot",
    iot_events: "iot", iot_sitewise: "iot", iot_twinmaker: "iot",
    iot_device_defender: "iot", iot_device_management: "iot",
    iot_fleetwise: "iot", freertos: "iot",

    // Front-End Web & Mobile
    amplify: "front_end_web_mobile", device_farm: "front_end_web_mobile",
    location_service: "front_end_web_mobile",

    // Cost Management
    cost_explorer: "cost_management", budgets: "cost_management",
    savings_plans: "cost_management",

    // General / Other
    users: "general", internet: "general", client: "general",
    mobile_client: "general",
    stack: "management", stack2: "management",
}

// ============================================================================
// Direct shape set: shapes that use shape=mxgraph.aws4.{name} directly
// instead of shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.{name}
// These use fillColor={categoryColor} + strokeColor=none (no white stroke)
// ============================================================================
export const AWS_DIRECT_SHAPES = new Set([
    // Networking infrastructure icons
    "endpoints", "endpoint", "nat_gateway", "internet_gateway",
    "application_load_balancer", "network_load_balancer",
    "gateway_load_balancer", "classic_load_balancer",
    "elastic_load_balancing", "vpc_access_points", "vpc_privatelink",
    "client_vpn", "site_to_site_vpn", "transit_gateway",
    "network_firewall", "network_firewall_endpoints",
    // Storage
    "glacier", "glacier_deep_archive", "s3_express_one_zone",
    // Security
    "certificate_manager", "certificate_manager_2", "certificate_manager_3",
    "private_certificate_authority",
    "waf", "waf_bad_bot", "waf_bot", "waf_bot_control",
    "waf_labels", "waf_managed_rule", "waf_rule",
    "shield", "shield2", "shield_shield_advanced",
    // Compute infrastructure
    "auto_scaling", "auto_scaling2",
    // General
    "users", "internet", "internet_alt1", "internet_alt2", "internet_alt22",
    "client", "mobile_client", "mobile",
    "stack", "stack2",
])

// ============================================================================
// Alias map: common abbreviations / alternative names → canonical key
// Maps what the LLM might call a service to the key in AWS_SERVICE_CATEGORY
// or to the exact aws4 shape name (for resIcon=mxgraph.aws4.{shape_name})
// ============================================================================
export const AWS_SERVICE_ALIASES: Record<string, string> = {
    // ACM / Certificate Manager
    acm: "certificate_manager",
    aws_certificate_manager: "certificate_manager",
    cert_manager: "certificate_manager",
    ssl: "certificate_manager",
    tls: "certificate_manager",
    certificate: "certificate_manager",

    // Load Balancers
    alb: "application_load_balancer",
    nlb: "network_load_balancer",
    glb: "gateway_load_balancer",
    clb: "classic_load_balancer",
    elb: "elastic_load_balancing",
    load_balancer: "elastic_load_balancing",

    // IAM
    iam: "identity_and_access_management",
    aws_iam: "identity_and_access_management",

    // VPC Endpoint
    vpc_endpoint: "endpoints",
    vpc_endpoints: "endpoints",
    vpce: "endpoints",
    endpoint: "endpoints",
    privatelink_endpoint: "endpoints",

    // CloudFormation Stack
    cf_stack: "stack",
    cloudformation_stack: "stack",

    // ECR
    container_registry: "ecr",

    // ECS
    container_service: "ecs",
    elastic_container_service: "ecs",

    // EKS
    kubernetes_service: "eks",
    elastic_kubernetes_service: "eks",

    // KMS
    kms: "key_management_service",
    aws_kms: "key_management_service",

    // Secrets Manager
    asm: "secrets_manager",
    aws_secrets_manager: "secrets_manager",

    // Systems Manager
    ssm: "systems_manager",
    aws_ssm: "systems_manager",
    parameter_store: "systems_manager",

    // SNS
    simple_notification_service: "sns",
    notification_service: "sns",
    notifications: "sns",

    // SQS
    simple_queue_service: "sqs",
    queue_service: "sqs",
    message_queue: "sqs",

    // NAT Gateway
    nat: "nat_gateway",

    // Internet Gateway
    igw: "internet_gateway",

    // Transit Gateway
    tgw: "transit_gateway",

    // CloudFront
    cdn: "cloudfront",
    content_delivery: "cloudfront",

    // Route 53
    route53: "route_53",
    dns: "route_53",

    // API Gateway
    apigw: "api_gateway",
    apigateway: "api_gateway",

    // S3
    simple_storage_service: "s3",
    s3_bucket: "s3",
    bucket: "s3",

    // DynamoDB
    dynamo: "dynamodb",
    dynamo_db: "dynamodb",

    // RDS
    relational_database: "rds",
    relational_database_service: "rds",

    // Aurora
    aurora_db: "aurora",
    amazon_aurora: "aurora",

    // ElastiCache
    redis: "elasticache",
    memcached: "elasticache",
    elastic_cache: "elasticache",

    // Redshift
    red_shift: "redshift",

    // Lambda
    lambda_function: "lambda",

    // EC2
    elastic_compute: "ec2",
    virtual_machine: "ec2",
    vm: "ec2",
    instance: "ec2",

    // Step Functions
    step_function: "step_functions",
    sfn: "step_functions",
    state_machine: "step_functions",

    // EventBridge
    event_bridge: "eventbridge",
    events: "eventbridge",

    // CloudWatch
    cloud_watch: "cloudwatch",
    monitoring: "cloudwatch",
    logs: "cloudwatch",

    // CloudTrail
    cloud_trail: "cloudtrail",
    audit: "cloudtrail",

    // CloudFormation
    cloud_formation: "cloudformation",
    cfn: "cloudformation",

    // Config
    aws_config: "config",

    // Control Tower
    ctrl_tower: "control_tower",

    // Bedrock
    amazon_bedrock: "bedrock",

    // SageMaker
    sage_maker: "sagemaker",
    amazon_sagemaker: "sagemaker",

    // Cognito
    user_pool: "cognito",
    identity_pool: "cognito",

    // WAF
    web_application_firewall: "waf",
    aws_waf: "waf",

    // GuardDuty
    guard_duty: "guardduty",

    // Shield
    ddos_protection: "shield",
    aws_shield: "shield",

    // Inspector
    aws_inspector: "inspector",
    vulnerability_scanner: "inspector",

    // Macie
    data_discovery: "macie",
    aws_macie: "macie",

    // Security Hub
    sec_hub: "security_hub",
    aws_security_hub: "security_hub",

    // Organizations
    aws_organizations: "organizations",
    org: "organizations",

    // SSO / IAM Identity Center
    sso: "single_sign_on",
    iam_identity_center: "single_sign_on",
    identity_center: "single_sign_on",

    // Kinesis
    data_stream: "kinesis",
    streaming: "kinesis",

    // Glue
    etl: "glue",
    aws_glue: "glue",

    // Athena
    sql_query: "athena",
    aws_athena: "athena",

    // EMR
    elastic_mapreduce: "emr",
    hadoop: "emr",

    // QuickSight
    quick_sight: "quicksight",
    bi: "quicksight",
    dashboard: "quicksight",

    // OpenSearch
    opensearch: "opensearch_service",
    elasticsearch: "opensearch_service",

    // Fargate (already in service list, but add common variants)
    aws_fargate: "fargate",
    serverless_containers: "fargate",

    // App Runner
    apprunner: "app_runner",

    // Transfer Family
    sftp: "transfer_family",
    ftp: "transfer_family",

    // DataSync
    data_sync: "datasync",

    // Amplify
    aws_amplify: "amplify",

    // EFS
    efs: "elastic_file_system",
    elastic_file: "elastic_file_system",

    // EBS
    ebs: "elastic_block_store",
    block_storage: "elastic_block_store",

    // Elastic Beanstalk
    beanstalk: "elastic_beanstalk",
    eb: "elastic_beanstalk",

    // Direct Connect
    dx: "direct_connect",
    dedicated_connection: "direct_connect",

    // AppSync
    app_sync: "appsync",
    graphql: "appsync",

    // MQ
    amazon_mq: "mq",
    message_broker: "mq",
    activemq: "mq",
    rabbitmq: "mq",

    // CodeBuild
    code_build: "codebuild",

    // CodePipeline
    code_pipeline: "codepipeline",
    ci_cd: "codepipeline",

    // CodeDeploy
    code_deploy: "codedeploy",

    // CodeCommit
    code_commit: "codecommit",

    // X-Ray
    x_ray: "xray",
    tracing: "xray",

    // Cloud9
    ide: "cloud9",

    // CDK
    cdk: "cloud_development_kit",
    aws_cdk: "cloud_development_kit",

    // Network Firewall
    nfw: "network_firewall",
    aws_network_firewall: "network_firewall",

    // Firewall Manager
    fms: "firewall_manager",

    // Lake Formation
    data_lake: "lake_formation",

    // Managed Streaming for Kafka
    msk: "managed_streaming_for_kafka",
    kafka: "managed_streaming_for_kafka",

    // MemoryDB
    memorydb: "memorydb_for_redis",
    memory_db: "memorydb_for_redis",

    // DocumentDB
    documentdb: "documentdb_with_mongodb_compatibility",
    docdb: "documentdb_with_mongodb_compatibility",
    mongodb: "documentdb_with_mongodb_compatibility",

    // Neptune
    graph_database: "neptune",

    // Timestream
    time_series: "timestream",

    // Private CA
    pca: "private_certificate_authority",
    private_ca: "private_certificate_authority",

    // Trusted Advisor
    ta: "trusted_advisor",

    // Resource Access Manager
    ram: "resource_access_manager",

    // Directory Service
    ad: "directory_service",
    active_directory: "directory_service",

    // VPC Lattice
    lattice: "vpc_lattice",

    // Verified Access
    ava: "verified_access",

    // Client VPN
    vpn_client: "client_vpn",

    // Site-to-Site VPN
    vpn: "site_to_site_vpn",
    s2s_vpn: "site_to_site_vpn",

    // PrivateLink (the service concept, distinct from vpc_endpoint shape)
    private_link: "privatelink",

    // Cloud WAN
    cloudwan: "cloud_wan",

    // Groups (common alternative names)
    aws_cloud: "group_aws_cloud",
    cloud: "group_aws_cloud",
    region: "group_region",
    az: "group_availability_zone",
    availability_zone: "group_availability_zone",
    security_group: "group_security_group",
    sg: "group_security_group",
    public_subnet: "group_subnet_public",
    private_subnet: "group_subnet_private",
    account: "group_account",
    asg: "group_auto_scaling_group",
    auto_scaling: "group_auto_scaling_group",
    data_center: "group_corporate_data_center",
    on_premises: "group_on_premise",
    on_prem: "group_on_premise",
}

// ============================================================================
// Resolve a service name through aliases → canonical key
// ============================================================================
export function resolveServiceName(input: string): string {
    const normalized = input.toLowerCase().replace(/[\s-]/g, "_").replace(/[^a-z0-9_]/g, "")

    // Direct match in service category or group styles
    if (AWS_SERVICE_CATEGORY[normalized] || AWS_GROUP_STYLES[normalized]) {
        return normalized
    }

    // Alias match
    if (AWS_SERVICE_ALIASES[normalized]) {
        return AWS_SERVICE_ALIASES[normalized]
    }

    // Try removing "aws_" or "amazon_" prefix
    const withoutAwsPrefix = normalized.replace(/^(aws_|amazon_)/, "")
    if (AWS_SERVICE_CATEGORY[withoutAwsPrefix] || AWS_GROUP_STYLES[withoutAwsPrefix]) {
        return withoutAwsPrefix
    }
    if (AWS_SERVICE_ALIASES[withoutAwsPrefix]) {
        return AWS_SERVICE_ALIASES[withoutAwsPrefix]
    }

    // Try partial match: find a service key that contains the input
    const allKeys = Object.keys(AWS_SERVICE_CATEGORY)
    const partialMatch = allKeys.find(k => k === normalized || k.includes(normalized) || normalized.includes(k))
    if (partialMatch) {
        return partialMatch
    }

    // Try partial match on group keys
    const groupKeys = Object.keys(AWS_GROUP_STYLES)
    const groupPartial = groupKeys.find(k => k === normalized || k.includes(normalized) || normalized.includes(k))
    if (groupPartial) {
        return groupPartial
    }

    // Return as-is (will get general/fallback styling)
    return normalized
}

// ============================================================================
// Quick reference: canonical service names for LLM context
// Returns a compact string the LLM can use to pick the right names
// ============================================================================
export function getServiceNameReference(): string {
    const lines: string[] = [
        "# AWS Service Name Reference",
        "Use these exact names when calling get_aws_icon_style.\n",
    ]

    // Group by category
    const byCategory: Record<string, string[]> = {}
    for (const [service, cat] of Object.entries(AWS_SERVICE_CATEGORY)) {
        const catInfo = AWS_CATEGORY_COLORS[cat]
        const label = catInfo?.label || cat
        if (!byCategory[label]) byCategory[label] = []
        byCategory[label].push(service)
    }

    for (const [label, services] of Object.entries(byCategory).sort()) {
        const catEntry = Object.entries(AWS_CATEGORY_COLORS).find(([, v]) => v.label === label)
        const color = catEntry?.[1].fillColor || "#232F3E"
        lines.push(`**${label}** (${color}): ${services.sort().join(", ")}`)
    }

    lines.push("")
    lines.push(`**Groups**: ${Object.keys(AWS_GROUP_STYLES).join(", ")}`)

    // Common aliases
    lines.push("")
    lines.push("**Common aliases** (also accepted): acm→certificate_manager, alb→application_load_balancer, nlb→network_load_balancer, iam→identity_and_access_management, kms→key_management_service, vpc_endpoint→endpoints, igw→internet_gateway, nat→nat_gateway, tgw→transit_gateway, dns→route_53, cdn→cloudfront, ssm→systems_manager, ebs→elastic_block_store, efs→elastic_file_system, msk→managed_streaming_for_kafka, cfn→cloudformation, sfn→step_functions")

    return lines.join("\n")
}

// ============================================================================
// AWS Group styles with their official colors
// ============================================================================
export interface AWSGroupStyle {
    grIcon: string
    strokeColor: string
    fillColor: string
    fontColor: string
    description: string
}

export const AWS_GROUP_STYLES: Record<string, AWSGroupStyle> = {
    group_aws_cloud: {
        grIcon: "mxgraph.aws4.group_aws_cloud_alt",
        strokeColor: "#232F3E",
        fillColor: "none",
        fontColor: "#232F3E",
        description: "AWS Cloud",
    },
    group_region: {
        grIcon: "mxgraph.aws4.group_region",
        strokeColor: "#00A4A6",
        fillColor: "none",
        fontColor: "#00A4A6",
        description: "AWS Region",
    },
    group_availability_zone: {
        grIcon: "mxgraph.aws4.group_availability_zone",
        strokeColor: "#007CBC",
        fillColor: "none",
        fontColor: "#007CBC",
        description: "Availability Zone",
    },
    group_vpc: {
        grIcon: "mxgraph.aws4.group_vpc2",
        strokeColor: "#8C4FFF",
        fillColor: "none",
        fontColor: "#AAB7B8",
        description: "VPC",
    },
    group_security_group: {
        grIcon: "mxgraph.aws4.group_security_group",
        strokeColor: "#DD344C",
        fillColor: "#F9DEE2",
        fontColor: "#DD344C",
        description: "Security Group",
    },
    group_subnet_public: {
        grIcon: "mxgraph.aws4.group_security_group",
        strokeColor: "#7AA116",
        fillColor: "#F2F6E8",
        fontColor: "#248814",
        description: "Public Subnet",
    },
    group_subnet_private: {
        grIcon: "mxgraph.aws4.group_security_group",
        strokeColor: "#147EBA",
        fillColor: "#E6F2F8",
        fontColor: "#147EBA",
        description: "Private Subnet",
    },
    group_account: {
        grIcon: "mxgraph.aws4.group_account",
        strokeColor: "#CD2264",
        fillColor: "none",
        fontColor: "#CD2264",
        description: "AWS Account",
    },
    group_auto_scaling_group: {
        grIcon: "mxgraph.aws4.group_auto_scaling_group",
        strokeColor: "#ED7100",
        fillColor: "none",
        fontColor: "#ED7100",
        description: "Auto Scaling Group",
    },
    group_ec2_instance_contents: {
        grIcon: "mxgraph.aws4.group_ec2_instance_contents",
        strokeColor: "#ED7100",
        fillColor: "#FDF0E2",
        fontColor: "#ED7100",
        description: "EC2 Instance Contents",
    },
    group_elastic_beanstalk: {
        grIcon: "mxgraph.aws4.group_elastic_beanstalk",
        strokeColor: "#ED7100",
        fillColor: "none",
        fontColor: "#ED7100",
        description: "Elastic Beanstalk",
    },
    group_elastic_load_balancing: {
        grIcon: "mxgraph.aws4.group_elastic_load_balancing",
        strokeColor: "#8C4FFF",
        fillColor: "none",
        fontColor: "#8C4FFF",
        description: "Elastic Load Balancing",
    },
    group_spot_fleet: {
        grIcon: "mxgraph.aws4.group_spot_fleet",
        strokeColor: "#ED7100",
        fillColor: "none",
        fontColor: "#ED7100",
        description: "Spot Fleet",
    },
    group_aws_step_functions_workflow: {
        grIcon: "mxgraph.aws4.group_aws_step_functions_workflow",
        strokeColor: "#E7157B",
        fillColor: "none",
        fontColor: "#E7157B",
        description: "Step Functions Workflow",
    },
    group_corporate_data_center: {
        grIcon: "mxgraph.aws4.group_corporate_data_center",
        strokeColor: "#232F3E",
        fillColor: "none",
        fontColor: "#232F3E",
        description: "Corporate Data Center",
    },
    group_on_premise: {
        grIcon: "mxgraph.aws4.group_on_premise",
        strokeColor: "#232F3E",
        fillColor: "none",
        fontColor: "#232F3E",
        description: "On-Premises",
    },
    group_iot_greengrass: {
        grIcon: "mxgraph.aws4.group_iot_greengrass",
        strokeColor: "#7AA116",
        fillColor: "none",
        fontColor: "#7AA116",
        description: "IoT Greengrass",
    },
    generic_group: {
        grIcon: "",
        strokeColor: "none",
        fillColor: "#EFF0F3",
        fontColor: "#232F3D",
        description: "Generic Group (grey background, no border)",
    },
}

// ============================================================================
// Icon templates — standard points arrays
// ============================================================================
const RESOURCE_ICON_POINTS = "[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]]"
const GROUP_POINTS = "[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]]"

// ============================================================================
// Main function to get icon style XML
// ============================================================================
export function getAwsIconStyle(serviceName: string): string {
    // Resolve through aliases
    const resolved = resolveServiceName(serviceName)

    // Check if it's a group style
    if (resolved.startsWith("group_") || AWS_GROUP_STYLES[resolved]) {
        const groupKey = resolved
        const group = AWS_GROUP_STYLES[groupKey]
        if (group) {
            if (groupKey === "generic_group") {
                // Generic group: grey background, no border
                return `style="fillColor=${group.fillColor};strokeColor=none;dashed=0;verticalAlign=top;fontStyle=0;fontColor=${group.fontColor};whiteSpace=wrap;html=1;"`
            }
            const grIconPart = group.grIcon ? `grIcon=${group.grIcon};` : ""
            const grStrokePart = group.fillColor !== "none" && groupKey.includes("subnet") ? "grStroke=0;" : ""
            return `style="points=${GROUP_POINTS};outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;${grIconPart}${grStrokePart}strokeColor=${group.strokeColor};fillColor=${group.fillColor};verticalAlign=top;align=left;spacingLeft=30;fontColor=${group.fontColor};dashed=0;"`
        }
    }

    // Look up category and color
    const category = AWS_SERVICE_CATEGORY[resolved]
    const categoryInfo = category ? AWS_CATEGORY_COLORS[category] : AWS_CATEGORY_COLORS.general
    const fillColor = categoryInfo?.fillColor || "#232F3E"

    // Check if this is a direct shape (not resourceIcon)
    if (AWS_DIRECT_SHAPES.has(resolved)) {
        return `style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=${fillColor};strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.${resolved};"`
    }

    // Build the resourceIcon style  
    return `style="sketch=0;points=${RESOURCE_ICON_POINTS};outlineConnect=0;fontColor=#232F3E;fillColor=${fillColor};strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.${resolved};"`
}

// ============================================================================
// Get full service list with styles (for tool response)
// ============================================================================
export function getAwsIconStyleInfo(serviceNames: string[]): string {
    const results: string[] = []

    for (const name of serviceNames) {
        const resolved = resolveServiceName(name)
        const category = AWS_SERVICE_CATEGORY[resolved]
        const categoryInfo = category ? AWS_CATEGORY_COLORS[category] : null
        const style = getAwsIconStyle(resolved)
        const resolvedNote = resolved !== name.toLowerCase().replace(/[\s-]/g, "_").replace(/[^a-z0-9_]/g, "") ? ` (resolved from "${name}")` : ""

        if (resolved.startsWith("group_") || AWS_GROUP_STYLES[resolved]) {
            const group = AWS_GROUP_STYLES[resolved]
            results.push(`### ${resolved}${resolvedNote}\n- Type: Group\n- Description: ${group?.description || "Unknown group"}\n- ${style}\n- Size: Use appropriate width/height for container`)
        } else {
            const isDirect = AWS_DIRECT_SHAPES.has(resolved)
            const shapeType = isDirect ? "Direct shape" : "Resource icon"
            const shapeSyntax = isDirect ? `mxgraph.aws4.${resolved}` : `mxgraph.aws4.resourceIcon + resIcon=mxgraph.aws4.${resolved}`
            results.push(`### ${resolved}${resolvedNote}\n- Category: ${categoryInfo?.label || "Unknown"}\n- fillColor: ${categoryInfo?.fillColor || "#232F3E"}\n- Type: ${shapeType}\n- Shape: ${shapeSyntax}\n- ${style}\n- Size: width="60" height="60"`)
        }
    }

    return results.join("\n\n")
}

// ============================================================================
// List all available services and groups
// ============================================================================
export function listAllAwsServices(): string {
    const byCategory: Record<string, string[]> = {}

    for (const [service, cat] of Object.entries(AWS_SERVICE_CATEGORY)) {
        const catInfo = AWS_CATEGORY_COLORS[cat]
        const label = catInfo?.label || cat
        if (!byCategory[label]) byCategory[label] = []
        byCategory[label].push(service)
    }

    const lines: string[] = ["# AWS Services and Groups Available\n"]

    // Services by category
    for (const [label, services] of Object.entries(byCategory).sort()) {
        const catEntry = Object.entries(AWS_CATEGORY_COLORS).find(([, v]) => v.label === label)
        const color = catEntry?.[1].fillColor || "#232F3E"
        lines.push(`## ${label} (fillColor: ${color})`)
        lines.push(services.sort().map(s => `- ${s}`).join("\n"))
        lines.push("")
    }

    // Groups
    lines.push("## AWS Groups")
    for (const [key, group] of Object.entries(AWS_GROUP_STYLES)) {
        lines.push(`- ${key}: ${group.description} (strokeColor: ${group.strokeColor}, fillColor: ${group.fillColor})`)
    }

    return lines.join("\n")
}
