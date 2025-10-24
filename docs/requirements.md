# Project Requirements: agent-files

## Overview

This document outlines the requirements for the `agent-files` package, a library for discovering and parsing Model Context Protocol (MCP) configuration files.

## Core Requirements

### 1. MCP Path Resolution (`MCPPathRegistry`)

- **Must** provide a registry of known MCP configuration file paths for various AI applications.
- **Must** support different operating systems, including Windows, macOS, and Linux.
- **Must** allow consumers to retrieve paths for a specific application and OS.
- **Must** allow consumers to retrieve all paths for a given OS.
- **Must** support the registration of custom applications and their configuration paths.
- **Must** list all supported operating systems.
- **Must** list all supported applications for a given OS.

### 2. MCP Configuration Parsing (`MCPConfigParser`)

- **Must** parse MCP configuration files in standard JSON format.
- **Must** parse MCP configuration files in JSON with comments (JSONC) format.
- **Must** handle malformed JSON and JSONC files gracefully.
- **Must** extract MCP server configurations from files.
- **Must** support various keys for server configurations, including `servers`, `mcpServers`, `context_servers`, and `mcp.servers`.
- **Must** provide a method to validate the syntax of a configuration file.
- **Must** provide a method to count the number of servers in a configuration file.
- **Must** provide a method to validate the structure of a server configuration.

### 3. Directory Bubbling (`DirectoryBubbleService`)

- **Must** provide a service to find local MCP configuration files by searching upwards from a starting directory.
- **Must** stop searching at the user's home directory or the filesystem root directory.
- **Must** return the path of the first matching configuration file found.
- **Must** handle filesystem errors (e.g., permission denied) gracefully without throwing exceptions.

### 4. Legacy Linter (`MCPConfigLinterService`)

- **Must** provide a legacy linter service for backward compatibility.
- **Must** delegate all its functionality to the `MCPConfigParser` service.

## Non-Functional Requirements

- **Modularity**: The package must be self-contained and have minimal dependencies.
- **Testability**: All public APIs must be unit-tested.
- **Reusability**: The package should be easily consumable by other applications.
