import { getAllPostsAction } from "@/lib/mdx";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const blogPosts = await getAllPostsAction();

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
        url: `${baseUrl}/skills`,
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
  
      ...blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.frontmatter.date),
        changeFrequency: "monthly" as const,
        priority: 0.7,
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
