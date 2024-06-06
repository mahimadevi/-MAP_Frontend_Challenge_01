// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from '@fortawesome/free-solid-svg-icons'
// import React from "react";
// import Tag from "../tag/Tag";

// const Card = (props) => {
//   return (
//     <div>
//         <div className="h-[269px]">
//           <img className="rounded-3xl object-cover h-[269px]" src={props.photo} alt="" />
//         </div>

//         <div className="flex items-center gap-x-2.5 my-3">
//           {props.superHost && <Tag />}
//           <p className="text-sm leading-4 font-medium text-[#828282]">{props.type}.{props.beds} beds</p>
//           <div className="flex items-center gap-1 ml-auto text-[#4f4f4f]">
//               <FontAwesomeIcon className="text-yellow-rgba" icon={faStar} />
//               <span>{props.rating}</span>
//           </div>
//         </div>
        
//         <p className="text-base font-semibold leading-5 text-[#333333]">{props.title}</p>
//     </div>
//   )
// }

// export default Card




import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import Tag from "../tag/Tag";

const Card = (props) => {
  return (
    <div className="flex flex-col w-full max-w-xs">
      <div className="w-full h-0 pb-[125%] relative">
        <img className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl" src={props.photo} alt="" />
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex items-center gap-x-2.5 mb-2">
          {props.superHost && <Tag />}
          <p className="text-sm leading-4 font-medium text-[#828282]">{props.type}.{props.beds} beds</p>
          <div className="flex items-center gap-1 ml-auto text-[#4f4f4f]">
            <FontAwesomeIcon className="text-yellow-rgba" icon={faStar} />
            <span>{props.rating}</span>
          </div>
        </div>

        <p className="text-base font-semibold leading-5 text-[#333333]">{props.title}</p>
      </div>
    </div>
  );
};

export default Card;
