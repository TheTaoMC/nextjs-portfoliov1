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
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="https://thetaomc.xyz/profile.jpg" />
        <meta property="og:url" content="https://thetaomc.xyz/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TheTaoMC" />
      </head>
      <body className={kanit_init.className}>{children}</body>
    </html>
  );
}
