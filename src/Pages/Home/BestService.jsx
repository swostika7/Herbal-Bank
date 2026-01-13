import { PiPlant } from "react-icons/pi";
import PlantLogo from "../../components/PlantLogo";
import Heading from "../../components/Heading";

const Services = [
  {
    img: "/assets/dab.png",
    name: "Herbal Cultivation Support",
    description:
      "We assist farmers and cooperatives in cultivating herbs using sustainable methods, offering training, seeds, and technical support to ensure the Card of produce.",
  },
  {
    img: "/assets/p1.png",
    name: "Processing and Manufacturing",
    description:
      "Our advanced processing units ensure that herbs are transformed into high-Card products, maintaining their potency and benefits",
  },
  {
    img: "/assets/p2.png",
    name: "Product Development and Customization",
    description:
      "We collaborate with clients to develop custom herbal formulations to meet specific requirements. Our R&D team is dedicated to innovating new products using Nepal’s rich herbal resources.",
  },
  {
    img: "/assets/p3.png",
    name: "Export Assistance",
    description:
      "As we expand into international markets, we provide complete export assistance, ensuring compliance with Card standards and regulations.",
  },
  {
    img: "/assets/p4.png",
    name: "Consultancy Services",
    description:
      "We offer consultancy services to individuals and organizations interested in herbal farming, production, or entering the herbal industry.",
  },
  {
    img: "/assets/p5.png",
    name: "Machineries",
    description:
      "We offer different machines for the Herbal processing as well. Machineries such as Essential Oil Extraction Unit, Spray Dryer, Extraction and Concentration Unit are easily available with us.",
  },
];
function BestService() {
  return (
    <div>
      <PlantLogo />

      <Heading
        heading={"Our Best Services"}
        redesign={"text-one text-center"}
      >
        <p className="text-center">
          At Muktinath Herbal Bank Limited, we offer a comprehensive range of
          services tailored to support your journey towards holistic wellness
          and environmental sustainability. Our services include providing
          premium herbal products meticulously crafted from the finest botanical
          ingredients, ranging from teas to tinctures, each designed to promote
          vitality and well-being.
        </p>
      </Heading>

      {/* products details  */}
      <div className="p-5 container mx-auto  lg:pl-20 lg:pr-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-4 ">
        {Services.map((items, i) => (
          <div className="shadow flex flex-col space-y-3 rounded-md hover:shadow-2xl h-full w-full">
            <img src={items.img} alt={items.name} className="max-h-64" />
            <div className="flex flex-col space-y-2 p-2">
              <h1 className="text-xl lg:text-2xl font-semibold">{items.name}</h1>
              <p className="text-sm lg:text-lg">{items.description}</p>
            </div>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}

export default BestService;
