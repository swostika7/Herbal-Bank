import React from "react";

function Buttons({buttonText,buttonStyles}) {
  return (
    <>
      <button className={`p-4 pl-8 pr-8 border-2 border-white text-white text-xl font-semibold rounded-full hover:bg-white hover:text-green-600 cursor-pointer ${buttonStyles}`}>
       {buttonText}
      </button>
    </>
  );
}

export default Buttons;
