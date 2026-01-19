function Card({ icon, name, children, img, paragraph, cardDesign,imageDesign }) {
  return (
      <div
        className={`bg-white rounded-xl container mx-auto p-6 w-full text-center flex flex-col space-y-3 items-center h-full shadow hover:shadow-2xl transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ${cardDesign}`}
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
          <p className="text-gray-700 text-sm md:text-base lg:text-base">{paragraph}</p>
        </div>
        <div className="flex justify-center">
          <img src={img} className={`${imageDesign}`} />
        </div>
        <div className="text-sm lg:text-base">{children}</div>
      </div>
  );
}

export default Card;
