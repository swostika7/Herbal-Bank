import { useEffect, useState } from "react";
import faq from "../../api/faq.json";
import Faq from "./Faq";

function Accordian() {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(false);

  useEffect(() => {
    setData(faq);
  }, []);
  console.log(data);

  const handleButtonClick = (id) => {
    setActiveId((prevId) => (prevId === id ? false : id));
  };

  return (
    <>
      <ul className="text-sm lg:text-base">
        {data.map((currElem) => {
          return (
            <Faq
              key={currElem.id}
              currElem={currElem}
              isActive={activeId === currElem.id}
              onToggle={() => handleButtonClick(currElem.id)}
            />
          );
        })}
      </ul>
    </>
  );
}

export default Accordian;
