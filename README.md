<!-- markdownlint-disable -->

<p align="center"><h1 align="center">
  agent-files
</h1>

<p align="center">
  A library that provides, detects and parses MCP (Model Context Protocol) files used by coding agents and other AI tools
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/agent-files"><img src="https://badgen.net/npm/v/agent-files" alt="npm version"/></a>
  <a href="https://www.npmjs.org/package/agent-files"><img src="https://badgen.net/npm/license/agent-files" alt="license"/></a>
  <a href="https://www.npmjs.org/package/agent-files"><img src="https://badgen.net/npm/dt/agent-files" alt="downloads"/></a>
  <a href="https://github.com/lirantal/agent-files/actions?workflow=CI"><img src="https://github.com/lirantal/agent-files/workflows/CI/badge.svg" alt="build"/></a>
  <a href="https://codecov.io/gh/lirantal/agent-files"><img src="https://badgen.net/codecov/c/github/lirantal/agent-files" alt="codecov"/></a>
  <a href="https://snyk.io/test/github/lirantal/agent-files"><img src="https://snyk.io/test/github/lirantal/agent-files/badge.svg" alt="Known Vulnerabilities"/></a>
</p>

## Features

- **🔍 MCP Discovery**: Automatically detect MCP servers across various AI applications and agentic IDEs based on pre-known file path registry.
- **📁 Directory Bubbling**: Intelligent discovery of project-scoped MCP configs from nested directories, supporting project-scoped MCP Server configuration and global configurations.
- **✅ MCP Linter**: Lint and validate MCP configuration files to ensure they are well-formed.
- **📝 MCP Parser**: Parse `mcp.json` files from different IDEs and tools.

## Usage: API

Install the package:
```bash
npm install agent-files
```

Example usage:

```javascript
import { MCPPathRegistry, MCPConfigParser, DirectoryBubbleService } from 'agent-files';

// Find all mcp.json files
const bubbleService = new DirectoryBubbleService();
const mcpFiles = await bubbleService.findMCPFiles();

// Parse the files
const parser = new MCPConfigParser();
for (const file of mcpFiles) {
  const config = await parser.parse(file);
  console.log(config);
}
```

## Documentation

For detailed information about the project architecture and features:

- **[Project Overview](./docs/project.md)**: Comprehensive project analysis and architecture
- **[Design Documentation](./docs/design.md)**: Technical design decisions and implementation details
- **[Requirements](./docs/requirements.md)**: Functional and non-functional requirements

## Author

**agent-files** © [Liran Tal](https://github.com/lirantal), Released under the [Apache-2.0](./LICENSE) License.
