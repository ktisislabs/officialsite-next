import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ktisis Labs : Innovation Sculpts Empowerment from Adversity",
  description:
    "Ktisis Labs, where we empower innovation by helping businesses thrive through cutting-edge tech services, seamless digital solutions, and transformative strategies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Primary Meta Tags */}
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="tech solutions, digital transformation, software development, Ktisis Labs" />
        <meta name="author" content="Ktisis Labs" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/Logo-white.jpg" />
        <meta property="og:url" content="https://www.ktisislabs.com" />
        <meta property="og:site_name" content="Ktisis Labs" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/Logo-white.jpg" />


      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
