import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { profile } from "@/data/profile";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.personal.name} - ${profile.personal.title}`,
  description: `${profile.personal.tagline} - Portfolio showcasing full-stack development projects, experience, and skills.`,
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
    "MERN Stack",
    profile.personal.name.replace(" ", ", "),
  ],
  authors: [
    {
      name: profile.personal.name,
      url: profile.social.find((s) => s.platform === "GitHub")?.url,
    },
  ],
  creator: profile.personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bharadwajbingi.dev",
    siteName: `${profile.personal.name} - Portfolio`,
    title: `${profile.personal.name} - ${profile.personal.title}`,
    description: profile.personal.tagline,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${profile.personal.name} - ${profile.personal.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.personal.name} - ${profile.personal.title}`,
    description: profile.personal.tagline,
    images: ["/og-image.jpg"],
    creator:
      profile.social
        .find((s) => s.platform === "Twitter")
        ?.url?.replace("https://twitter.com/", "@") || "@bharadwajbingi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // TODO: Add Google Search Console verification
    // google: 'your-google-verification-code',
  },
};

// TODO: Add structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.personal.name,
  jobTitle: profile.personal.title,
  description: profile.personal.tagline,
  url: "https://bharadwajbingi.dev",
  sameAs: profile.social.map((s) => s.url),
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressLocality: profile.personal.location,
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: profile.personal.quickFacts.education,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://bharadwajbingi.dev" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* TODO: Add analytics script (Plausible or GA4) */}
        {/* TODO: Add sitemap generation with next-sitemap */}
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">{children}</div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
