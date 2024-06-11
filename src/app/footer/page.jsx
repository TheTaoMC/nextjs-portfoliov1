import React from "react";
import version from "../../version";

function Footer() {
  return (
    <div className="m-5 flex justify-center items-center">
      <div className="text-center">
        © Copyright. Design And Developed By TheTaoMC v{version}
      </div>
    </div>
  );
}

export default Footer;
