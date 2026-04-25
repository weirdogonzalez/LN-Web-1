import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Today's Menu",
};

export default function TodaysMenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
