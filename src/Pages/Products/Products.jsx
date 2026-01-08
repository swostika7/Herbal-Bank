import React from "react";
import ProductCard from "../../components/ProductCard";
import Heading from "../../components/Heading";

const Herbal = [
  {
    picture: "/assets/dab.png",
    title: "10 DAB-III",
    scientificName: "10 Deacetylbaccatin III",
    description:
      "10 Deacetylbaccatin III (10 DAB-III) is a naturally occurring compound extracted from the Himalayan yew tree (Taxus wallichiana). It serves as a crucial precursor in the synthesis of Taxol, an important cancer-fighting drug.",
  },
  {
    picture: "/assets/timur.png",
    title: "Timur",
    scientificName: "Zanthoxylum armatum",
    description: "A spicy, aromatic seed used for culinary and medicinal purposes. Timur supports digestion, oral health, and is valued for its antimicrobial and anti-inflammatory properties.",
  },
  {
    picture: "/assets/jatamasi.png",
    title: "Jatamansi (Himalayan Spikenard)",
    scientificName: "Nardostachys Grandiflora",
    description: "A sacred herb of the Himalayas known for its calming and grounding effects. Jatamansi is used in Ayurvedic oils, incense, and stress-relief remedies. It supports mental clarity, sleep, and emotional balance.",
  },
  {
    picture: "/assets/gurjo.png",
    title: "Gurjo",
    scientificName: "Tinospora sinensis",
    description: "A powerful adaptogenic herb known for its immune-boosting and detoxifying properties. Guduchi is widely used in Ayurveda to support liver function, reduce inflammation, and enhance resilience against infections. Also valued for managing blood sugar and promoting vitality."
  },
  {
    picture: "/assets/chiraito.png",
    title: "Chiraito",
    scientificName: "Swertia chirayita",
    description: "A bitter tonic herb native to the high hills of Nepal, Chiraito is known for its liver-protective, antimalarial, and antidiabetic properties. Widely used in herbal teas and traditional medicine.",
  },{
    picture: "/assets/titepati.png",
    title: "Titepati (Mugwort)",
    scientificName: "Artemisia Vulgaris",
    description: "Aromatic and bitter herb native to the hills of Nepal, Titepati is valued for its medicinal and spiritual uses. Traditionally used for digestive relief, menstrual balance, and skin care. Also used in rituals and as a natural insect repellent.",
  },
  {
    picture: "/assets/kurilo.png",
    title: "Kurilo (Shatavari)",
    scientificName: "Asparagus Racemosus",
    description: "A prized Himalayan herb, Kurilo is known for its rejuvenating and hormone-balancing properties. Traditionally used to boost immunity, support women's health, and improve digestion. Widely valued in Ayurvedic and folk medicine.",
  },
  {
    picture: "/assets/sukumel.png",
    title: "Sukumel (Green Cardamom)",
    scientificName: "Elettaria Cardamomum",
    description: "Finest spices, Sukumel is known for its rich aroma and flavor. Widely used in teas, sweets, and Ayurvedic remedies, it aids digestion, freshens breath, and adds a touch of luxury to every dish."
  },
  {
    picture: "/assets/alaichi.png",
    title: "Alainchi (Large Cardamom)",
    scientificName: "Amomum Tubulatum",
    description: "Known for its bold, smoky flavor and deep aroma. Widely used in curries, stews, and Ayurvedic treatments, it aids digestion, improves respiratory health, and adds a robust warmth to every dish."
  },
  {
    picture: "/assets/tejpata.png",
    title: "Tejpata (Bay Leaf)",
    scientificName: "Tejpata (Bay Leaf)",
    description: "An aromatic leaf native to the Himalayan region, Tejpata is widely used in Nepali cuisine for its warm, spicy flavor. Beyond taste, it supports digestion and is valued in traditional medicine for its antioxidant and anti-inflammatory benefits.",
  },
  {
    picture: "/assets/gucchi.png",
    title: "Guchhi Chyau (Morel Mushroom)",
    scientificName: "Morchella spp.",
    description: "A rare and highly prized wild mushroom found in the Himalayan forests. Known for its rich, earthy flavor and nutritional value, Morel Mushroom is rich in antioxidants and protein. Used in gourmet cuisine and traditional medicine.",
  },{
    picture: "/assets/satuwa.png",
    title: "Satuwa",
    scientificName: "Paris Polyphylla",
    description: "A high-altitude medicinal herb revered in traditional Himalayan medicine. Satuwa is known for its anti-inflammatory, antitumor, and antimicrobial properties. Often used in herbal formulations to support immune and reproductive health.",
  },{
    picture: "/assets/amala.png",
    title: "Amala (Gooseberry)",
    scientificName: "Phyllanthus Emblica",
    description: "A potent source of Vitamin C and antioxidants, Amala is a cornerstone of Ayurvedic medicine. It supports immunity, skin health, and digestion. Commonly used in chyawanprash, hair oils, and wellness tonics.",
  },
  {
    picture: "/assets/kutki.png",
    title: "Kutki",
    scientificName: "Picrorhiza kurroa",
    description: "A bitter herb native to the Himalayas, Kutki is widely used to support liver health, digestion, and detoxification. Known for its hepatoprotective and anti-inflammatory properties in Ayurveda and Tibetan medicine.",
  },
  {
    picture: "/assets/ritha.png",
    title: "Rittha (Soap Nuts)",
    scientificName: "Sapindus mukorossi",
    description: "A natural, eco-friendly cleaning agent, Rittha is rich in saponins. Used as a detergent alternative, shampoo base, and household cleanser. Gentle on skin and sustainable for the environment.",
  },
  {
    picture: "/assets/chiraito1.png",
    title: "Chiraito",
    scientificName: "Swertia chirayita",
    description: "A bitter tonic herb native to the high hills of Nepal, Chiraito is known for its liver-protective, antimalarial, and antidiabetic properties. Widely used in herbal teas and traditional medicine.",
  },{
    picture: "/assets/harro.png",
    title: "Harro (Retz)",
    scientificName: "Terminalia Chebula",
    description: "Known as the “King of Medicines” in Ayurveda, Harro is a powerful rejuvenator and detoxifier. It aids digestion, supports respiratory health, and is a key ingredient in the classic formulation Triphala.",
  },{
    picture: "/assets/aduwa.png",
    title: "Aduwa (Ginger)",
    scientificName: "Zingiber officinale",
    description: "A well-known rhizome used for its digestive, anti-inflammatory, and warming properties. Aduwa is widely used in teas, curries, and Ayurvedic preparations to support metabolism and immunity.",
  },
  {
    picture: "/assets/besar.png",
    title: "Besar (Tumeric)",
    scientificName: "Curcuma longa",
    description: "A golden rhizome revered for its anti-inflammatory, antioxidant, and healing qualities. Turmeric is used in cuisine, skincare, and herbal medicine. A staple in Ayurvedic formulations for detox and joint health.",
  },
  {
    picture: "/assets/honey.png",
    title: "Honey (Natural Multi-Flower Honey)",
    scientificName: "",
    description: "Pure, raw honey sourced from Himalayan wildflowers. Rich in enzymes, antioxidants, and nutrients, it supports immunity, digestion, and skin health. A natural sweetener with medicinal value.",
  },
  {
    picture: "/assets/sanjivani.png",
    title: "Sajivan (Morigna)",
    scientificName: "Moringa oleifera",
    description: "A superfood packed with vitamins, minerals, and amino acids. Moringa supports energy, immunity, and detox. Leaves, seeds, and powder are used in foods, supplements, and cosmetics.",
  },
  {
    picture: "/assets/bhojo.png",
    title: "Bojho (Sweet Flag / Vacha)",
    scientificName: "Acorus calamus",
    description: "An aromatic medicinal herb traditionally used for respiratory relief, memory enhancement, and digestive support. Bojho is valued in Ayurveda and folk medicine for its expectorant, anti-inflammatory, and calming properties. Often used in teas, pastes, and herbal oils.",
  },
  {
    picture: "/assets/pudina.png",
    title: "Pudina (Mint)",
    scientificName: "Mentha spp.",
    description: "A refreshing aromatic herb known for its cooling and digestive properties. Pudina is widely used in teas, chutneys, cosmetics, and Ayurvedic formulations. It helps soothe indigestion, freshens breath, and supports respiratory health. Also valued for its antimicrobial and calming effects.",
  },
  {
    picture: "/assets/tulsi.png",
    title: "Tulsi (Holy Basil)",
    scientificName: "Ocimum Sanctum",
    description: "A sacred and medicinal herb revered in Ayurveda and traditional households. Tulsi supports respiratory health, immunity, and stress relief. Known for its antioxidant, adaptogenic, and antimicrobial properties. Commonly used in teas, herbal remedies, and spiritual rituals.",
  },
  {
    picture: "/assets/jimbu.png",
    title: "Jimbu (Himalayan Aromatic Herb)",
    scientificName: "Allium hypsistum / Allium przewalskianum",
    description: "A unique wild herb found in the high-altitude regions of Nepal, Jimbu is prized for its pungent, onion-garlic-like flavor. Traditionally used in Nepali cuisine to enhance the taste of lentils and soups. Also valued for its digestive and antimicrobial properties.",
  },
  {
    picture: "/assets/sarpaganda.png",
    title: "Sarpagandha (Indian Snakeroot)",
    scientificName: "Rauwolfia serpentina",
    description: "A traditional medicinal herb known for its calming and blood pressure-lowering properties. Sarpagandha has been used in Ayurveda to support nervous system health, reduce hypertension, and alleviate anxiety. Valued for its alkaloid content and therapeutic benefits.",
  },
  {
    picture: "/assets/lothey.png",
    title: "लोठ सल्ला (Himalayan Yew)",
    scientificName: "Taxus mairei",
    description: "One of Nepal's lesser-known but significant medicinal trees, लोठ सल्ला (Taxus mairei) belongs to the yew family (Taxaceae) and is closely related to Taxus wallichiana. Found in the Himalayan regions, it is valued for its medicinal properties, particularly its role in producing Taxol, a compound used in cancer treatment.",
  },
  {
    picture: "/assets/arsaganda.png",
    title: "अश्वगन्धा (Indian Ginseng)",
    scientificName: "Withania Somnifera",
    description: "One of Nepal’s most revered medicinal herbs, अश्वगन्धा is known for its adaptogenic and rejuvenating properties. Widely used in Ayurvedic medicine, it helps reduce stress, boost energy, enhance immunity, and support mental clarity. Its roots and leaves are commonly used in herbal formulations to promote overall well-being.",
  },
];

function Products() {
  return (
    <>
    <div className="p-5">
        <Heading heading={"All Products"} redesign={"text-green-500"}/>
      <div className="grid grid-cols-1 gap-4 container mx-auto md:grid-cols-2 lg:grid-cols-4 max-w-6xl">
        {Herbal.map((items, i) => (
          <ProductCard
            img={items.picture}
            title={items.title}
            scientificName={items.scientificName}
            description={items.description}
          />
        ))}
      </div>
      </div>
    </>
  );
}

export default Products;
