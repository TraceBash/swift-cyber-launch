import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

const SEO = ({ title, description, keywords, ogImage, canonical }: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywords;
        document.head.appendChild(meta);
      }
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    // Update canonical URL
    if (canonical) {
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonical);
      } else {
        const link = document.createElement('link');
        link.rel = 'canonical';
        link.href = canonical;
        document.head.appendChild(link);
      }
    }

    // Add JSON-LD structured data
    const existingJsonLd = document.querySelector('#json-ld');
    if (existingJsonLd) {
      existingJsonLd.remove();
    }

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "TraceBash Security",
      "description": description,
      "url": window.location.origin,
      "logo": `${window.location.origin}/favicon.ico`,
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "info@tracebash.com",
        "contactType": "customer service"
      },
      "areaServed": "Worldwide",
      "serviceType": ["Penetration Testing", "Vulnerability Assessment", "Red Team Exercises"]
    };

    const script = document.createElement('script');
    script.id = 'json-ld';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }, [title, description, keywords, ogImage, canonical]);

  return null;
};

export default SEO;