import PlantLogo from "../../components/PlantLogo";
import Heading from "../../components/Heading";
import Buttons from "@/components/Buttons";
import { Link } from "react-router";
import ProductCard from "@/components/ProductCard";

function BestService() {
  return (
    <div className="p-4">
      <PlantLogo />
      <div className="space-y-8 max-w-7xl mx-auto">
        <Heading
          heading={"Our Best Services"}
          redesign={"text-primary text-center "}
        >
          <p className="text-center p-2 ">
            At Muktinath Herbal Bank Limited, we offer a comprehensive range of
            services tailored to support your journey towards holistic wellness
            and environmental sustainability. Our services include providing
            premium herbal products meticulously crafted from the finest
            botanical ingredients, ranging from teas to tinctures, each designed
            to promote vitality and well-being.
          </p>
        </Heading>

        {/* products details  */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-6 ">
          <ProductCard
            img={"/assets/dab.png"}
            title={"Herbal Cultivation Support"}
            description={
              "We assist farmers and cooperatives in cultivating herbs using sustainable methods, offering training, seeds, and technical support to ensure the Card of produce."
            }
            reDesign={"border-none shadow-md"}
          />
          <ProductCard
            img={"/assets/p1.png"}
            imageSize={"rounded-md"}
            title={"Processing and Manufacturing"}
            description={
              "Our advanced processing units ensure that herbs are transformed into high-Card products, maintaining their potency and benefits"
            }
            reDesign={"border-none shadow-md"}
          />{" "}
          <ProductCard
            img={"/assets/p2.png"}
            imageSize={"rounded-md"}
            title={"Product Development and Customization"}
            description={
              "We collaborate with clients to develop custom herbal formulations to meet specific requirements. Our R&D team is dedicated to innovating new products using Nepal’s rich herbal resources."
            }
            reDesign={"border-none shadow-md"}
          />
        </div>

        {/* See more products  */}
        <div className="flex justify-center items-center">
          <Link to="/services">
            <Buttons buttonText={"See More"} buttonStyles={"bg-primary "} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BestService;
