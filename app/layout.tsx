import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omnia Nabil — Android Developer",
  description: "Android Developer specializing in Kotlin and Jetpack Compose.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}