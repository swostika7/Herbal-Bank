
import Heading from "../../components/Heading";

const Director = [
  {
    img : "/assets/Sugarika.png",
    name: "Mrs. Sugarika K.C",
    postion: "Chairperson",
    description:
      "Sugarika KC is a prominent social entrepreneur, positive change catalyst, women empowerment activist, and youth development facilitator in Nepal. She is an inhabitant of Bhaktapur, Nepal,a former Miss Nepal (2005), and a notable figure in Nepal. She holds a master's degree in sociology. She is currently serving as the Chairperson of Muktinath Herbal Company Ltd., a subsidiary of Muktinath Krishi Company Ltd., where she leads strategic efforts to uplift Nepal's herbal industry through sustainable, inclusive, and market-driven approaches. Apart from this, she is also involved in various organizations such as IPAS Nepal, Cancer Care Nepal, Surakshit Pariwar, Image F.M., and Suvadin.com. She has also been involved in various campaigns and initiatives aimed at addressing gender-based violence and promoting gender equality in the country. KC's work has garnered recognition both nationally and internationally, making her a leading figure in the field of women's empowerment in Nepal. She continues to be a respected figure in Nepal, admired for her beauty, grace, and commitment to social change.",
  },
  {
    img :"/assets/krishna.png",
    name: "Mr. Krishna Prasad Dhakal",
    postion: "Director",
    description:
      "Mr. Krishna Prasad Dhakal is an integral part of Muktinath Herbal, contributing actively to the company's mission of promoting natural and Ayurvedic products. Known for his dedication and disciplined work ethic, he plays a vital role in supporting the organization's growth and development. His commitment to quality and sustainability reflects the values of Muktinath Herbal in delivering trusted herbal solutions to the community.",
  },
  {
    img: "/assets/Ramsaran.png",
    name: "Mr. Ram Sharan Timalsina",
    postion: "Director",
    description:
      "Mr. Timalsina is an Agri-Economist (B.Sc in Agriculture and MA in Economics of Agriculture Development from Tribhuvan University, Nepal), who has been working in agriculture value chain development including different projects management. He is currently engaged with Muktinath Herbal Company Ltd., a subsidiary of Muktinath Krishi Company Ltd., where he contributes to the promotion, value addition, and commercialization of Nepal’s herbal and agricultural resources.",
  },
];
function BOD() {
  return (
    <>
      <div className="bg-gray-100 h-full p-5 ">
        <div className="mx-auto max-w-6xl justify-center">
        <Heading heading={"Board of Directors"} redesign={"text-center"} />
        {/* picture and description  */}
        <div className="flex flex-col space-y-10  ">
          {Director.map((items, i) => (
            <div key={i} className=" flex flex-col justify-center items-center md:flex-col lg:flex-row space-x-10 space-y-4 ">
              {/* image  */}
              <div className="flex justify-center items-center ">
                <img
                  src={items.img}
                  alt={items.name}
                  className="h-full lg:h-100 w-full"
                />
              </div>

              {/* description  */}

              <div className="col-span-2 max-w-2xl">
                <Heading
                  key={i}
                  heading={items.name}
                  headingthree={items.postion}
                  redesign={"text-blue-700"}
                >
                  <p>{items.description}</p>{" "}
                </Heading>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BOD;
