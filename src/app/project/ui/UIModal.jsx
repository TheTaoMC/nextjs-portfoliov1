"use client";
import React from "react";
import { Button, Modal } from "antd";
import { Carousel } from "antd";
function UIModal({ open, setOpen }) {
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
            close
          </Button>,
        ]}
      >
        <Carousel arrows infinite={false}>
          <div className="bg-black h-[500px]">
            <div className=" flex justify-center items-center p-10 h-[500px]">
              <img className="h-[450px]" src="/webreport/1.png" alt="" />
            </div>
          </div>
          <div className="bg-black h-[500px]">
            <div className=" flex justify-center items-center p-10 h-[500px]">
              <img className="h-[450px]" src="/webreport/2.png" alt="" />
            </div>
          </div>
          <div className="bg-black h-[500px]">
            <div className=" flex justify-center items-center p-10 h-[500px]">
              <img
                className="h-[450px]"
                height="150px"
                src="/webreport/3.png"
                alt=""
              />
            </div>
          </div>
          <div className="bg-black h-[500px]">
            <div className=" flex justify-center items-center p-10 h-[500px]">
              <img className="h-[450px]" src="/webreport/4.png" alt="" />
            </div>
          </div>
          <div className="bg-black h-[500px]">
            <div className=" flex justify-center items-center p-10 h-[500px]">
              <img className="h-[450px]" src="/webreport/5.png" alt="" />
            </div>
          </div>
        </Carousel>
      </Modal>
    </>
  );
}

export default UIModal;
