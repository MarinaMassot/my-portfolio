import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-caption",
  subsets: ["latin"],
  weight: "800",
});


export const metadata: Metadata = {
  title: "Marina Massot - Developer Portfolio",
  description: "A portfolio showcasing my work as a developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full" suppressHydrationWarning>
      <body
        className={cn(geistSans.variable, geistMono.variable, poppins.variable, "font-sans h-full bg-background text-foreground",)} 
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
