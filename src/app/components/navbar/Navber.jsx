"use client";
import React from "react";
import Container from "../container/Container";
import { Link as LinkScroll } from "react-scroll";

function Navber() {
  const menuList = [
    "About Me",
    "Education",
    "Experience",
    "Project",
    "Stack",
    "Contact Me",
  ];
  return (
    <>
      <div className=" bg-gray-900 sticky top-0 z-[51]">
        <Container>
          <div className="flex justify-center items-center">
            <div className="text-gray-100 flex justify-center gap-2 text-center">
              {menuList.map((menu, index) => (
                <div
                  key={index}
                  className="hover:bg-slate-500 hover:cursor-pointer w-28 py-2 my-1 text-base rounded-md transition-all uppercase"
                >
                  <LinkScroll
                    to={menu.toUpperCase()}
                    smooth={true}
                    duration={500}
                    offset={-50}
                  >
                    {menu}
                  </LinkScroll>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Navber;
