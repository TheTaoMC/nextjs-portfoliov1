"use client";
import React, { useState } from "react";
import Container from "../components/container/Container";
import { Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import "./css.css"; // นำเข้าไฟล์ CSS
import UIModal from "./ui/UIModal";
function Project() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/*Modal*/}
      <UIModal open={open} setOpen={setOpen} />

      <Container>
        <div
          id="PROJECT"
          className="text-center py-4 mt-20 text-2xl font-bold uppercase"
        >
          Project
        </div>
        <div className="py-4 scale-105">
          <hr />
        </div>
        <div className="flex gap-4 justify-center items-center flex-wrap">
          <Card
            title={
              <span
                className="text-xl font-bold cursor-pointer"
                onClick={() => setOpen(true)}
              >
                WebReportData{" "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} bounce />
              </span>
            }
            bordered={false}
            style={{ width: 250, height: 180 }}
            className="bg-blue-200 hover:bg-blue-300 hover:scale-105 hover:z-50 transition-all duration-500 "
          >
            <div>
              <div className="font-semibold">STACK</div>
              <div>Front End : React,Tailwind CSS,PrimeReact</div>
              <div>Back End : 3rd Party(PHP,MySql)</div>
            </div>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default Project;
