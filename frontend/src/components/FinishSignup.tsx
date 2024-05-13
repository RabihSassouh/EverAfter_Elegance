const FinishSignup = () => {
    const userType = 1;
  return (
    <div className='w-full mt-20 flex flex-col gap-5 items-center justify-center' style={{height:450}}>
      <div className='md:w-[45%] max-w-lg mx-5 h-full z-10 flex items-center justify-center border-[1px] border-primary rounded-xl'>
          <div className='bg-white h-[80%] p-10 rounded-xl flex flex-col items-center justify-center'>
            <h1 className="text-4xl font-semibold font-poppins mb-10 text-center">Welcome to EverAfter Elegance</h1>
            <p className='font-poppins font-medium text-center mb-8'>
              {userType === 1 ? "We are here to make your dream day a reality..." : "It is our honor to have you as a part of our community..."}
            </p>
            <p className='text-xl font-poppins font-semibold mb-3 text-center'>Finish up and publish</p>
          </div>
        </div>
        
    </div>
  );
};

export default FinishSignup;
