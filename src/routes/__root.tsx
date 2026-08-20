import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useEffect } from "react";
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
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
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
    let animationFrame = 0;

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!target) return;

      event.preventDefault();
      cancelAnimationFrame(animationFrame);
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const offset = window.innerWidth <= 720 ? 78 : 100;
      const start = window.scrollY;
      const destination = Math.max(0, target.getBoundingClientRect().top + start - offset);

      if (reducedMotion) {
        window.scrollTo(0, destination);
        window.history.pushState(null, "", hash);
        return;
      }

      const distance = destination - start;
      const duration = Math.min(1250, Math.max(750, Math.abs(distance) * 0.55));
      const startedAt = performance.now();
      const easeInOutQuint = (progress: number) => progress < 0.5
        ? 16 * progress ** 5
        : 1 - Math.pow(-2 * progress + 2, 5) / 2;

      const animate = (now: number) => {
        const progress = Math.min(1, (now - startedAt) / duration);
        window.scrollTo(0, start + distance * easeInOutQuint(progress));
        if (progress < 1) animationFrame = requestAnimationFrame(animate);
        else window.history.pushState(null, "", hash);
      };

      animationFrame = requestAnimationFrame(animate);
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(animationFrame);
    };
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
