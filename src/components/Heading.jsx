

function Heading({heading,headingthree,children,redesign}) {
  return (
    <>
       <div className='flex flex-col space-y-4'>
        <h2 className={`text-4xl font-semibold ${redesign}`}>{heading}</h2>
        <h3 className="font-semibold text-xl">{headingthree}</h3>
        <p className='container mx-auto max-w-5xl'>{children}</p>
        </div> 
    </>
  )
}

export default Heading