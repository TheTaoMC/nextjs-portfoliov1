import {
  faFacebook,
  faInstagram,
  faLine,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Container from "../components/container/Container";

function AboutME() {
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
          <div className="text-3xl text-white">My Name is Manote Bunyoy.</div>
          <div className="text-xl text-white">Full-Stack Web Developer</div>
          <div className="text-xl text-white  bg-blue-500 hover:bg-blue-700 px-2 py-1 rounded-md transition-all">
            <a href="/resume.pdf" download="My_Resume.pdf">
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div>
        <Container>
          <div id="ABOUT ME" className="text-center py-4 text-2xl font-bold">
            ABOUT ME
          </div>
          <div className="py-4">
            <hr />
          </div>
          <div className="flex">
            <div className="w-1/2">
              <div className="text-xl font-bold">
                I am a Professional Web developer. Consectetur an adipisi elita,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam quis nostrud.
              </div>
              <div className="py-4">
                <hr />
              </div>
              <div className="text-lg font-bold text-gray-400">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Sed ut perspi unde omnis iste natus
                error sit voluptatem accusantium doloremque lauda ntium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam vo luptatem quia voluptas sit aspernatur aut odit aut
                fugit,
              </div>
              <div className="py-4">
                <hr />
              </div>
              <div className="flex justify-between">
                <div>
                  <div>Phone </div>
                  <div>+66 887 858 180</div>
                </div>
                <div>
                  <div>Email</div>
                  <div>
                    <a href="mailto:m.bunyoy@gmail.com">m.bunyoy@gmail.com</a>
                  </div>
                </div>
                <div>
                  <div>Website</div>
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
                    className="rounded-3xl"
                    src="/bg.avif"
                    alt=""
                    width="50%"
                  />
                </div>
                <div className=" w-full py-4 flex justify-center items-center gap-4">
                  <div className="h-5 w-5">
                    <FontAwesomeIcon icon={faFacebook} size="2xs" />
                  </div>
                  <div className="h-5 w-5">
                    <FontAwesomeIcon icon={faInstagram} size="2xs" />
                  </div>
                  <div className="h-5 w-5">
                    <FontAwesomeIcon icon={faLinkedin} size="2xs" />
                  </div>
                  <div className="h-5 w-5">
                    <FontAwesomeIcon icon={faLine} size="2xs" />
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
