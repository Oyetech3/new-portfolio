import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://oyetech.vercel.app";
  const lastModified = new Date();

  try {
    return [
      {
        url: baseUrl,
        lastModified,
        changeFrequency: "weekly",
        priority: 1,
      },
      {
        url: `${baseUrl}/about`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/projects`,
        lastModified,
        changeFrequency: "weekly", 
        priority: 0.8,
      },
      {
        url: `${baseUrl}/blog`,
        lastModified,
        changeFrequency: "weekly",
        priority: 0.7,
      },
      {
        url: `${baseUrl}/contact`,
        lastModified,
        changeFrequency: "yearly",
        priority: 0.5,
      },
  
      ...getBlogPosts().map(post => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.updatedAt || lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
    ];
  } catch (error) {
    console.error("Sitemap generation failed:", error);
    return [{
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    }];
  }
}

function getBlogPosts() {
  return [
    { slug: "how-i-built-my-portfolio", updatedAt: new Date("2025-08-17") },
    { slug: "how-to-set-up-authentication-in-nextjs", updatedAt: new Date("2025-08-26") },
  ];
}