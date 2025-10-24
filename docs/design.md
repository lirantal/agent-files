# Project Design: agent-files

## Overview

The `agent-files` package is designed as a modular, service-oriented library for discovering and parsing Model Context Protocol (MCP) configuration files. The design emphasizes separation of concerns, testability, and reusability.

## Architecture Overview

The package consists of three main services:

*   **`MCPPathRegistry`**: Resolves paths to MCP configuration files based on the operating system.
*   **`MCPConfigParser`**: Parses MCP configuration files and extracts server configurations.
*   **`DirectoryBubbleService`**: Provides a mechanism for finding local configuration files by searching parent directories.

These services can be used together to build a complete MCP configuration discovery solution.

## Services

### MCPPathRegistry

#### Purpose
Handles OS-specific path resolution for MCP configuration files across different AI applications.

#### Design
- **Static Configuration**: OS-specific paths are defined as static constants.
- **Platform Detection**: Supports Windows, macOS, and Linux.
- **Extensible**: Supports custom application registration.
- **Error Handling**: Provides clear error messages for unsupported OS.

### MCPConfigParser

#### Purpose
Handles parsing and validation of MCP configuration files in various formats.

#### Supported Formats
- **JSON**: Standard JSON files.
- **JSONC**: JSON with comments (using `jsonc-parser`).
- **Multiple Keys**: Supports various configuration key names (`servers`, `mcpServers`, `context_servers`, `mcp.servers`).

### DirectoryBubbleService

#### Purpose
Provides intelligent directory traversal capabilities to enhance the discovery of local MCP configuration files.

#### Design Principles
- **Intelligent Traversal**: Automatically bubbles up the directory tree.
- **Boundary Safety**: Stops at the user's home directory or the root directory.
- **Performance Optimized**: Stops at the first encounter of a matching config file.
- **Error Resilient**: Silently handles permission errors and other filesystem issues.
