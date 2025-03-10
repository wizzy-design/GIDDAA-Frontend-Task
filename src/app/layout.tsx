import type { Metadata } from "next";
import "./globals.css";
import { UserProvider } from "@/context/UserContext";
import { Toaster } from "react-hot-toast";
import QueryProvider from "@/providers/QueryProvider";
import { Red_Hat_Display } from "next/font/google";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Giddaa",
  description: "Interview task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* I put suppressHydrationWarning={true} here because some browser extensions were causing hydration error */}
      <body className={redHatDisplay.className} suppressHydrationWarning={true}>
        <QueryProvider>
          <UserProvider>
            <Toaster position="top-center" />
            {children}
          </UserProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
