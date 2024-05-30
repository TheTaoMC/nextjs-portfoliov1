import React from "react";

function AboutME() {
  return (
    <>
      <div
        style={{
          
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/bg.avif')", 
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
    </>
  );
}

export default AboutME;
