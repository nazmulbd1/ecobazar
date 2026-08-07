import React, { useState } from "react";

const According = ({Title, icon, border, className, classbtn, children}) => {
  let [show, setShow] = useState(false);

  return (
    <div className={`${className}`} >
      <button className={`${classbtn} ${border && 'border border-solid border-red-500'}`} onClick={()=>setShow(!show)}>{Title} {icon}</button>
      {show && 
        <div className="w-full">{children}</div>
      }
    </div>
  );
};

export default According;
