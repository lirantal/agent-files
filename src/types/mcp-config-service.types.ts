export interface MCPConfigData {
  raw: any
  parsed: boolean
  valid: boolean
  servers: Record<string, MCPServerConfig>
}

export interface MCPServerConfig {
  name: string
  command: string
  args?: string[]
  transport?: 'stdio' | 'sse' | 'http'
  type?: 'sse' | 'http' | 'stdio' | 'streamable-http'
  url?: string
  env?: Record<string, string>
  headers?: Record<string, string>
}

export interface MCPFilePath {
  filePath: string
  type: 'local' | 'global'
}
