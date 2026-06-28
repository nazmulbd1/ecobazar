import React from "react";
import Container from "./layouts/Container";
import Product1 from "../assets/images/Product1.webp";
import { Link } from "react-router";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Handbag, MoveRight } from "lucide-react";

const ProductShowcase = ({ allData, title, type, link }) => {
  function getStar(count) {
    let halfStar = count.toString().split(".")[1];
    let index = Math.floor(count);
    let arr = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= count) {
        arr.push("color");
      } else {
        arr.push(i);
      }
    }
    if (halfStar) {
      arr[index] = "half";
    }

    return arr;
  }

  return (
    <div>
      <Container>
        <div className="flex justify-between items-center font-pop py-4 mb-4 mt-10 ">
          <h2 className="font-semibold text-[32px] text-[#1A1A1A]">{title}</h2>
          <Link to={link} className="flex gap-2 text-[16px] text-primary">
            View All <MoveRight />{" "}
          </Link>
        </div>

        <div
          className={`grid ${type === "category" ? "text-center grid-cols-6" : "grid-cols-5"} ${type == "category" && "gap-5"}`}
        >
          {allData.map((item, index) => (
            <div
              key={item.id}
              className={`relative border border-[1px] border-[#E5E5E5] px-4 py-6 hover:border-[1px] hover:text-primary hover:border-primary ${type == "category" ? "text-[18px] text-[#1A1A1A] font-medium shadow-[0_0_10px_0px_rgba(0,0,0,0.1)] rounded-md" : "text-[14px] text-[#4D4D4D]"} group`}
            >
              <img src={Product1} alt="Product1" className="w-full pb-6" />

              <div className={`flex items-center justify-between group ${type === "category" ? "flex-col text-center" : " "}`}>
                <div className={type === "category" ? "flex flex-col items-center" : " "}>
                  {/* <h3>{item.name || item.title.slice(0, 16) + "..."}</h3> */}
                  <h3>
                    {item.name
                      ? item.name.length > 12
                        ? item.name.slice(0, 12) + "..."
                        : item.name
                      : item.title
                        ? item.title.length > 22
                          ? item.title.slice(0, 22) + "..."
                          : item.title
                        : "Untitled"}
                  </h3>

                  <p className="text-[16px] text-[#1A1A1A]">
                    {item.price && "$" + item.price}
                  </p>

                  {/* <p>{item.rating && item.rating}</p> */}
                  <div className="flex ">
                    {item.rating &&
                      getStar(item.rating).map((star, i) =>
                        star == "color" ? (
                          <FaStar key={i} className="text-[#FF8A00]" />
                        ) : star == "half" ? (
                          <FaStarHalfAlt key={i} className="text-[#FF8A00]" />
                        ) : (
                          <FaStar key={i} className="text-gray-400" />
                        ),
                      )}
                  </div>
                </div>
                {
                  item.title &&
                   <div className="bg-gray-200 rounded-[50%] group-hover:text-white group-hover:bg-primary p-3">
                  <Handbag size={20}/>
                </div>
                }
                
              </div>

              {type == "hotdeal" && (
                <div
                  className={`${type == "hotdeal" && "bg-red-300 w-[201%] h-[201%] z-40 absolute m-2 top-[-8px] left-[-8px] hidden group-hover:block duration-200"}`}
                >
                  <img src={Product1} alt="Product1" className="w-full" />
                  <h3>{item.name || item.title.slice(0, 16) + "..."}</h3>
                  <p>{item.price && "$" + item.price}</p>
                  <div className="flex">
                    {item.rating &&
                      getStar(item.rating).map((star, i) =>
                        star == "color" ? (
                          <FaStar key={i} className="text-yellow-300" />
                        ) : star == "half" ? (
                          <FaStarHalfAlt key={i} className="text-yellow-300" />
                        ) : (
                          <FaStar key={i} className="text-gray-400" />
                        ),
                      )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProductShowcase;

// import React from "react";
// import Container from "./layouts/Container";
// import Product1 from "../assets/images/Product1.webp";
// import { Link } from "react-router";
// import { FaStar, FaStarHalfAlt } from "react-icons/fa";
// import { MoveRight } from "lucide-react";

// const ProductShowcase = ({ allData, title, type, link }) => {
//   function getStar(count) {
//     let halfStar = count.toString().split(".")[1];
//     let index = Math.floor(count);
//     let arr = [];
//     for (let i = 1; i <= 5; i++) {
//       if (i <= count) {
//         arr.push("color");
//       } else {
//         arr.push(i);
//       }
//     }
//     if (halfStar) {
//       arr[index] = "half";
//     }

//     return arr;
//   }

//   return (
//     <div>
//       <Container>
//         <div className="flex justify-between items-center font-pop py-4 mb-4 mt-10 ">
//           <h2 className="font-semibold text-[32px] text-[#1A1A1A]">{title}</h2>
//           <Link to={link} className="flex gap-2 text-[16px] text-primary">
//             View All <MoveRight />{" "}
//           </Link>
//         </div>

//         <div className={`flex ${type == "category" && "gap-5"} flex-wrap`}>
//           {allData.map((item, index) => (
//             <div
//               key={item.id}
//               className={`relative text-[18px] border border-[1px] border-[#E5E5E5] p-6 hover:border-[1px] hover:border-primary ${type == "category" ? "max-w-[15.40%] shadow-[0_0_10px_0px_rgba(0,0,0,0.1)] rounded-md" : "max-w-[20%] "} group`}
//             >
//               <img src={Product1} alt="Product1" className="w-full" />

//               <h3>{item.name || item.title.slice(0, 16) + "..."}</h3>
//               <p>{item.price && "$" + item.price}</p>

//               {/* <p>{item.rating && item.rating}</p> */}
//               <div className="flex">
//                 {item.rating &&
//                   getStar(item.rating).map((star, i) =>
//                     star == "color" ? (
//                       <FaStar key={i} className="text-yellow-300" />
//                     ) : star == "half" ? (
//                       <FaStarHalfAlt key={i} className="text-yellow-300" />
//                     ) : (
//                       <FaStar key={i} className="text-gray-400" />
//                     ),
//                   )}
//               </div>

//               {type == "hotdeal" && (
//                 <div
//                   className={`${type == "hotdeal" && "bg-red-300 w-[201%] h-[201%] z-40 absolute m-2 top-[-8px] left-[-8px] hidden group-hover:block duration-200"}`}>
//                   <img src={Product1} alt="Product1" className="w-full" />
//                   <h3>{item.name || item.title.slice(0, 16) + "..."}</h3>
//                   <p>{item.price && "$" + item.price}</p>
//                   <div className="flex">
//                     {item.rating &&
//                       getStar(item.rating).map((star, i) =>
//                         star == "color" ? (
//                           <FaStar key={i} className="text-yellow-300" />
//                         ) : star == "half" ? (
//                           <FaStarHalfAlt key={i} className="text-yellow-300" />
//                         ) : (
//                           <FaStar key={i} className="text-gray-400" />
//                         ),
//                       )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default ProductShowcase;
