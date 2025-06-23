// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import SessionWrapper from "@/components/SessionWrapper";

export const metadata: Metadata = {
  title: "Google Login App",
  description: "Better SQLite + Google Auth",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}
