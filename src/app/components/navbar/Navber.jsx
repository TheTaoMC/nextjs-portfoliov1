"use client";
import React, { useState } from "react";
import Container from "../container/Container";
import { Link as LinkScroll } from "react-scroll";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navber() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <div className=" bg-gray-900 sticky top-0 z-[51] h-[48px]">
        <Container>
          <div className="sm:flex justify-center items-center hidden transition-all">
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

          {/* Mobile */}
          <div className="sm:hidden relative flex justify-end items-center">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-100 hover:bg-slate-500 p-2 rounded-md"
            >
              <FontAwesomeIcon icon={faBars} /> Menu
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="absolute top-12 left-0 w-full bg-gray-800 flex justify-center items-center">
                <div className="text-gray-100 flex flex-col gap-2 text-center">
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
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {menu}
                      </LinkScroll>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Navber;
