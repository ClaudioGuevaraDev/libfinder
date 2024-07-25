import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LibFinder - Find the Perfect Library for Every Project",
  description:
    "LibFinder offers AI-powered recommendations to help developers discover and choose the best libraries for their coding projects.",
  applicationName: "LibFinder",
  authors: [{ name: "Claudio Guevara Vásquez" }],
  keywords: [
    "LibFinder",
    "programming libraries",
    "AI recommendations",
    "code optimization",
    "web development tools",
    "software libraries",
  ],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative isolate overflow-hidden bg-gray-900">
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
          <div className="w-full h-full min-h-screen max-w-screen-md mx-auto px-6 pb-6 pt-10 lg:px-8">
            <Providers>{children}</Providers>
          </div>
        </div>
      </body>
    </html>
  );
}
