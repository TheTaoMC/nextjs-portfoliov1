import Head from "next/head";
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
      {/*       <head>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="https://thetaomc.xyz/profile.jpg" />
        <meta property="og:url" content="https://thetaomc.xyz/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TheTaoMC" />
      </head> */}

      <Head>
        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />

        <meta
          property="og:image"
          content={"https://thetaomc.xyz/profile.jpg"}
        />
        <meta property="og:url" content="https://thetaomc.xyz/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content={"https://thetaomc.xyz/profile.jpg"}
        />
      </Head>
      <body className={kanit_init.className}>{children}</body>
    </html>
  );
}
