import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {ClerkProvider} from '@clerk/nextjs';


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
    <ClerkProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
    </ClerkProvider>

  );
}




