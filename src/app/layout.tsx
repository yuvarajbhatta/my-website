import type { Metadata } from "next";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";
import "./globals.css";

const siteIcon = "/yuva-headshot.PNG";

export const metadata: Metadata = {
  title: "Yuva Bhatta | Software Developer",
  description:
    "Modern developer portfolio for Yuva Bhatta, a Texas-based software developer focused on backend engineering, AI automation, cloud infrastructure, data science, and full-stack systems.",
  icons: {
    // TODO: Replace with a dedicated square favicon when a final brand mark is ready.
    icon: [{ url: siteIcon, type: "image/png" }],
    apple: [{ url: siteIcon, type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
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
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
