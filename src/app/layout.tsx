import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yuva Raj Bhatta | Software Developer",
  description:
    "Personal website of Yuva Raj Bhatta, a full-stack software developer based in Fort Worth, Texas with experience in software engineering, data science, and modern backend systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
