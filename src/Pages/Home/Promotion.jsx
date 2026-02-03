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
      
        <div className="bg-primary overflow-hidden">
  <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
    
    {/* Image Section*/}
    <div className="w-full h-full">
      <img
        src="/assets/yarsagumba.png"
        alt="yarsagumba"
        className="w-full h-64 md:h-96 lg:h-full object-cover"
      />
    </div>

    {/* Promotion  Section */}
    <div className="p-4 md:p-12 lg:p-16 flex flex-col space-y-8 md:space-y-12 items-start">
      {Reused.map((items, i) => (
        <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
          {/* Icon */}
          <div className="text-white text-5xl lg:text-6xl shrink-0">
            <items.Icon />
          </div>
          
          {/* Text Content */}
          <div className="flex flex-col space-y-2 text-white">
            <h1 className="font-semibold text-xl md:text-2xl leading-tight">
              {items.title}
            </h1>
            <p className="text-sm md:text-base opacity-90 max-w-md">
              {items.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>


        {/* photo animation  */}
        <div className="w-full max-w-full overflow-hidden">
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
              <div key={`set2-${i}`} className="w-62 h-60 ">
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
