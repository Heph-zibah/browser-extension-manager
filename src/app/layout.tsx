import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Browser Extension Manager",
  description: "Frontendmentor Challenge || Browser Extension Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[var(--background)]  transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
