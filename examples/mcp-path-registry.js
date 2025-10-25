import { MCPPathRegistry } from 'agent-files'

// Initialize the path registry
const pathRegistry = new MCPPathRegistry()

// Get all supported operating systems
const supportedOS = pathRegistry.getSupportedOperatingSystems()
console.log(`Supported Operating Systems: ${supportedOS.join(', ')}`)

// Get all paths for the current OS (e.g., 'darwin', 'win32', 'linux')
const currentOS = process.platform
console.log(`
Paths for current OS (${currentOS}):`)
const pathsForCurrentOS = pathRegistry.getPathsForOS(currentOS)
console.log(JSON.stringify(pathsForCurrentOS, null, 2))

// Get paths for a specific application, e.g., vscode on macOS
console.log(`
VSCode paths for macOS:`)
const vscodePaths = pathRegistry.getPathsForApp('darwin', 'vscode')
console.log(JSON.stringify(vscodePaths, null, 2))

// Get all supported applications for a specific OS
console.log(`
Supported applications for Linux:`)
const supportedAppsForLinux = pathRegistry.getSupportedApps('linux')
console.log(supportedAppsForLinux)
