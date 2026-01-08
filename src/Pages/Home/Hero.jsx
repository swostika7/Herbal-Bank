
import Heading from "../../components/Heading";
import Buttons from "../../components/Buttons";

function Hero() {
  return (
    <div className="relative">
      {/* Backround image  */}
      <div className="bg-[url(/assets/back.png)] h-screen relative ">
        {/* Background color with content  */}
        <div className="absolute bg-gradient-one w-full h-screen opacity-90  ">
          <div className="grid grid-cols-3 container mx-auto max-w-6xl ">
            <div className="px-4 py-20 col-span-2 space-y-5 max-w-3xl">
              <h1 className="font-bold text-5xl top-10 text-white leading-12">
                Muktinath Herbal Bank
                
                <span className="text-one"> for Natural Economy</span>
              </h1>
             
              <p className="text-white pt-4 text-xl ">
                Welcome to Muktinath Herbal Bank Ltd, an associate company of
                Muktinath Krishi Company Limited, established in the year 2022
                with the vision of transforming Nepal's medicinal and aromatic
                plants (MAPs) sector. We are dedicated to addressing the
                challenges of unsustainable harvesting, lack of processing
                facilities, and fluctuating market prices while ensuring the
                preservation of Nepal's rich herbal biodiversity.
              </p>
            

              {/* Heal with us button  */}

              <Buttons buttonText={" Heal With Us"}/>
            </div>

            {/* image  */}
            <div className="flex items-center">
              <img src="/assets/microscope.png" className="" />
            </div>
          </div>
        </div>
      </div>

      {/* herbal section  */}
      <div className="relative flex justify-center items-center  ">
        <div className=" absolute bg-white rounded-2xl shadow-2xl p-4 w-2/3 h-auto container mx-auto ">
          <div className="grid grid-cols-2 gap-4">
            {/* images  */}
            <div>
              <img src="/assets/flower.png" />
            </div>

            {/* content  */}
            <div>
              <Heading heading={"Herbal Research Lab in Nepal"}>
                <p>
                  Nestled in the heart of Nepal's pristine landscapes, our
                  Herbal Research Lab stands as a beacon of innovation and
                  discovery. With a focus on harnessing the rich biodiversity of the Himalayas, our lab serves as a hub for groundbreaking research in herbal medicine and sustainable development.
                </p>
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
