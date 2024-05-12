
const Step1 = () => {



  return (
    <div className='w-full h-screen flex items-center justify-center'>
            <h1 className="text-4xl font-semibold font-poppins mb-10 text-center">Welcome User</h1>

        <div className='absolute w-[55%] h-full right-0 hidden md:block'>
          <div className='relative h-full w-full'>
            <div className="absolute inset-0 bg-[#00000066] rounded-xl opacity-70"></div>
            <img src="../../signUp2.png" alt="Couple Image" className="object-cover h-full w-full rounded-xl"/>
            <button className="absolute bottom-5 right-5 bg-primary  font-poppins text-[#FFFFFFEB] font-semibold px-6 py-2 rounded-full hover:bg-secondary hover:shadow-md transition-colors">Next</button>
          </div>
        </div>
      </div>

  )
}

export default Step1