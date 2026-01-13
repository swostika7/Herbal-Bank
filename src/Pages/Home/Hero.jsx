import Heading from "../../components/Heading";
import Buttons from "../../components/Buttons";

function Hero() {
  return (
<>
 <div className="bg-[url(/assets/back.png)] flex justify-center items-center relative h-screen  ">
        <div className="absolute inset-0 bg-gradient-one opacity-95 "></div>
        {/* content  */}
        <div className=" absolute grid grid-cols-1 lg:grid-cols-3 gap-10 p-3 lg:p-4">
          {/* Text content  */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-6 text-center text-sm md:text-left lg:px-26 mb-50 lg:mb-0">
            <h1 className="font-bold text-3xl md:text-5xl lg:text-5xl text-white  ">
              Muktinath Herbal Bank
              <span className="text-one block"> for Natural Economy</span>
            </h1>

            <p className="text-white  lg:text-lg max-w-3xl">
              Welcome to Muktinath Herbal Bank Ltd, an associate company of
              Muktinath Krishi Company Limited, established in the year 2022
              with the vision of transforming Nepal's medicinal and aromatic
              plants (MAPs) sector. We are dedicated to addressing the
              challenges of unsustainable harvesting, lack of processing
              facilities, and fluctuating market prices while ensuring the
              preservation of Nepal's rich herbal biodiversity.
            </p>

            <div className="flex justify-center md:justify-start">
              <Buttons buttonText={"Heal With Us"} />
            </div>
          </div>
          {/* Microscope Image  */}
          <div className="hidden lg:block">
            <img
              src="/assets/microscope.png"
              alt="Microscope"
              className="w-1/2 lg:w-full "
            />
          </div>
        </div>
        {/* Overlay content  */}
        <div className="absolute bottom-0 flex justify-center items-center bg-white translate-y-1/2 max-w-4xl rounded-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            {/* Flower Image */}
            <div className="overflow-hidden py-2 px-2">
              <img
                src="/assets/flower.png"
                alt="Herbal Flower"
                className="text-center w-full h-full object-cover rounded-xl transform hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content Area */}
            <div className="p-2 lg:p-0">
              <Heading heading={"Herbal Research Lab in Nepal"}>
                <p className="text-gray-600">
                  Nestled in the heart of Nepal's pristine landscapes, our
                  Herbal Research Lab stands as a beacon of innovation and
                  discovery. With a focus on harnessing the rich biodiversity of
                  the Himalayas, our lab serves as a hub for groundbreaking
                  research in herbal medicine and sustainable development.
                </p>
              </Heading>
            </div>
          </div>
        </div>
      </div>
</>
  );
}

export default Hero;
