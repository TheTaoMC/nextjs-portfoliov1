"use client";
import { Kanit } from "next/font/google";

const kanit_init = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
});
import Image from "next/image";
import React from "react";
import Navber from "./components/navbar/Navber";
import AboutME from "./aboutme/page";
import Education from "./education/page";

import { FloatButton, ConfigProvider } from "antd";

import { animateScroll as scroll } from "react-scroll";
import Experience from "./experience/page";
import Project from "./project/page";
import Stack from "./stack/page";
import ContactME from "./contactme/page";

export default function Home() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: kanit_init.style.fontFamily,
          },
        }}
      >
        <Navber />
        <AboutME />
        <Education />
        <Experience />
        <Project />
        <Stack />
        <ContactME />
        <FloatButton.BackTop />
      </ConfigProvider>
    </>
  );
}
