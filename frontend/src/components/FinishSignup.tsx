const FinishSignup = () => {
    const userType = 1;
  return (
    <div className='w-full mt-20 flex flex-col gap-5 items-center justify-center' style={{height:450}}>
      <div className='relative flex items-center justify-center md:justify-between mx-12 max-w-5xl h-450 w-full bg-white'>
        <div className='md:w-[45%] max-w-lg mx-5 h-full z-10 flex items-center justify-center border-[1px] border-primary rounded-xl'>
          <div className='bg-white h-[80%] p-10 rounded-xl flex flex-col items-center justify-center'>
            <h1 className="text-4xl font-semibold font-poppins mb-10 text-center">Welcome to EverAfter Elegance</h1>
            <p className='font-poppins font-medium text-center mb-8'>
              {userType === 1 ? "We are here to make your dream day a reality..." : "It is our honor to have you as a part of our community..."}
            </p>
            <p className='text-xl font-poppins font-semibold mb-3 text-center'>Finish up and publish</p>
          </div>
        </div>
        <div className='w-[45%] h-450 right-0 hidden md:block'>
          <div className='relative h-full w-full'>
            <div className="absolute inset-0 bg-[#00000066] rounded-xl opacity-70"></div>
            <img src="../../signUp2.png" alt="Couple Image" className="object-cover h-450 w-full rounded-xl" style={{height:450}}/>
          </div>
        </div>
      </div>
      <div className='w-[90%] mt-5 relative flex items-center justify-end mx-12 max-w-5xl'>
        <button className="bg-primary absolute mt-5 font-poppins text-[#FFFFFFEB] font-semibold px-6 py-2 rounded-full hover:bg-secondary hover:shadow-md transition-colors">Finish</button>
      </div>
    </div>
  );
};

export default FinishSignup;
