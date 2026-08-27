import React, { useState } from "react";

const According = ({
  Title,
  icon,
  border,
  className,
  flex,
  classbtn,
  bgColor,
  children,
}) => {
  let [show, setShow] = useState(true);

  return (
    <div className={`${className}`}>
      <button
        className={`${classbtn} ${border && "border border-solid border-red-500"} ${flex && "flex"}`}
        onClick={() => setShow(!show)}
      >
        {Title} 
        <span className={`${show ? 'rotate-[-180deg]' : 'rotate-0'}  duration-300`}>{icon}</span> 
      </button>
      {show && <div className={`${bgColor && "bg-gray-300"}`}>{children}</div>}
    </div>
  );
};

export default According;
