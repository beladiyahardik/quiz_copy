"use client";
import SetLayout from "@/component/SetLayout";
import { UserProvider } from "@/context/UserContext";
import localFont from "next/font/local";
import "./globals.css";
import styles from "./page.module.css";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${styles.page}`}>
        <div className={styles.containt}>
          <Script
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7783949773484647"
            strategy="beforeInteractive"
            crossOrigin="anonymous" />
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-KLESQGYNV7" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-KLESQGYNV7', {
                    page_path: window.location.pathname,
                  });
                `,
            }}
          />
          <UserProvider>
            <SetLayout children={children} />
          </UserProvider>
        </div>
      </body>
    </html>
  );
}
