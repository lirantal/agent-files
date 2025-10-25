// eslint-disable n/no-missing-import
import { DirectoryBubbleService, MCPConfigParser } from 'agent-files'

async function findAndParseMCPFiles () {
  // Find all mcp.json files by bubbling up from the current directory
  const bubbleService = new DirectoryBubbleService()
  const mcpFiles = await bubbleService.findMCPFiles()

  if (mcpFiles.length === 0) {
    console.log('No mcp.json files found.')
    return
  }

  console.log(`Found mcp.json files: ${mcpFiles.join(', ')}`)

  // Parse the files
  for (const file of mcpFiles) {
    try {
      // Create a new parser for each file
      const parser = new MCPConfigParser(file)
      const config = await parser.parseConfigFile()
      console.log(`
Configuration from ${file}:`)
      console.log(JSON.stringify(config, null, 2))
    } catch (error) {
      console.error(`Error parsing ${file}:`, error)
    }
  }
}

findAndParseMCPFiles()
