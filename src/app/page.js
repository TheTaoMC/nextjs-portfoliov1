import Image from "next/image";
import React from "react";
import { Button } from "primereact/button";
import Navber from "./components/navbar/Navber";
import AboutME from "./aboutme/page";

export default function Home() {
  return (
    <>
      <Navber />
      <AboutME />
      <Button label="Check" icon="pi pi-check" />
    </>
  );
}
