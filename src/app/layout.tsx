import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JavaScript Calculator",
  description: "A modern, fully functional calculator built with JavaScript and Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <main className="w-full max-w-md">
          {children}
        </main>
      </body>
    </html>
  );
}