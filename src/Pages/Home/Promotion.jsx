import { IoRibbonSharp } from "react-icons/io5";
import { PiPlantFill } from "react-icons/pi";
import { BsFillPeopleFill } from "react-icons/bs";

const Reused = [
  {
    Icon: IoRibbonSharp,
    title: "Card Assurance Guarantee",
    description:
      "Each of our herbal products undergoes rigorous testing and Card control measures to ensure consistency, purity, and potency.",
  },
  {
    Icon: PiPlantFill,
    title: "Healthy Growth Guarantee",
    description:
      "We guarantee that our products are crafted with the utmost care and expertise to promote your well-being. Your health and satisfaction are our top priorities",
  },
  {
    Icon: BsFillPeopleFill,
    title: "Customer Satisfaction",
    description:
      "Your satisfaction is our top priority. Our dedicated customer support team is available to assist you with any inquiries, concerns, or feedback you may have.",
  },
];
const Image = [
  {
    img: "/assets/foot1.png",
    name: "foot1",
  },
  {
    img: "/assets/foot2.png",
    name: "foot2",
  },
  {
    img: "/assets/foot3.png",
    name: "foot3",
  },
  {
    img: "/assets/foot4.png",
    name: "foot4",
  },
  {
    img: "/assets/foot5.png",
    name: "foot5",
  },
  {
    img: "/assets/foot6.png",
    name: "foot6",
  },
  {
    img: "/assets/foot7.png",
    name: "foot7",
  },
];
function Promotion() {
  return (
    <>
      <div>
        <div className=" bg-one">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:items-center">
            {/* yarsagumba  */}
            <div>
              <img
                src="/assets/yarsagumba.png"
                alt="yarsagumba"
                className="md:w-full w-auto"
              />
            </div>
            {/* promotion  */}

            <div className="p-5 flex flex-col space-y-9 justify-center items-center ">
              {Reused.map((items, i) => (
                <div className="flex space-x-6 ">
                  <div className="text-white text-5xl lg:text-6xl">
                    <items.Icon />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h1 className="font-semibold text-2xl">{items.title}</h1>
                    <p className="text-sm">{items.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* photo animation  */}
        <div className="w-full overflow-hidden">
          <div className="grid grid-flow-col animate-loop">
            {/* First Images */}
            {Image.map((items, i) => (
              <div key={`set1-${i}`} className="w-62 h-60">
                <img
                  src={items.img}
                  alt={items.name}
                  className="object-cover h-full w-full"
                />
              </div>
            ))}

            {/* Second Images  */}
            {Image.map((items, i) => (
              <div key={`set2-${i}`} className="w-62 h-60" >
                <img
                  src={items.img}
                  alt={items.name}
                  className="object-cover h-full w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Promotion;
