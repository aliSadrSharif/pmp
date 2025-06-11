import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Project Management Platform",
  description: "Project Management Platform next app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-screen bg-gradient-to-tr from-blue-300 via-purple-300/40 to-indigo-400"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
}
