"use client";

export default function SEOJsonLd() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Oyekola Abdulqobid Bolaji",
    alternateName: "Oyetech",
    jobTitle: "Fullstack Developer",
    image: "https://oyetech.vercel.app/assets/profiles/pro2.jpg",
    url: "https://oyetech.vercel.app",
    sameAs: [
      "https://github.com/Oyetech3",
      "https://linkedin.com/in/oyekola-abdulqobid-bolaji-999490271",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Oyetech",
      url: "https://portfolio-oyetech.netlify.app",
      logo: "https://oyetech.vercel.app/assets/faviconn.png",
    },
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Oyetech",
    url: "https://oyetech.vercel.app",
    logo: "https://oyetech.vercel.app/assets/faviconn.png",
    founder: {
      "@type": "Person",
      name: "Oyekola Abdulqobid Bolaji",
    },
    sameAs: [
      "https://github.com/Oyetech3",
      "https://linkedin.com/in/oyekola-abdulqobid-bolaji-999490271",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
    </>
  );
}
