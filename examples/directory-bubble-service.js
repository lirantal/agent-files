// eslint-disable-next-line n/no-missing-import
import { DirectoryBubbleService } from 'agent-files'
import path from 'path'
import { fileURLToPath } from 'url'

// Since ES modules don't have __dirname, we can derive it
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function findFile () {
  // Define a starting directory deep inside our example project
  const startPath = path.join(__dirname, 'project', 'src')
  console.log(`Starting search from: ${startPath}`)

  // The name of the file we are looking for
  const fileNameToFind = '.mcp.json'

  // Initialize the service
  const bubbleService = new DirectoryBubbleService()

  // Find the local config file by bubbling up from the start path
  const foundFile = await bubbleService.findLocalConfigInParentDirectories(fileNameToFind, startPath)

  if (foundFile) {
    console.log(`
Found MCP file: ${foundFile}`)
    console.log('The service successfully found the .mcp.json file in a parent directory.')
  } else {
    console.log(`
Could not find ${fileNameToFind} in any parent directory.`)
  }
}

findFile()
