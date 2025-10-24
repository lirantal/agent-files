interface MCPConfigData {
    raw: any;
    parsed: boolean;
    valid: boolean;
    servers: Record<string, MCPServerConfig>;
}
interface MCPServerConfig {
    name: string;
    command: string;
    args?: string[];
    transport?: 'stdio' | 'sse' | 'http';
    type?: 'sse' | 'http' | 'stdio' | 'streamable-http';
    url?: string;
    env?: Record<string, string>;
    headers?: Record<string, string>;
}
interface MCPFilePath {
    filePath: string;
    type: 'local' | 'global';
}

type MCPAppPathsRecord = Record<string, MCPFilePath[]>;
declare class MCPPathRegistry {
    private static readonly WINDOWS_PATHS;
    private static readonly DARWIN_PATHS;
    private static readonly LINUX_PATHS;
    private customApps;
    getPathsForOS(os: string): MCPAppPathsRecord;
    getPathsForApp(os: string, appName: string): MCPFilePath[];
    getSupportedApps(os: string): string[];
    getSupportedOperatingSystems(): string[];
    registerCustomApp(os: string, appName: string, paths: MCPFilePath[]): void;
    getPathsForOSWithCustom(os: string): MCPAppPathsRecord;
}

declare class MCPConfigParser {
    private filePath;
    private fileContents;
    private parsed;
    private valid;
    private fileContentsData;
    constructor(filePath: string);
    parseConfigFile(): Promise<MCPConfigData>;
    extractMCPServers(configData: any): Promise<Record<string, MCPServerConfig>>;
    private normalizeServerConfigs;
    private validateType;
    private inferTransportType;
    validateServerConfig(serverConfig: MCPServerConfig): boolean;
    getSupportedConfigKeys(): string[];
    isValidSyntax(): Promise<boolean>;
    countMCPServers(): Promise<number>;
    private getFileContent;
}

declare class DirectoryBubbleService {
    findLocalConfigInParentDirectories(localPath: string, startDir: string): Promise<string | null>;
    private checkDirectoryForConfig;
    private getParentDirectory;
}

declare class MCPConfigLinterService {
    private parser;
    constructor(filePath: string);
    parseFile(): Promise<void>;
    isValidSyntax(): Promise<boolean>;
    countMCPServers(): Promise<number>;
    getMCPServers(): Promise<Record<string, object>>;
    getFileContent(): Promise<string>;
}

export { DirectoryBubbleService, type MCPConfigData, MCPConfigLinterService, MCPConfigParser, type MCPFilePath, MCPPathRegistry, type MCPServerConfig };
