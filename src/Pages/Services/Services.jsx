import Heading from "@/components/Heading";
import PlantLogo from "@/components/PlantLogo";
import ProductCard from "@/components/ProductCard";

const item = [
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
function Services() {
  return (
    <>
      <div className="pt-25 p-4 max-w-6xl mx-auto">
        <PlantLogo />
        <Heading heading={"Our Best Services"} redesign={"text-one flex justify-center"}/>

        <div className="flex ">
          <div className="grid grid-cols-1 gap-4 container mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
            {item.map((items, i) => (
              <ProductCard
                img={items.img}
                title={items.name}
                description={items.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
