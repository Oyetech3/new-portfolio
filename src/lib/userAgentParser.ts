export function parseUserAgent(userAgent: string) {
    const browsers: Record<string, RegExp> = {
      Chrome: /Chrome\/(\d+)/,
      Firefox: /Firefox\/(\d+)/,
      Safari: /Version\/(\d+).*Safari/,
      Edge: /Edg\/(\d+)/,
      'Samsung Internet': /SamsungBrowser\/(\d+)/,
    }
  
    const devices: Record<string, RegExp> = {
      Mobile: /Mobile|Android|iPhone|iPad|iPod/i,
      Tablet: /iPad|Android/i,
      Desktop: /Windows|Macintosh|Linux/,
    }
  
    const os: Record<string, RegExp> = {
      'Windows': /Windows NT/,
      'macOS': /Macintosh/,
      'Android': /Android/,
      'iOS': /iPhone|iPad|iPod/,
      'Linux': /Linux/,
    }
  
    let browser = 'Unknown'
    for (const [name, regex] of Object.entries(browsers)) {
      if (regex.test(userAgent)) {
        browser = name
        break
      }
    }
  
    let device = 'Desktop'
    for (const [name, regex] of Object.entries(devices)) {
      if (regex.test(userAgent)) {
        device = name === 'Mobile' ? 'Mobile' : name === 'Tablet' ? 'Tablet' : 'Desktop'
        break
      }
    }
  
    let osName = 'Unknown'
    for (const [name, regex] of Object.entries(os)) {
      if (regex.test(userAgent)) {
        osName = name
        break
      }
    }
  
    return { browser, device, os: osName }
  }
  