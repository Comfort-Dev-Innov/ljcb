import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LJCB Philippines Inc.",
  description: "A leading wholesale and retail supplier in Cebu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
