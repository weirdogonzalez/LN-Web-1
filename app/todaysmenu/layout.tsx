import type { Metadata } from "next";

const title = "Today's Menu — Lean Nation";
const description =
  "See exactly what's being cooked today. A different chef-crafted plate every day across our 10-day rotation, delivered fresh before 9am.";

export const metadata: Metadata = {
  title: "Today's Menu",
  description,
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Lean Nation",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function TodaysMenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
