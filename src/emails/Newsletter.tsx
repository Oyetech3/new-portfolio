function generateEmailHTML(post: any, blogUrl: string) {
    return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${post.frontmatter.title}</title>
  </head>
  <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #1e293b;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #0f172a;">
      
      <!-- Header -->
      <tr>
        <td style="padding: 40px 30px; text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
          <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">
            🚀 New Blog Post!
          </h1>
        </td>
      </tr>
  
      <!-- Content -->
      <tr>
        <td style="padding: 40px 30px;">
          <h2 style="margin: 0 0 20px; color: #f472b6; font-size: 24px;">
            ${post.frontmatter.title}
          </h2>
          
          <p style="margin: 0 0 20px; color: #cbd5e1; font-size: 16px; line-height: 1.6;">
            ${post.frontmatter.excerpt}
          </p>
  
          <table cellpadding="0" cellspacing="0" style="margin: 30px 0;">
            <tr>
              <td style="background: linear-gradient(135deg, #f04770 0%, #ff6b9d 100%); border-radius: 8px; padding: 14px 28px;">
                <a href="${blogUrl}" style="color: #ffffff; text-decoration: none; font-weight: bold; font-size: 16px; display: inline-block;">
                  Read Full Article →
                </a>
              </td>
            </tr>
          </table>
  
          <div style="margin-top: 30px; padding-top: 30px; border-top: 1px solid #334155;">
            <p style="margin: 0; color: #94a3b8; font-size: 14px;">
              📚 <strong>Read Time:</strong> ${post.frontmatter.readTime}<br>
              🏷️ <strong>Category:</strong> ${post.frontmatter.tag}
            </p>
          </div>
        </td>
      </tr>
  
      <!-- Footer -->
      <tr>
        <td style="padding: 30px; text-align: center; background-color: #020617;">
          <p style="margin: 0 0 10px; color: #64748b; font-size: 14px;">
            You're receiving this because you subscribed to OyeTech
          </p>
          <p style="margin: 0; color: #64748b; font-size: 12px;">
            <a href="https://oyetech.vercel.app/unsubscribe?email={{email}}" style="color: #f04770; text-decoration: none;">
              Unsubscribe
            </a> | 
            <a href="https://oyetech.vercel.app/blog" style="color: #f04770; text-decoration: none;">
              View All Posts
            </a>
          </p>
          
          <div style="margin-top: 20px;">
            <a href="https://twitter.com/OyekolaAbdulqo1" style="color: #94a3b8; text-decoration: none; margin: 0 10px;">Twitter</a>
            <a href="https://github.com/yourusername" style="color: #94a3b8; text-decoration: none; margin: 0 10px;">GitHub</a>
            <a href="https://linkedin.com/in/yourprofile" style="color: #94a3b8; text-decoration: none; margin: 0 10px;">LinkedIn</a>
          </div>
        </td>
      </tr>
    </table>
  </body>
  </html>
    `
  }