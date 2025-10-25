# Agent-Files Usage Examples

This directory contains examples demonstrating how to use the `agent-files` library. These examples cover the core features of the library and are intended to help new users get started.

To run any of the examples, use `node` from the root of the project:

```bash
node examples/<example-file-name>.js
```

---

## `simple-usage.js`

This example shows a common use case: finding all `mcp.json` files by searching up from the current directory and then parsing them to extract their server configurations.

**Run it:**

```bash
node examples/simple-usage.js
```

## `mcp-path-registry.js`

This example demonstrates how to use the `MCPPathRegistry` service to discover the known file paths for MCP configuration files across different operating systems and applications.

**Run it:**

```bash
node examples/mcp-path-registry.js
```

## `mcp-config-parser.js`

This example shows how to use the `MCPConfigParser` service to parse a single, specific `mcp.json` file. It demonstrates parsing, syntax validation, and counting the servers within the file.

**Run it:**

```bash
node examples/mcp-config-parser.js
```

## `directory-bubble-service.js`

This example demonstrates the `DirectoryBubbleService`, which provides a way to find a local configuration file by searching upwards from a starting directory. It's useful for finding project-scoped configuration files like `.mcp.json`.

**Run it:**

```bash
node examples/directory-bubble-service.js
```
