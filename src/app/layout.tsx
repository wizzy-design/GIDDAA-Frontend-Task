import type { Metadata } from "next";
import "./globals.css";
import { UserProvider } from "@/context/UserContext";
import { Toaster } from "react-hot-toast";
import QueryProvider from "@/providers/QueryProvider";

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
      <body className={``}>
        <QueryProvider>
          <UserProvider>
            {typeof window !== "undefined" && <Toaster position="top-center" />}
            {children}
          </UserProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
