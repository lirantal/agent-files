// eslint-disable-next-line n/no-missing-import
import { MCPConfigParser } from 'agent-files'
import path from 'path'
import { fileURLToPath } from 'url'

// Since ES modules don't have __dirname, we can derive it
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function parseMCPFile () {
  const mcpFilePath = path.join(__dirname, 'mcp.json')
  console.log(`Attempting to parse: ${mcpFilePath}`)

  try {
    // Initialize the parser with the file path
    const parser = new MCPConfigParser(mcpFilePath)

    // Parse the specified MCP file
    const result = await parser.parseConfigFile()
    console.log('\nParsed configuration result:')
    console.log(JSON.stringify(result, null, 2))

    // You can also validate the file's syntax
    const isValid = await parser.isValidSyntax()
    console.log(`\nIs the configuration file syntax valid? ${isValid}`)

    if (result.servers) {
      // And count the number of servers
      const serverCount = await parser.countMCPServers()
      console.log(`Number of servers found: ${serverCount}`)
    }
  } catch (error) {
    console.error('An error occurred:', error)
  }
}

parseMCPFile()
