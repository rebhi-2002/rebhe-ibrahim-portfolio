// ⚠️ Problem explanation:
// This code tries to import Next.js-specific modules (like next/head and next/router), which are not available in standard Vite/React projects.
// The solution is provided below the original code using react-helmet-async and react-router-dom as Vite-compatible alternatives.

// import Head from "next/head";
// import { useRouter } from "next/router";

import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SeoComponentProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImageUrl?: string;
  schemaType?: "Person" | "WebSite" | "Article" | "Project" | "Organization";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  articleSection?: string;
  tags?: string[];
  noIndex?: boolean;
  priority?: number;
  changeFreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
}

// Wrapped in HelmetProvider for react-helmet-async compatibility
const SeoComponent: React.FC<SeoComponentProps> = ({
  title,
  description,
  keywords = "Digital Experience Architect, Web Development, UI/UX Design, React, Next.js, Performance Optimization",
  canonicalUrl,
  ogImageUrl = "/images/og-default.jpg",
  schemaType = "WebSite",
  publishedTime,
  modifiedTime,
  author = "Rebhe Ibrahim",
  articleSection,
  tags = [],
  noIndex = false,
  // priority = 0.8,
  // changeFreq = "weekly",
}) => {
  // const router = useRouter();
  const location = useLocation();
  const baseUrl = "https://rebhe-ibrahim-portfolio.vercel.app/";
  // const fullUrl = canonicalUrl || `${baseUrl}${router.asPath}`;
  const fullUrl = canonicalUrl || `${baseUrl}${location.pathname}`;
  const fullTitle = title.includes("Rebhe Ibrahim")
    ? title
    : `${title} | Rebhe Ibrahim - Digital Experience Architect`;
  const fullOgImageUrl = ogImageUrl.startsWith("http")
    ? ogImageUrl
    : `${baseUrl}${ogImageUrl}`;

  // Generate structured data based on schema type
  const generateStructuredData = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": schemaType,
    };

    switch (schemaType) {
      case "Person":
        return {
          ...baseSchema,
          name: "Rebhe Ibrahim",
          jobTitle: "Digital Experience Architect",
          description:
            "Expert in building high-performance web applications that scale, convert, and deliver exceptional user experiences.",
          url: baseUrl,
          image: `${baseUrl}/images/rebhe-ibrahim.jpg`,
          sameAs: [
            "https://linkedin.com/in/rebhe-ibrahim-451504244",
            "https://github.com/rebhi-2002",
            "https://twitter.com/rebhe_1643",
          ],
          worksFor: {
            "@type": "Organization",
            name: "Rebhe Ibrahim Consulting",
            url: baseUrl,
          },
          knowsAbout: [
            "Web Development",
            "React",
            "Next.js",
            "UI/UX Design",
            "Performance Optimization",
            "Full-Stack Development",
          ],
          alumniOf: {
            "@type": "EducationalOrganization",
            name: "Computer Science",
          },
        };

      case "WebSite":
        return {
          ...baseSchema,
          name: "Rebhe Ibrahim - Digital Experience Architect",
          description,
          url: baseUrl,
          author: {
            "@type": "Person",
            name: "Rebhe Ibrahim",
          },
          publisher: {
            "@type": "Person",
            name: "Rebhe Ibrahim",
          },
          potentialAction: {
            "@type": "SearchAction",
            target: `${baseUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        };

      case "Article":
        return {
          ...baseSchema,
          headline: title,
          description,
          image: fullOgImageUrl,
          author: {
            "@type": "Person",
            name: author,
          },
          publisher: {
            "@type": "Person",
            name: "Rebhe Ibrahim",
            logo: {
              "@type": "ImageObject",
              url: `${baseUrl}/images/logo.png`,
            },
          },
          datePublished: publishedTime,
          dateModified: modifiedTime || publishedTime,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": fullUrl,
          },
          articleSection,
          keywords: tags.join(", "),
          wordCount: description.length,
        };

      case "Project":
        return {
          ...baseSchema,
          "@type": "CreativeWork",
          name: title,
          description,
          image: fullOgImageUrl,
          creator: {
            "@type": "Person",
            name: "Rebhe Ibrahim",
          },
          dateCreated: publishedTime,
          dateModified: modifiedTime,
          url: fullUrl,
          keywords: tags.join(", "),
          genre: "Web Development",
          inLanguage: "en-US",
        };

      default:
        return baseSchema;
    }
  };

  return (
    // <HelmetProvider>
    <Helmet>
      {/* // <Head> */}
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Language and Locale */}
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="language" content="English" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta
        property="og:type"
        content={schemaType === "Article" ? "article" : "website"}
      />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullOgImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta
        property="og:site_name"
        content="Rebhe Ibrahim | Digital Experience Architect"
      />
      <meta property="og:locale" content="en_US" />

      {/* Article-specific Open Graph */}
      {schemaType === "Article" && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          <meta
            property="article:modified_time"
            content={modifiedTime || publishedTime}
          />
          <meta property="article:author" content={author} />
          {articleSection && (
            <meta property="article:section" content={articleSection} />
          )}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@rebheibrahim" />
      <meta name="twitter:creator" content="@rebheibrahim" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImageUrl} />
      <meta name="twitter:image:alt" content={title} />

      {/* Additional Social Meta Tags */}
      <meta property="fb:app_id" content="your-facebook-app-id" />
      <meta name="linkedin:owner" content="rebheibrahim" />

      {/* Theme and Brand Colors */}
      <meta name="theme-color" content="#00A3FF" />
      <meta name="msapplication-TileColor" content="#00A3FF" />
      <meta name="msapplication-navbutton-color" content="#00A3FF" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />

      {/* Performance and Resource Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="preconnect" href="https://images.pexels.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

      {/* Favicon and Icons */}
      {/* <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      /> */}
      {/* <link rel="manifest" href="/site.webmanifest" /> */}

      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      {/* <meta httpEquiv="X-Frame-Options" content="DENY" /> */}
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta
        httpEquiv="Referrer-Policy"
        content="strict-origin-when-cross-origin"
      />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData()),
        }}
      />

      {/* Additional Schema for Breadcrumbs */}
      {/* {router.asPath !== "/" && ( */}
      {location.pathname !== "/" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: baseUrl,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: title,
                  item: fullUrl,
                },
              ],
            }),
          }}
        />
      )}
      {/* </Head> */}
    </Helmet>
    // </HelmetProvider>
  );
};

export default SeoComponent;
