import PlantLogo from "../../components/PlantLogo";
import ProductCard from "../../components/ProductCard";
import Heading from "../../components/Heading";
import { Link } from "react-router-dom";
import Buttons from "../../components/Buttons";

function Product() {
  return (
    <div className=" bg-four p-5 ">
      <div className="z-10 pt-62 md:pt-90 space-y-8 lg:pt-40 md:overflow-hidden max-w-7xl container mx-auto ">
        <div>
          {/* logo  */}
          <PlantLogo />

          {/* Our New Products  */}
          <div>
            <Heading
              heading={"Our New Products"}
              redesign={"flex justify-center items-center text-one "}
            >
              <p className=" text-center">
                Welcome to the realm of nature's bounty at Muktinath Herbal Bank
                Limited, where we pride ourselves on offering a diverse array of
                premium herbal products crafted with care and expertise. We
                source only the finest botanical ingredients, ensuring purity
                and potency in every bottle.
              </p>
            </Heading>
          </div>
        </div>
        {/* List of products  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4 ">
          <ProductCard
            img={"/assets/dab.png"}
            title={"10 DAB-III"}
            scientificName={"10 Deacetylbaccatin III"}
            description={
              "10 Deacetylbaccatin III (10 DAB-III) is a naturally occurring compound extracted from the Himalayan yew tree (Taxus wallichiana). It serves as a crucial precursor in the synthesis of Taxol, an important cancer-fighting drug."
            }
          />
          <ProductCard
            img={"/assets/timur.png"}
            imageSize={"object-contain"}
            title={"Timur"}
            scientificName={"Zanthoxylum armatum"}
            description={
              "A spicy, aromatic seed used for culinary and medicinal purposes. Timur supports digestion, oral health, and is valued for its antimicrobial and anti-inflammatory properties."
            }
          />

          <ProductCard
            img={"/assets/jatamasi.png"}
            imageSize={""}
            title={"Jatamansi"}
            scientificName={"Nardostachys Grandiflora"}
            description={
              "A sacred herb of the Himalayas known for its calming and grounding effects. Jatamansi is used in Ayurvedic oils, incense, and stress-relief remedies. It supports mental clarity, sleep, and emotional balance."
            }
          />
          <ProductCard
            img={"/assets/gurjo.png"}
            imageSize={""}
            title={"Gurjo"}
            scientificName={"Tinospora sinensis"}
            description={
              "A powerful adaptogenic herb known for its immune-boosting and detoxifying properties. Guduchi is widely used in Ayurveda to support liver function, reduce inflammation, and enhance resilience against infections. Also valued for managing blood sugar and promoting vitality."
            }
          />
        </div>

        {/* See more products  */}
        <div className="flex justify-center items-center">
          <Link to="/products">
            <Buttons
              buttonText={"See More Products"}
              buttonStyles={"bg-one "}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
