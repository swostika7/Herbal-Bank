import { PiTreeBold } from "react-icons/pi";
import PlantLogo from "../../components/PlantLogo";
import { IoLocationSharp } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { RiGlobalFill } from "react-icons/ri";
import { FaLeaf } from "react-icons/fa6";
import { ImLab } from "react-icons/im";
import Card from "../../components/Card";
import Heading from "../../components/Heading";

function FlagShip() {
  return (
    <>
      <div className="bg-[#f9f9f9] flex flex-col space-y-4 p-3">
        <div className="container mx-auto max-w-7xl space-y-4">
          {/* logo  */}
          <PlantLogo />
          {/* title  */}

          {/* called heading  */}
          <Heading
            heading={"Our Flagship Project"}
            redesign={" text-center text-primary"}
          >
            <p className="text-three text-center">
              Building a sustainable future for Nepal's herbal industry
            </p>
          </Heading>

          {/* lothsala  */}
          <div className=" rounded-2xl bg-white shadow hover:shadow-2xl p-8 flex flex-col justify-center items-center space-y-4 max-w-7xl">
            <div className="max-h-20 max-w-20 h-12 w-12 md:h-18 md:w-18 flex justify-center items-center rounded-full bg-muted-foreground">
              <PiTreeBold size={46} className="text-white" />
            </div>
            <div className=" flex flex-col space-y-2 text-center">
              <div>
                <h1 className="font-bold text-2xl">
                  Lothsalla (Himalayan Yew) - Taxus mairei
                </h1>
                <p className=" italic text-muted">
                  From Himalayan Forests to Cancer Care Innovation
                </p>
              </div>
              <p className=" text-sm">
                Lothsalla, locally known as Lauth Salla, is the Nepali name for
                Taxus mairei—a rare medicinal tree native to Nepal's mid-hill
                regions which is globally valued for producing 10-DAB III, the
                essential precursor for the chemotherapy drug Paclitaxel.
              </p>
            </div>
          </div>

          {/* description of site */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
            <Card
              icon={
                <IoLocationSharp className="text-primary size-8 lg:size-10" />
              }
              name={"Location & Processing Facility"}
              paragraph={
                "Located in Mahankal-03, Lalitpur operating under a Public-Private-Cooperative Partnership (PPCP) model, this processing facility can process up to 1,000 kg of leaves and twigs per day, with all raw materials sourced from over 400,000 plantation-grown trees across Lalitpur, Kavre, Sindhuli, and Makwanpur districts."
              }
            />
            <Card
              icon={
                <HiMiniUserGroup className="text-primary size-8 lg:size-10" />
              }
              name={"Farmer Involvement"}
              paragraph={
                "Farmers benefit from technical training, buy-back guarantees, and shared ownership of the project infrastructure over a 15-year plan."
              }
            />
            <Card
              icon={<RiGlobalFill className="text-primary size-8 lg:size-10" />}
              name={"Products & Market"}
              paragraph={
                "Targeted for export to Indian pharmaceutical labs, European buyers, and cancer research institutions. Ongoing R&D includes exploring the development of 7-troc Paclitaxel and full Paclitaxel synthesis in Nepal."
              }
            />
            <Card
              icon={<FaLeaf className="text-primary size-8 lg:size-10" />}
              name={"Compliance & Sustainability"}
            >
              <div className="flex flex-col items-start w-full px-2">
                <ul className="flex flex-col list-disc list-outside space-y-3 text-left ml-5">
                  <li className="text-sm md:text-base text-muted">
                    Fully aligned with Forest Act 2019, CITES Appendix II, and
                    NTFP policies
                  </li>
                  <li className="text-sm md:text-base text-muted">
                    Only plantation-grown material is used (no wild harvesting)
                  </li>
                  <li className="text-sm md:text-base text-muted">
                    Environmental Impact Assessments (IEE/EIA) completed
                  </li>
                  <li className="text-sm md:text-base text-muted">
                    Government royalty: NPR 50/kg of raw material
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          {/* lab  */}
          <div className="max-w-7xl mx-auto bg-white rounded-xl container p-6 w-full text-center flex flex-col space-y-6 items-center h-full shadow hover:shadow-2xl transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            {/* Heading Section */}
            <div className="flex flex-col justify-center items-center space-y-3">
              <div className="max-h-20 max-w-20 h-14 w-14 md:h-18 md:w-18 flex justify-center items-center rounded-full bg-muted-foreground">
                <ImLab className="text-primary size-8 lg:size-10" />
              </div>
              <h3 className="font-semibold text-xl lg:text-2xl">
                Scientific Extraction & Laboratory Testing
              </h3>
              <p className="text-muted text-sm md:text-base lg:text-base max-w-2xl">
                Advanced technologies such as microwave-assisted extraction,
                solvent filtration, and fractional distillation are used to
                isolate 10-DAB III with 95-99% purity.
              </p>
            </div>

            {/* Image and description  */}
            <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-10 w-full">
              <div className="shrink-0 relative group overflow-hidden rounded-lg">
                <img
                  src="/assets/lab.png"
                  alt="lab"
                  className="object-contain max-h-56 md:max-h-64 lg:max-h-100 transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-3 text-white text-xs md:text-sm text-center">
                  Solvent extraction unit used in Taxus processing (Lalitpur
                  Plant)
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left text-sm lg:text-base text-muted space-y-4">
                <p className="text-muted">
                  To ensure global pharmaceutical Card standards, MHBL partners
                  with national and international laboratories for:
                </p>
                <ul className="space-y-2 list-disc list-inside lg:list-outside ml-0 lg:ml-5">
                  <li>
                    HPLC (High-Performance Liquid Chromatography) for purity
                    testing
                  </li>
                  <li>Microbial & heavy metal screening</li>
                  <li>Solvent residue testing</li>
                  <li>
                    Compliance with international export norms and CITES
                    regulations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlagShip;
