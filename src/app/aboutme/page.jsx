import React from "react";
import Container from "../components/container/Container";

function AboutME() {
  return (
    <>
      <div
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
          <div className="text-xl text-white  bg-lime-600 hover:bg-lime-700 px-2 py-1 rounded-md transition-all">
            <a href="/resume.pdf" download="My_Resume.pdf">
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div>
        <Container>
          <div className="text-center py-4 text-2xl font-bold">ABOUT ME</div>
          <hr />
          <div className="flex">
            <div className="w-1/2">
              <div>
                I am a Professional UI/UX Designer and Web developer.
                Consectetur an adipisi elita, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam quis
                nostrud.
              </div>
              <div>
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
              <hr />
              <div className="flex justify-between">
                <div>Phone 123-456-7890</div>
                <div>Email name@domain.com</div>
                <div>Website www.domain.com</div>
              </div>
            </div>

            <div className="w-1/2">
              <div className="flex flex-col">
                <div className="bg-black w-full h-28"></div>
                <div className="bg-black w-full h-28"></div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default AboutME;
