import { Kanit } from "next/font/google";
import "./globals.css";

const kanit_init = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
});

export const metadata = {
  title: "TheTaoMC",
  description: "Portfolio by TheTaoMC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kanit_init.className}>{children}</body>
    </html>
  );
}
