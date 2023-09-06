import "./styles/reset.css";
import "./styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Портфолио",
  description: "Портфолио frontend-разработчика",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
