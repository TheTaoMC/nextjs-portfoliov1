"use client";
import React from "react";
import Container from "../components/container/Container";
import { Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import HeaderTitle from "../components/headertitle/HeaderTitle";
function Stack() {
  return (
    <>
      <Container>{/* 
        <div
          id="STACK"
          className="text-center py-8 mt-20 text-4xl font-bold tracking-wider text-gray-700 uppercase"
        >
          Stack
        </div>
        <div className="py-2 mb-4">
          <hr className="border-gray-700 w-2/3 mx-auto" />
        </div> */}
        <HeaderTitle id={"STACK"} title={"STACK"} />
        <div className="flex gap-6 justify-center items-center flex-wrap  p-4">
          <Card
            title={
              <span className="text-xl font-bold text-gray-200 cursor-pointer">
                Front End
              </span>
            }
            bordered={false}
            style={{ width: 250, height: 180 }}
            className="bg-gray-800 hover:bg-gray-900 hover:scale-105 hover:z-50 transition-all duration-500 "
          >
            <p className="font-semibold text-gray-400">ReactJS - NextJS</p>
            <p className="font-semibold text-gray-400">Tailwind CSS</p>
            <p className="font-semibold text-gray-400">
              PrimeReact - UI components
            </p>
            <p className="font-semibold text-gray-400">
              Ant Design - UI components
            </p>
          </Card>
          <Card
            title={
              <span className="text-xl font-bold text-gray-200 cursor-pointer">
                Back End
              </span>
            }
            bordered={false}
            style={{ width: 250, height: 180 }}
            className="bg-gray-800 hover:bg-gray-900 hover:scale-105 hover:z-50 transition-all duration-500 "
          >
            <p className="font-semibold text-gray-400">Express - Node.js</p>
            <p className="font-semibold text-gray-400">SqlServer</p>
            <p className="font-semibold text-gray-400">MySql</p>
          </Card>

          <Card
            title={
              <span className="text-xl font-bold text-gray-200 cursor-pointer">
                Version Control
              </span>
            }
            bordered={false}
            style={{ width: 250, height: 180 }}
            className="bg-gray-800 hover:bg-gray-900 hover:scale-105 hover:z-50 transition-all duration-500 "
          >
            <p className="font-semibold text-gray-400">
              Github{" "}
              <a
                href="https://github.com/TheTaoMC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} bounce />
              </a>
            </p>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default Stack;
