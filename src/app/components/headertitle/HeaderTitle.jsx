import React from "react";

function HeaderTitle({ id, title }) {
  return (
    <>
      <div
        id={id}
        className="text-center py-8 mt-20 text-4xl font-bold tracking-wider text-gray-700 uppercase"
      >
        {title}
      </div>
      <div className="py-2 mb-10">
        <hr className="border-gray-700 w-2/3 mx-auto" />
      </div>
    </>
  );
}

export default HeaderTitle;
