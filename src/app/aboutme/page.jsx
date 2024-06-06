"use client";
import {
  faFacebook,
  faInstagram,
  faLine,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Container from "../components/container/Container";

function AboutME() {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  return (
    <>
      <div
        id="top"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/bg.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-[100vh] flex flex-col justify-center items-center gap-4">
          <div className="text-5xl text-white font-bold text-center">
            My Name is <br className="sm:hidden block" /> Manote Bunyoy
          </div>
          <div className="text-xl text-white">Full-Stack Web Developer</div>
          <div className="text-xl text-white  bg-blue-500 hover:bg-blue-700 px-2 py-1 rounded-md transition-all">
            <a href="/Resume.pdf" download="Resume.pdf">
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div>
        <Container>
          <div
            id="ABOUT ME"
            className="text-center py-8 mt-20 text-4xl font-bold tracking-wider text-gray-700 uppercase"
          >
            ABOUT ME
          </div>
          <div className="py-2 mb-10">
            <hr className="border-gray-700 w-2/3 mx-auto" />
          </div>
          <div className="sm:flex-row flex flex-col-reverse justify-center items-center">
            <div className="w-1/2">
              <div className="text-xl font-bold">
                Hello! My name is Manoch Bunyoy, and I am a passionate
                Full-Stack Web Developer. Although I am relatively new to the
                field, having started my journey only a short while ago, I am
                eager to learn and grow.
              </div>
              <div className="py-4">
                <hr />
              </div>
              <div
                className="text-xl font-bold text-center cursor-pointer"
                onClick={() => setIsReadMoreOpen(!isReadMoreOpen)}
              >
                Read More...
                <FontAwesomeIcon
                  icon={isReadMoreOpen ? faCaretUp : faCaretDown}
                />
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isReadMoreOpen ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="text-lg font-bold text-gray-400">
                  During this time, I have focused on developing my skills in
                  both front-end and back-end technologies. I have successfully
                  created my first front-end website, which has been a rewarding
                  experience and has fueled my enthusiasm for web development.
                  <br />
                  <br />
                  In my free time, I enjoy programming, exploring new
                  technologies, and playing video games. My love for computers
                  and coding drives me to continuously improve and expand my
                  knowledge.
                  <br />
                  <br />
                  My ultimate goal is to become a proficient Full-Stack Web
                  Developer who understands the intricacies of both front-end
                  and back-end development. I am excited about the opportunities
                  ahead and look forward to contributing to impactful projects.
                  <br />
                  <br />
                  Feel free to reach out to me via email or connect with me on
                  social media.
                </div>
              </div>

              <div className="py-4">
                <hr />
              </div>
              <div className="sm:flex sm:flex-row flex-wrap flex-col justify-between">
                <div>
                  <div className="font-bold">Phone </div>
                  <div>+66 887 858 180</div>
                </div>
                <div>
                  <div className="font-bold">Email</div>
                  <div>
                    <a href="mailto:m.bunyoy@gmail.com">m.bunyoy@gmail.com</a>
                  </div>
                </div>
                <div>
                  <div className="font-bold">Website</div>
                  <div>
                    <a
                      href="http://www.thetaomc.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.thetaomc.xyz
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/2">
              <div className="flex flex-col">
                <div className=" w-full flex justify-center">
                  <img
                    className="rounded-full border-4 border-gray-400 shadow-lg "
                    src="/profile.jpg"
                    alt=""
                    width="50%"
                  />
                </div>
                <div className=" w-full py-4 flex justify-center items-center gap-4">
                  <div className="h-5 w-5 text-center">
                    <a
                      href="https://www.facebook.com/TheTaoMC"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </div>
                  <div className="h-5 w-5 text-center">
                    <a
                      href="https://www.instagram.com/thetaomc.apk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                  <div className="h-5 w-5 text-center">
                    <a
                      href="https://line.me/ti/p/8WOTj8NNiW"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faLine} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default AboutME;
