import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  metadataBase: new URL("https://leannation.com.bd"),
  title: "Lean Nation — Stop cooking. Start Living.",
  description:
    "Dhaka's premier meal plan. 4 chef-cooked meals a day, delivered fresh to your door every morning. Free delivery on every order.",
  openGraph: {
    title: "Lean Nation — Stop cooking. Start Living.",
    description:
      "Dhaka's premier meal plan. 4 chef-cooked meals a day, delivered fresh to your door every morning. Free delivery on every order.",
    type: "website",
    siteName: "Lean Nation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lean Nation — Stop cooking. Start Living.",
    description:
      "Dhaka's premier meal plan. 4 chef-cooked meals a day, delivered fresh to your door every morning.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
