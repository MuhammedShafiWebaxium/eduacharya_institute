import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import styles from "../styles.css?url";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "EduAcharya Institute",
  url: "https://eduacharyainstitute.in",
  telephone: "+91-9746363807",
  email: "enquiry@eduacharyainstitution.in",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Grace Tower, Ground Floor, Door No. 67/1391, St. Vincent Road, Kacheripady",
    addressLocality: "Ernakulam",
    addressRegion: "Kerala",
    postalCode: "682018",
    addressCountry: "IN",
  },
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "EduAcharya Institute | B.Tech Credit Transfer Guidance" },
      {
        name: "description",
        content:
          "Explore recognized B.Tech credit transfer pathways with EduAcharya Institute. Free eligibility review, expert counselling and guided university admission support.",
      },
      {
        name: "keywords",
        content:
          "B.Tech credit transfer, B.Tech credit transfer Kerala, engineering credit transfer, complete B.Tech after backlogs, EduAcharya Institute",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:url", content: "https://eduacharyainstitute.in/" },
      { property: "og:site_name", content: "EduAcharya Institute" },
      { property: "og:title", content: "Complete Your B.Tech Journey | EduAcharya" },
      {
        property: "og:description",
        content: "Expert guidance for recognized B.Tech credit transfer pathways.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EduAcharya Institute" },
      {
        name: "twitter:description",
        content: "Complete what you started with expert B.Tech credit transfer guidance.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://eduacharyainstitute.in/" },
      { rel: "icon", href: `${import.meta.env.BASE_URL}favicon.svg`, type: "image/svg+xml" },
      { rel: "stylesheet", href: styles },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationSchema),
      },
    ],
  }),
  component: RootLayout,
  shellComponent: RootDocument,
});

function RootLayout() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      lerp: 0.1,
      syncTouch: false,
      anchors: {
        offset: window.innerWidth <= 720 ? -78 : -100,
      },
    });

    return () => lenis.destroy();
  }, []);

  return <Outlet />;
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
