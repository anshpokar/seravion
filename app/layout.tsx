import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";

const plusJakarta = Plus_Jakarta_Sans({
 subsets: ["latin"],
 weight: ["300", "400", "500", "600", "700"],
 variable: "--font-plus-jakarta",
});

export const metadata = {
 title: "Seravion Technologies",
 description: "Engineering the future of digital experience",
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
   <html lang="en">
     <body className={`${plusJakarta.variable} ${plusJakarta.className}`} suppressHydrationWarning>
       {children}
       <ScrollToTop />
     </body>
   </html>
 );
}
