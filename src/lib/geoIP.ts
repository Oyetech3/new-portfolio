export async function getLocationFromIP(ip: string) {
 
  if (!ip || ip === '::1' || ip === '127.0.0.1' || ip.startsWith('192.168') || ip.startsWith('10.')) {
    return { country: 'Local', city: 'Local' }
  }

  try {
  
    const res = await fetch(`http://ip-api.com/json/${ip}?fields=country,city,status,message`, {
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      console.warn(`GeoIP API returned ${res.status} for IP: ${ip}`)
      return { country: 'Unknown', city: 'Unknown' }
    }

    const data = await res.json()

    if (data.status === 'fail') {
      console.warn(`GeoIP API error: ${data.message} for IP: ${ip}`)
      return { country: 'Unknown', city: 'Unknown' }
    }

    return {
      country: data.country || 'Unknown',
      city: data.city || 'Unknown',
    }
  } catch (error) {
    console.error(`GeoIP fetch error for IP ${ip}:`, error)
    return { country: 'Unknown', city: 'Unknown' }
  }
}