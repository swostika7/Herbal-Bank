import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Faq({ currElem, onToggle, isActive }) {
  return (
    <li className="list-none mb-4">
      <div className="border border-accent rounded-sm">
        <button 
          className={`flex justify-between items-center w-full p-4 text-left ${isActive ? "active-btn" : ""}`} 
          onClick={onToggle}
        >
          <span className="font-medium">{currElem.question}</span>
          {isActive ? <IoIosArrowUp size={25}/> : <IoIosArrowDown size={25}/>}
        </button>
      </div>
      
      {isActive && (
        <div className="pl-10 pr-10 p-4 bg-white shadow border-b border-accent">
          <p>{currElem.answer}</p>
        </div>
      )}
    </li>
  );
}

export default Faq;