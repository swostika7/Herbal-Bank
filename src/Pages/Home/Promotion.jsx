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
function Promotion() {
  return (
    <>
    <div>
      <div className="grid grid-cols-2 bg-one">
        {/* yarsagumba  */}
        <div>
          <img src="/assets/yarsagumba.png" alt="" />
        </div>
        {/* promotion  */}

        <div className="p-5 flex flex-col space-y-9 justify-center items-center">
          {Reused.map((items, i) => (
            <div className="flex space-x-6 ">
              <div className="text-white">
                <items.Icon size={70} />
              </div>
              <div className="flex flex-col space-y-2">
                <h1 className="font-semibold text-2xl">{items.title}</h1>
                <p className="text-sm">{items.description}</p>
              </div>
            </div>
          ))}
          ;
        </div>
      </div>
      {/* photo animation  */}
         <div className='grid grid-cols-7 h-50 w-full overflow-hidden '>
            <img src="/assets/foot1.png" alt='' className="h-full object-cover"/>
            <img src="/assets/foot2.png" alt='' className="h-full"/>
            <img src="/assets/foot3.png" alt='' className="h-full"/>
            <img src="/assets/foot4.png" alt='' className="h-full"/>
            <img src="/assets/foot5.png" alt='' className="h-full"/>
            <img src="/assets/foot6.png" alt='' className="h-full"/>
            <img src="/assets/foot7.png" alt='' className="h-full"/>
           

        </div>
        
        </div>
    </>
  );
}

export default Promotion;
