import { DirectoryBubbleService, MCPConfigParser, MCPPathRegistry } from 'agent-files'

async function findAndParseMCPFiles () {
  console.log('Searching for local MCP configuration files...')

  const pathRegistry = new MCPPathRegistry()
  const bubbleService = new DirectoryBubbleService()

  // Get all possible local path patterns for the current OS
  const osPaths = pathRegistry.getPathsForOS(process.platform)
  const localPathPatterns = Object.values(osPaths)
    .flat()
    .filter(p => p.type === 'local')
    .map(p => p.filePath)

  const uniqueLocalPatterns = [...new Set(localPathPatterns)]
  console.log(`
Found unique local path patterns to search for: ${uniqueLocalPatterns.join(', ')}`)

  const foundFiles = new Set()

  // For each pattern, search up the directory tree
  for (const pattern of uniqueLocalPatterns) {
    const found = await bubbleService.findLocalConfigInParentDirectories(pattern, process.cwd())
    if (found) {
      foundFiles.add(found)
    }
  }

  if (foundFiles.size === 0) {
    console.log('\nNo local mcp.json files found.')
    return
  }

  console.log(`\nFound mcp.json files: ${[...foundFiles].join(', ')}`)

  // Parse the files
  for (const file of foundFiles) {
    try {
      // Create a new parser for each file
      const parser = new MCPConfigParser(file)
      const config = await parser.parseConfigFile()
      console.log(`\nConfiguration from ${file}:`)
      console.log(JSON.stringify(config, null, 2))
    } catch (error) {
      console.error(`Error parsing ${file}:`, error)
    }
  }
}

findAndParseMCPFiles()
