function Card({ icon, name, children, img, par, aboutcard }) {
  return (
    <div>
      <div
        className={`bg-white rounded-xl container mx-auto p-6 w-full text-center flex flex-col space-y-3 h-full shadow hover:shadow-2xl ${aboutcard}`}
      >
        {/* logo */}
        <div className="flex justify-center">
          <div className=" max-h-20 max-w-20 h-12 w-12 md:h-18 md:w-18 flex justify-center items-center rounded-full bg-gray-200 ">
            <p className="">{icon }</p>
          </div>
        </div>
        {/* content  */}
        <div className="flex flex-col space-y-2">
          <h2 className="font-semibold text-xl lg:text-2xl">{name}</h2>
          <p className="text-gray-700 text-sm md:text-lg lg:text-lg">{par}</p>
        </div>
        <div className="flex justify-center">
          <img src={img} />
        </div>
        <p className="text-gray-700 text-sm lg:text-lg">{children}</p>
      </div>
    </div>
  );
}

export default Card;
