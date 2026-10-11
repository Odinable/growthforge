import { FAQS, SITE, SOCIALS } from "@/lib/content";
import { ALL_SERVICES } from "@/lib/services";
import { SITE_URL } from "@/lib/site-url";

/**
 * JSON-LD for the one page this site has.
 *
 * Deliberately omitted:
 *   - BreadcrumbList — there is one page, so a breadcrumb trail would be
 *     fabricated structure. Google treats invented breadcrumbs as spam.
 *   - Article / author — this is an agency site, not editorial content.
 *     The people are described as Organization members instead.
 *
 * Every FAQ below is visible on the page, which is what Google requires
 * for FAQ rich results.
 */
export function StructuredData() {
  const graph = [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE.name,
      url: SITE_URL,
      email: SITE.email,
      description: SITE.metaDescription,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.png`,
        width: 256,
        height: 256,
      },
      slogan: SITE.tagline,
      sameAs: SOCIALS.map((s) => s),
      makesOffer: ALL_SERVICES.map((svc) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: svc.title,
          description: svc.description,
        },
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE.name,
      description: SITE.metaDescription,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-GB",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
