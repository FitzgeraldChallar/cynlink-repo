import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Cynlink Online Store",
  description: "A Liberian-owned Ecommerce Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">{children}</body>
    </html>
  );
}
