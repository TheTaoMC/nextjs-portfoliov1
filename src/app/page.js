import Image from "next/image";
import React from "react";
import { Button } from "primereact/button";
import Navber from "./components/navbar/Navber";
import AboutME from "./aboutme/page";
import Education from "./education/page";

export default function Home() {
  return (
    <>
      <Navber />
      <AboutME />
      <Education />
    </>
  );
}
