import React, { useState } from "react";
import Container from "../components/container/Container";
import { Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from "antd";
import { Carousel } from "antd";
import "./css.css"; // นำเข้าไฟล์ CSS
function Project() {
  const [open, setOpen] = useState(false);

  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <>
      {/*Modal*/}
      <Modal
        title="Sample"
        centered
        onCancel={() => setOpen(false)}
        open={open}
        width={1000}
        footer={[
          <Button key="cancel" onClick={() => setOpen(false)}>
            Cancel
          </Button>,
        ]}
      >
        <Carousel arrows infinite={false}>
          <div className="bg-black h-[500px]">
            <img src="/webreport/1.png" alt="" />
          </div>
          <div className="bg-black h-[500px]">
            <img src="/webreport/2.png" alt="" />
          </div>
          <div className="bg-black h-[500px]">
            <img src="/webreport/3.png" alt="" />
          </div>
          <div className="bg-black h-[500px]">
            <img src="/webreport/4.png" alt="" />
          </div>
          <div className="bg-black h-[500px]">
            <img src="/webreport/5.png" alt="" />
          </div>
        </Carousel>
      </Modal>

      <Container>
        <div
          id="PROJECT"
          className="text-center py-4 mt-20 text-2xl font-bold uppercase"
        >
          Project
        </div>
        <div className="py-4">
          <hr />
        </div>
        <div className="flex gap-4 justify-center items-center flex-wrap">
          <Card
            title={
              <span className="text-xl font-bold">
                WebReportData{" "}
                <FontAwesomeIcon
                  onClick={() => setOpen(true)}
                  icon={faArrowUpRightFromSquare}
                  bounce
                />
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
        </div>
      </Container>
    </>
  );
}

export default Project;
