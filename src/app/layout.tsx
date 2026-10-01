import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const proximaNova = localFont({
  src: [
    {
      path: "./fonts/proxima-nova.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/proxima-nova-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Payuung Pribadi",
  description: "Daily Balance",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className={`${proximaNova.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}