import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./styles/resetCss.css";
import "./styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "../components/my-components/ThemeProvider";

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
	title: "Alternance Fullstack | React/Next.js",
	description: "Alternance développeuse fullstack : React, Next.js, TypeScript, Node.js, MySQL. Découvrez mes réalisations web.",
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr" className="h-full" suppressHydrationWarning>
			<body
				className={cn(
					geistSans.variable,
					geistMono.variable,
					poppins.variable,
					"font-sans h-full",
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
