"use client";
import React, { useState } from "react";
import Container from "../components/container/Container";
import { Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import "./css.css"; // นำเข้าไฟล์ CSS
import UIModal from "./ui/UIModal";
import HeaderTitle from "../components/headertitle/HeaderTitle";
function Project() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/*Modal*/}
      <UIModal open={open} setOpen={setOpen} />

      <Container>
        <HeaderTitle id={"PROJECT"} title={"PROJECT"} />
        <div className="flex gap-6 justify-center items-center flex-wrap  p-4">
          <Card
            title={
              <span
                className="text-xl font-bold text-gray-200 cursor-pointer"
                onClick={() => setOpen(true)}
              >
                WebReportData{" "}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  bounce
                  className="text-gray-400"
                />
              </span>
            }
            bordered={false}
            style={{ width: 250, height: 180 }}
            className="bg-gray-800 hover:bg-gray-900 hover:scale-105 hover:z-50 transition-all duration-500 "
          >
            <div>
              <div className="font-semibold text-gray-400">STACK</div>
              <div className="text-gray-300">
                Front End : React,Tailwind CSS,PrimeReact
              </div>
              <div className="text-gray-300">
                Back End : 3rd Party(PHP,MySql)
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default Project;
