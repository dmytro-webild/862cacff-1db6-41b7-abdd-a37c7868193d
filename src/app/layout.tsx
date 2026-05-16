import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito } from "next/font/google";



export const metadata: Metadata = {
  title: 'Jubba Shop Kenya | Authentic Electronics & Gadgets',
  description: 'Jubba Shop Kenya offers premium electronics and gadgets at Bihi Towers, Moi Avenue. Best deals, genuine quality, and top-rated customer service in Nairobi.',
  keywords: ["electronics store Kenya, Jubba Shop Moi Avenue, buy smartphones Nairobi, genuine gadgets Kenya, Nairobi electronics"],
  openGraph: {
    "title": "Jubba Shop Kenya",
    "description": "Authentic electronics and gadgets in Nairobi.",
    "siteName": "Jubba Shop Kenya"
  },
};

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunito.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
