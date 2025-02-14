"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

// Chakra UIのシステム設定
const system = createSystem(defaultConfig, {
	theme: {
		tokens: {
			fonts: {
				heading: { value: "Geist, sans-serif" },
				body: { value: "Geist, sans-serif" },
				mono: { value: "Geist Mono, monospace" },
			},
		},
	},
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ChakraProvider value={system}>{children}</ChakraProvider>
			</body>
		</html>
	);
}
