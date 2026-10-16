import { site } from "@/lib/site";

/** Structured data for search engines: the website, and the open-source project behind it. */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        inLanguage: "en",
        author: { "@type": "Person", name: site.author.name, url: site.author.github },
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": `${site.url}/#code`,
        name: site.name,
        description: site.description,
        programmingLanguage: "TypeScript",
        runtimePlatform: "React",
        license: site.license,
        codeRepository: site.repo,
        author: { "@type": "Person", name: site.author.name, url: site.author.github },
      },
    ],
  };
  // "<" is escaped so the payload can never close the script tag
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
