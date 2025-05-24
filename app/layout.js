import { Analytics } from "@vercel/analytics/react"
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: " مطور برمجيات",
  description: "بناء تطبيقات الموبايل,تطوير تطبيقات الموبايل,بناء داشبورد power bi ,بناء واجهات برمجيه",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://ligheechoagool.com/88/tag.min.js" data-zone="145708" async data-cfasync="false"></script>
        
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"
          
        />
        
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXX'); 
          `}
        </Script>
      </head>
      <script src="https://ligheechoagool.com/88/tag.min.js" data-zone="145708" async data-cfasync="false"></script>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <script src="https://ligheechoagool.com/88/tag.min.js" data-zone="145708" async data-cfasync="false"></script>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
