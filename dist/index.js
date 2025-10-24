// src/services/mcp-path-registry.ts
import path from "path";
var MCPPathRegistry = class _MCPPathRegistry {
  static WINDOWS_PATHS = {
    claude: [
      { filePath: path.join(process.env.APPDATA || "", "Claude", "claude_desktop_config.json"), type: "global" }
    ],
    claude_code: [
      { filePath: ".mcp.json", type: "local" }
    ],
    cursor: [
      { filePath: path.join(process.env.HOME || "", ".cursor", "mcp.json"), type: "global" },
      { filePath: path.join(".cursor", "mcp.json"), type: "local" }
    ],
    vscode: [
      { filePath: path.join(".vscode", "mcp.json"), type: "local" },
      { filePath: path.join(process.env.APPDATA || "", "Code", "User", "settings.json"), type: "global" },
      { filePath: path.join(process.env.APPDATA || "", "Code - Insiders", "User", "settings.json"), type: "global" },
      { filePath: path.join(process.env.APPDATA || "", "Code", "User", "mcp.json"), type: "global" },
      { filePath: path.join(process.env.APPDATA || "", "Code - Insiders", "User", "mcp.json"), type: "global" }
    ],
    cline: [
      { filePath: path.join(process.env.APPDATA || "", "Code", "User", "globalStorage", "saoudrizwan.claude-dev", "settings", "cline_mcp_settings.json"), type: "global" },
      { filePath: path.join(process.env.APPDATA || "", "Code - Insiders", "User", "globalStorage", "saoudrizwan.claude-dev", "settings", "cline_mcp_settings.json"), type: "global" }
    ],
    windsurf: [
      { filePath: path.join(".codeium", "windsurf", "mcp_config.json"), type: "local" }
    ],
    roo: [
      { filePath: path.join(process.env.APPDATA || "", "Code", "User", "globalStorage", "rooveterinaryinc.roo-cline", "settings", "cline_mcp_settings.json"), type: "global" },
      { filePath: path.join(process.env.APPDATA || "", "Code - Insiders", "User", "globalStorage", "rooveterinaryinc.roo-cline", "settings", "cline_mcp_settings.json"), type: "global" }
    ],
    "intellij-github-copilot": [
      { filePath: path.join(process.env.LOCALAPPDATA || "", "github-copilot", "intellij", "mcp.json"), type: "global" }
    ],
    junie: [
      { filePath: path.join(process.env.HOME || "", ".junie", "mcp", "mcp.json"), type: "global" }
    ],
    zed: [
      { filePath: path.join(process.env.LOCALAPPDATA || "", "zed", "settings.json"), type: "global" },
      { filePath: path.join(".zed", "settings.json"), type: "local" }
    ],
    gemini: [
      { filePath: path.join(process.env.HOME || "", ".gemini", "settings.json"), type: "global" },
      { filePath: path.join(".gemini", "settings.json"), type: "local" }
    ]
  };
  static DARWIN_PATHS = {
    claude: [
      { filePath: path.join(process.env.HOME || "", "Library", "Application Support", "Claude", "claude_desktop_config.json"), type: "global" }
    ],
    claude_code: [
      { filePath: ".mcp.json", type: "local" }
    ],
    cursor: [
      { filePath: path.join(process.env.HOME || "", ".cursor", "mcp.json"), type: "global" },
      { filePath: path.join(".cursor", "mcp.json"), type: "local" }
    ],
    vscode: [
      { filePath: path.join(".vscode", "mcp.json"), type: "local" },
      { filePath: path.join(process.env.HOME || "", "Library", "Application Support", "Code", "User", "settings.json"), type: "global" },
      { filePath: path.join(process.env.HOME || "", "Library", "Application Support", "Code", "User", "mcp.json"), type: "global" },
      { filePath: path.join(process.env.HOME || "", "Library", "Application Support", "Code - Insiders", "User", "settings.json"), type: "global" },
      { filePath: path.join(process.env.HOME || "", "Library", "Application Support", "Code - Insiders", "User", "mcp.json"), type: "global" }
    ],
    cline: [
      { filePath: path.join(process.env.HOME || "", "Library", "Application Support", "Code", "User", "globalStorage", "saoudrizwan.claude-dev", "settings", "cline_mcp_settings.json"), type: "global" },
      { filePath: path.join(process.env.HOME || "", "Library", "Application Support", "Code - Insiders", "User", "globalStorage", "saoudrizwan.claude-dev", "settings", "cline_mcp_settings.json"), type: "global" }
    ],
    windsurf: [
      { filePath: path.join(".codeium", "windsurf", "mcp_config.json"), type: "local" }
    ],
    roo: [
      { filePath: path.join(process.env.HOME || "", "Library", "Application Support", "Code", "User", "globalStorage", "rooveterinaryinc.roo-cline", "settings", "cline_mcp_settings.json"), type: "global" },
      { filePath: path.join(process.env.HOME || "", "Library", "Application Support", "Code - Insiders", "User", "globalStorage", "rooveterinaryinc.roo-cline", "settings", "cline_mcp_settings.json"), type: "global" }
    ],
    "intellij-github-copilot": [
      { filePath: path.join(process.env.HOME || "", ".config", "github-copilot", "intellij", "mcp.json"), type: "global" }
    ],
    junie: [
      { filePath: path.join(process.env.HOME || "", ".junie", "mcp", "mcp.json"), type: "global" },
      { filePath: path.join(".junie", "mcp", "mcp.json"), type: "local" }
    ],
    zed: [
      { filePath: path.join(process.env.HOME || "", ".config", "zed", "settings.json"), type: "global" },
      { filePath: path.join(".zed", "settings.json"), type: "local" }
    ],
    gemini: [
      { filePath: path.join(process.env.HOME || "", ".gemini", "settings.json"), type: "global" },
      { filePath: path.join(".gemini", "settings.json"), type: "local" }
    ]
  };
  static LINUX_PATHS = {
    claude: [
      { filePath: path.join(process.env.HOME || "", ".config", "Claude", "claude_desktop_config.json"), type: "global" }
    ],
    claude_code: [
      { filePath: ".mcp.json", type: "local" }
    ],
    cursor: [
      { filePath: path.join(process.env.HOME || "", ".cursor", "mcp.json"), type: "global" },
      { filePath: path.join(".cursor", "mcp.json"), type: "local" }
    ],
    vscode: [
      { filePath: path.join(".vscode", "mcp.json"), type: "local" },
      { filePath: path.join(process.env.HOME || "", ".config", "Code", "User", "settings.json"), type: "global" },
      { filePath: path.join(process.env.HOME || "", ".config", "Code - Insiders", "User", "settings.json"), type: "global" },
      { filePath: path.join(process.env.HOME || "", ".config", "Code", "User", "mcp.json"), type: "global" },
      { filePath: path.join(process.env.HOME || "", ".config", "Code - Insiders", "User", "mcp.json"), type: "global" },
      { filePath: path.join(process.env.HOME || "", ".mcp.json"), type: "global" }
    ],
    cline: [
      { filePath: path.join(process.env.HOME || "", ".config", "Code", "User", "globalStorage", "saoudrizwan.claude-dev", "settings", "cline_mcp_settings.json"), type: "global" },
      { filePath: path.join(process.env.HOME || "", ".config", "Code - Insiders", "User", "globalStorage", "saoudrizwan.claude-dev", "settings", "cline_mcp_settings.json"), type: "global" }
    ],
    windsurf: [
      { filePath: path.join(".codeium", "windsurf", "mcp_config.json"), type: "local" }
    ],
    roo: [
      { filePath: path.join(process.env.HOME || "", ".config", "Code", "User", "globalStorage", "rooveterinaryinc.roo-cline", "settings", "cline_mcp_settings.json"), type: "global" },
      { filePath: path.join(process.env.HOME || "", ".config", "Code - Insiders", "User", "globalStorage", "rooveterinaryinc.roo-cline", "settings", "cline_mcp_settings.json"), type: "global" }
    ],
    "intellij-github-copilot": [
      { filePath: path.join(process.env.HOME || "", ".config", "github-copilot", "intellij", "mcp.json"), type: "global" }
    ],
    junie: [
      { filePath: path.join(process.env.HOME || "", ".junie", "mcp.json"), type: "global" },
      { filePath: path.join(".junie", "mcp", "mcp.json"), type: "local" }
    ],
    zed: [
      { filePath: path.join(process.env.HOME || "", ".config", "zed", "settings.json"), type: "global" },
      { filePath: path.join(".zed", "settings.json"), type: "local" }
    ],
    gemini: [
      { filePath: path.join(process.env.HOME || "", ".gemini", "settings.json"), type: "global" },
      { filePath: path.join(".gemini", "settings.json"), type: "local" }
    ]
  };
  customApps = /* @__PURE__ */ new Map();
  /**
   * Get all MCP configuration file paths for a specific operating system
   */
  getPathsForOS(os) {
    switch (os.toLowerCase()) {
      case "win32":
      case "windows":
        return { ..._MCPPathRegistry.WINDOWS_PATHS };
      case "darwin":
      case "macos":
        return { ..._MCPPathRegistry.DARWIN_PATHS };
      case "linux":
        return { ..._MCPPathRegistry.LINUX_PATHS };
      default:
        throw new Error(`Unsupported operating system: ${os}`);
    }
  }
  /**
   * Get MCP configuration file paths for a specific app on a specific OS
   */
  getPathsForApp(os, appName) {
    const osPaths = this.getPathsForOS(os);
    const appPaths = osPaths[appName];
    if (!appPaths) {
      throw new Error(`App '${appName}' not found for OS '${os}'`);
    }
    return [...appPaths];
  }
  /**
   * Get all supported app names for a specific OS
   */
  getSupportedApps(os) {
    const osPaths = this.getPathsForOS(os);
    return Object.keys(osPaths);
  }
  /**
   * Get all supported operating systems
   */
  getSupportedOperatingSystems() {
    return ["win32", "darwin", "linux"];
  }
  /**
   * Register a custom app with custom paths for a specific OS
   */
  registerCustomApp(os, appName, paths) {
    if (!this.customApps.has(os)) {
      this.customApps.set(os, {});
    }
    const osCustomApps = this.customApps.get(os);
    osCustomApps[appName] = [...paths];
  }
  /**
   * Get paths including custom registered apps
   */
  getPathsForOSWithCustom(os) {
    const basePaths = this.getPathsForOS(os);
    const customPaths = this.customApps.get(os) || {};
    return { ...basePaths, ...customPaths };
  }
};

// src/services/mcp-config-parser.ts
import fs from "fs/promises";
import { parse } from "jsonc-parser";
var MCPConfigParser = class {
  filePath;
  fileContents = null;
  parsed = false;
  valid = false;
  fileContentsData = null;
  constructor(filePath) {
    this.filePath = filePath;
  }
  /**
   * Parse the configuration file and return structured data
   */
  async parseConfigFile() {
    if (this.parsed) {
      return {
        raw: this.fileContentsData,
        parsed: this.parsed,
        valid: this.valid,
        servers: await this.extractMCPServers(this.fileContentsData)
      };
    }
    this.parsed = true;
    const fileContent = await this.getFileContent();
    try {
      this.fileContentsData = JSON.parse(fileContent);
      if (typeof this.fileContentsData === "object") {
        this.valid = true;
      }
    } catch (e) {
    }
    if (!this.valid) {
      try {
        this.fileContentsData = parse(fileContent);
        if (typeof this.fileContentsData === "object") {
          this.valid = true;
        }
      } catch (error) {
      }
    }
    if (!this.valid) {
      throw new Error(`Failed to parse configuration file: ${this.filePath}`);
    }
    return {
      raw: this.fileContentsData,
      parsed: this.parsed,
      valid: this.valid,
      servers: await this.extractMCPServers(this.fileContentsData)
    };
  }
  /**
   * Extract MCP servers from parsed configuration data
   */
  async extractMCPServers(configData) {
    if (!configData || typeof configData !== "object") {
      return {};
    }
    if (configData.servers && typeof configData.servers === "object") {
      return this.normalizeServerConfigs(configData.servers);
    }
    if (configData.mcp?.servers && typeof configData.mcp.servers === "object") {
      return this.normalizeServerConfigs(configData.mcp.servers);
    }
    if (configData.mcpServers && typeof configData.mcpServers === "object") {
      return this.normalizeServerConfigs(configData.mcpServers);
    }
    if (configData.context_servers && typeof configData.context_servers === "object") {
      return this.normalizeServerConfigs(configData.context_servers);
    }
    return {};
  }
  /**
   * Normalize server configurations to ensure consistent structure
   */
  normalizeServerConfigs(servers) {
    const normalized = {};
    for (const [serverName, serverConfig] of Object.entries(servers)) {
      if (serverConfig && typeof serverConfig === "object") {
        const env = serverConfig.env && typeof serverConfig.env === "object" ? serverConfig.env : void 0;
        normalized[serverName] = {
          name: serverName,
          command: serverConfig.command || "",
          args: Array.isArray(serverConfig.args) ? serverConfig.args : void 0,
          type: this.validateType(serverConfig.type) ? serverConfig.type : this.inferTransportType(serverConfig),
          url: serverConfig.url,
          env
        };
      }
    }
    return normalized;
  }
  /**
   * Validate type value
   */
  validateType(type) {
    return ["sse", "http", "stdio", "streamable-http"].includes(type);
  }
  /**
   * Infer transport type from server configuration when type field is not explicitly set
   */
  inferTransportType(serverConfig) {
    if (serverConfig.url && typeof serverConfig.url === "string") {
      return "http";
    }
    if (Array.isArray(serverConfig.args)) {
      const argsString = serverConfig.args.join(" ").toLowerCase();
      if (argsString.includes("stdio")) {
        return "stdio";
      }
      if (argsString.includes("http")) {
        return "http";
      }
      if (argsString.includes("sse")) {
        return "sse";
      }
    }
    if (serverConfig.command && typeof serverConfig.command === "string") {
      return "stdio";
    }
    return void 0;
  }
  /**
   * Validate server configuration
   */
  validateServerConfig(serverConfig) {
    if (!serverConfig || typeof serverConfig !== "object") {
      return false;
    }
    if (!serverConfig.name || typeof serverConfig.name !== "string") {
      return false;
    }
    if (!serverConfig.command || typeof serverConfig.command !== "string") {
      return false;
    }
    return true;
  }
  /**
   * Get supported configuration keys that the parser recognizes
   */
  getSupportedConfigKeys() {
    return ["servers", "mcp.servers", "mcpServers", "context_servers"];
  }
  /**
   * Check if the configuration file has valid syntax
   */
  async isValidSyntax() {
    try {
      const configData = await this.parseConfigFile();
      return configData.valid;
    } catch (error) {
      return false;
    }
  }
  /**
   * Count the number of MCP servers in the configuration
   */
  async countMCPServers() {
    try {
      const configData = await this.parseConfigFile();
      return Object.keys(configData.servers).length;
    } catch (error) {
      return 0;
    }
  }
  /**
   * Get the raw file content
   */
  async getFileContent() {
    if (this.fileContents) {
      return this.fileContents;
    }
    try {
      this.fileContents = await fs.readFile(this.filePath, "utf-8");
      return this.fileContents;
    } catch (error) {
      throw new Error(`Failed to read file: ${this.filePath}`);
    }
  }
};

// src/services/directory-bubble-service.ts
import path2 from "path";
import fs2 from "fs/promises";
import { homedir } from "os";
var DirectoryBubbleService = class {
  /**
   * Find a local MCP config file by bubbling up the directory tree
   * @param localPath - The relative path to search for (e.g., '.vscode/mcp.json')
   * @param startDir - The directory to start searching from
   * @returns The absolute path to the found config file, or null if not found
   */
  async findLocalConfigInParentDirectories(localPath, startDir) {
    try {
      let currentDir = path2.resolve(startDir);
      const homeDir = homedir();
      const rootDir = "/";
      let iterationCount = 0;
      const maxIterations = 100;
      const startDirResult = await this.checkDirectoryForConfig(currentDir, localPath);
      if (startDirResult) {
        return path2.join(currentDir, localPath);
      }
      while (currentDir !== homeDir && currentDir !== rootDir && iterationCount < maxIterations) {
        const parentDir = this.getParentDirectory(currentDir);
        if (!parentDir || parentDir === currentDir) {
          break;
        }
        if (parentDir === currentDir || parentDir.length >= currentDir.length) {
          break;
        }
        currentDir = parentDir;
        iterationCount++;
        const found = await this.checkDirectoryForConfig(currentDir, localPath);
        if (found) {
          return path2.join(currentDir, localPath);
        }
      }
      return null;
    } catch (error) {
      return null;
    }
  }
  /**
   * Check if a config file exists in the specified directory
   * @param dir - The directory to check
   * @param configPath - The relative path to the config file
   * @returns True if the config file exists and is accessible
   */
  async checkDirectoryForConfig(dir, configPath) {
    try {
      const fullPath = path2.join(dir, configPath);
      await fs2.access(fullPath);
      return true;
    } catch (error) {
      return false;
    }
  }
  /**
   * Get the parent directory of the specified directory
   * @param dir - The directory to get the parent of
   * @returns The parent directory path, or null if already at root
   */
  getParentDirectory(dir) {
    const parent = path2.dirname(dir);
    return parent === dir ? null : parent;
  }
};

// src/services/mcp-config-linter-service.ts
var MCPConfigLinterService = class {
  parser;
  constructor(filePath) {
    this.parser = new MCPConfigParser(filePath);
  }
  async parseFile() {
    await this.parser.parseConfigFile();
  }
  async isValidSyntax() {
    return await this.parser.isValidSyntax();
  }
  async countMCPServers() {
    return await this.parser.countMCPServers();
  }
  async getMCPServers() {
    const configData = await this.parser.parseConfigFile();
    return configData.servers;
  }
  async getFileContent() {
    const configData = await this.parser.parseConfigFile();
    return JSON.stringify(configData.raw, null, 2);
  }
};
export {
  DirectoryBubbleService,
  MCPConfigLinterService,
  MCPConfigParser,
  MCPPathRegistry
};
