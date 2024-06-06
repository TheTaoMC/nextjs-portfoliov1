"use client";
import { Kanit } from "next/font/google";

const kanit_init = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
});
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navber from "./components/navbar/Navber";
import AboutME from "./aboutme/page";
import Education from "./education/page";

import { FloatButton, ConfigProvider } from "antd";

import { animateScroll as scroll } from "react-scroll";
import Experience from "./experience/page";
import Project from "./project/page";
import Stack from "./stack/page";
import ContactME from "./contactme/page";
import Preloader from "./components/preloader/Preloader";
import SectionWrapper from "./components/sectionWrapper/SectionWrapper";
import Footer from "./footer/page";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer); // ล้าง timer เมื่อ component unmount
  }, []);
  return (
    <>
      <Preloader isLoading={isLoading} />
      <ConfigProvider
        theme={{
          token: {
            fontFamily: kanit_init.style.fontFamily,
          },
        }}
      >
        <Navber />
        <SectionWrapper>
          <AboutME />
        </SectionWrapper>
        <SectionWrapper>
          <Education />
        </SectionWrapper>
        <SectionWrapper>
          <Experience />
        </SectionWrapper>
        <SectionWrapper>
          <Project />
        </SectionWrapper>
        <SectionWrapper>
          <Stack />
        </SectionWrapper>
        <SectionWrapper>
          <ContactME />
        </SectionWrapper>
        <SectionWrapper>
          <Footer />
        </SectionWrapper>
        <FloatButton.BackTop />
      </ConfigProvider>
    </>
  );
}
