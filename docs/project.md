# Project Analysis: agent-files

## Purpose

`agent-files` is a Node.js package for discovering and parsing Model Context Protocol (MCP) configuration files from various AI applications and development environments. It provides a set of services to handle OS-specific path resolution, configuration file parsing, and intelligent directory traversal.

## How it Works

The package provides a set of services to discover and parse MCP configuration files:

1.  **Path Resolution:** The `MCPPathRegistry` service provides a registry of known MCP configuration file paths for different AI applications and operating systems (Windows, macOS, and Linux).

2.  **Configuration Parsing:** The `MCPConfigParser` service parses MCP configuration files, supporting standard JSON and JSON with comments (JSONC). It can extract server configurations from various keys like `servers`, `mcp.servers`, `mcpServers`, and `context_servers`.

3.  **Directory Bubbling:** The `DirectoryBubbleService` provides an intelligent directory traversal mechanism to find local (project-scoped) MCP configuration files by searching up the directory tree from a given starting point.

## Project Structure

The project is a TypeScript-based Node.js package with a modular, service-oriented architecture.

### Core Services
*   `src/services/mcp-path-registry.ts`: Handles OS-specific path resolution for MCP configuration files.
*   `src/services/mcp-config-parser.ts`: Handles parsing and validation of MCP configuration files.
*   `src/services/directory-bubble-service.ts`: Handles intelligent directory traversal for local MCP config files.
*   `src/services/mcp-config-linter-service.ts`: A legacy service that delegates to the `MCPConfigParser`.

### Type Definitions
*   `src/types/mcp-config-service.types.ts`: Contains the type definitions for the data structures used in this package.

## How to Use

The `agent-files` package is designed to be used as a dependency in other projects. The main entry point is `src/index.ts`, which exports the core services.

```typescript
import { MCPPathRegistry, MCPConfigParser, DirectoryBubbleService } from 'agent-files';

// Example usage:
const pathRegistry = new MCPPathRegistry();
const paths = pathRegistry.getPathsForOS('darwin');

const parser = new MCPConfigParser(paths.vscode[0].filePath);
const config = await parser.parseConfigFile();
```
