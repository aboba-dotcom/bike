"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "../components/layout";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
      <Layout>{children}</Layout>
      </body>
    </html>
  );
}

export default RootLayout
