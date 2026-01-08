import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Faq({ currElem, onToggle, isActive }) {
  return (
    <>
      {/* accordian  */}
      <div className=" ">
        <li>
          <div className="flex justify-between p-3 border border-gray-300 rounded-sm ">
            <p>{currElem.question}</p>
            <button className={isActive ? "active-btn" : ""} onClick={onToggle}>
              {isActive ? <IoIosArrowUp size={25}/> : <IoIosArrowDown size={25}/>}
            </button>
          </div>
          <p className=" container mx-auto">{isActive && currElem.answer}</p>
        </li><br/>
      </div>
    </>
  );
}

export default Faq;
