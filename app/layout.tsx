import type { Metadata } from "next";
import { Roboto, Baloo_2 } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import LayoutProvider from "@/providers/LayoutProvider";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const baloo = Baloo_2({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextSTEP",
  description: "Odkryj swój przyszły kierunek studiów",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${roboto.className} antialiased flex flex-col min-h-screen`}
        >
          <LayoutProvider>{children}</LayoutProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
