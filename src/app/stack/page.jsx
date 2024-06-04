import React from "react";
import Container from "../components/container/Container";
import { Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
function Stack() {
  return (
    <>
      <Container>
        <div
          id="STACK"
          className="text-center py-4 mt-20 text-2xl font-bold uppercase"
        >
          Stack
        </div>
        <div className="py-4">
          <hr />
        </div>
        <div className="flex gap-4 justify-center items-center flex-wrap">
          <Card
            title={<span className="text-xl font-bold">Front End</span>}
            bordered={false}
            style={{ width: 250, height: 180 }}
            className="bg-blue-200 hover:bg-blue-300 hover:scale-105 hover:z-50 transition-all duration-500 "
          >
            <p>ReactJS - NextJS</p>
            <p>Tailwind CSS</p>
            <p>PrimeReact - UI components</p>
            <p>Ant Design - UI components</p>
          </Card>
          <Card
            title={<span className="text-xl font-bold ">Back End</span>}
            bordered={false}
            style={{ width: 250, height: 180 }}
            className="bg-blue-200 hover:bg-blue-300 hover:scale-105 hover:z-50 transition-all duration-500 "
          >
            <p>Express - Node.js</p>
            <p>SqlServer</p>
            <p>MySql</p>
          </Card>

          <Card
            title={<span className="text-xl font-bold">Version Control</span>}
            bordered={false}
            style={{ width: 250, height: 180 }}
            className="bg-blue-200 hover:bg-blue-300 hover:scale-105 hover:z-50 transition-all duration-500 "
          >
            <p>
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
