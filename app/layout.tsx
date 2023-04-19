import { Header, Nav } from "@/components";
import "./globals.css";
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Hekto",
  description: "An elegant ecommerce website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={josefinSans.className}>
      <body>
        <Header />
        <Nav />
        {children}
      </body>
    </html>
  );
}
