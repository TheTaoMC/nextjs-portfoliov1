"use client";
import Image from "next/image";
import React from "react";
import { Button } from "primereact/button";
import Navber from "./components/navbar/Navber";
import AboutME from "./aboutme/page";
import Education from "./education/page";

import { FloatButton } from "antd";

import { animateScroll as scroll } from "react-scroll";
import Experience from "./experience/page";
import Project from "./project/page";

export default function Home() {
  return (
    <>
      <Navber />
      <AboutME />
      <Education />
      <Experience />
      <Project />
      <a onClick={() => scroll.scrollTo(100)}>go to top</a>
      <FloatButton.BackTop />
    </>
  );
}
