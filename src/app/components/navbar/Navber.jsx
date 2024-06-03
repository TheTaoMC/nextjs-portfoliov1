"use client";
import React from "react";
import Container from "../container/Container";
import { Link as LinkScroll } from "react-scroll";

function Navber() {
  return (
    <>
      <div className=" bg-gray-900 sticky top-0">
        <Container>
          <div className="flex justify-center items-center">
            <div className="text-gray-100 flex justify-center gap-2 text-center">
              <div className="hover:bg-slate-500 hover:cursor-pointer w-28 py-2 my-1 text-base rounded-md transition-all">
                <LinkScroll to="about-me" smooth={true} duration={500}>
                  About Me
                </LinkScroll>
              </div>
              <div className="hover:bg-slate-500 hover:cursor-pointer w-28 py-2 my-1 text-base rounded-md transition-all">
                EDUCATION
              </div>
              <div className="hover:bg-slate-500 hover:cursor-pointer w-28 py-2 my-1 text-base rounded-md transition-all">
                SKILLS
              </div>
              <div className="hover:bg-slate-500 hover:cursor-pointer w-28 py-2 my-1 text-base rounded-md transition-all">
                EXPERIENCE
              </div>
              <div className="hover:bg-slate-500 hover:cursor-pointer w-28 py-2 my-1 text-base rounded-md transition-all">
                PROFILES
              </div>
              <div className="hover:bg-slate-500 hover:cursor-pointer w-28 py-2 my-1 text-base rounded-md transition-all">
                PORTFOLIO
              </div>
              <div className="hover:bg-slate-500 hover:cursor-pointer w-28 py-2 my-1 text-base rounded-md transition-all">
                CONTACT ME
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Navber;
