import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Free Online Tools for Developers & Students",
  description: "A collection of simple, fast, and free online tools including Word Counter, JSON Formatter, Case Converter, and Remove Duplicate Lines. No login required.",
  keywords: "free, online, tool, developer tools, without login, simple, fast",
  icons: {
    icon: "/binary-code.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen flex flex-col font-sans antialiased text-slate-900 bg-slate-50 dark:text-slate-50 dark:bg-slate-950`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
          <Toaster position="bottom-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
