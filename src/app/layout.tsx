import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteIcon = "/yuva-headshot.PNG";
const siteUrl = "https://yrbhatta.com";
const siteTitle = "Yuva Bhatta | Software Developer";
const siteDescription =
  "Modern developer portfolio for Yuva Bhatta, a Texas-based software developer focused on backend engineering, AI automation, cloud infrastructure, data science, and full-stack systems.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Yuva Bhatta",
  },
  description: siteDescription,
  applicationName: "Yuva Bhatta",
  authors: [{ name: "Yuva Bhatta", url: siteUrl }],
  keywords: [
    "Yuva Bhatta",
    "Software Developer",
    "Backend Engineer",
    "Full Stack Developer",
    "Data Science",
    "Cloud Infrastructure",
    "Paychex",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Yuva Bhatta",
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@YuvaBhatta",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    // TODO: Replace with a dedicated square favicon when a final brand mark is ready.
    icon: [{ url: siteIcon, type: "image/png" }],
    apple: [{ url: siteIcon, type: "image/png" }],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yuva Bhatta",
  url: siteUrl,
  jobTitle: "Software Developer",
  worksFor: {
    "@type": "Organization",
    name: "Paychex",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of the Cumberlands",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "East Central University",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/in/yuva-raj-bhatta-900ab923a",
    "https://github.com/yuvarajbhatta",
    "https://x.com/YuvaBhatta",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${inter.variable}`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ("scrollRestoration" in history) {
                history.scrollRestoration = "manual";
              }

              var navigation = performance.getEntriesByType("navigation")[0];
              var isReload = navigation && navigation.type === "reload";

              if (isReload && window.location.hash) {
                history.replaceState(null, "", window.location.pathname + window.location.search);
                window.scrollTo(0, 0);
              }
            `,
          }}
        />
        <a href="#home" className="skip-link">
          Skip to content
        </a>
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
