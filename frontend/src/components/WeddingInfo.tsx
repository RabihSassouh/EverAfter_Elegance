
const WeddingInfo = () => {

    return (
        <div className='w-full flex flex-col p-5 gap-5 items-center justify-center h-full' >
            <div className='mb-10 flex flex-col gap-8'>
                <h1 className="text-3xl font-semibold font-poppins text-[#000000CC] text-center">
                    Wedding information
                </h1>
            </div>
            <div className='h-450 flex flex-row-reverse items-center justify-center md:justify-between mx-12 max-w-5xl w-full bg-white' style={{maxHeight:450}}>
                <div className='h-450 md:w-[45%] max-w-lg md:py-0  z-10 flex items-center justify-center border-[1px] border-primary rounded-xl'>
                    <div className='bg-white h-[80%] p-10 rounded-xl flex flex-col items-center justify-center w-full px-10' style={{height:450}}>
                        <h1 className="text-4xl font-semibold font-poppins mb-10 text-center tracking-wide text-[#000000CC]">Your day</h1>
                        <div className='flex flex-col gap-3 w-full'>
                            <form className='flex flex-col gap-3 w-full' >
                                <input type="date" className='w-full border-[1px] border-gray-600 rounded-xl font-poppins px-4 py-2 placeholder:font-poppins' placeholder='Date' name='date'/>
                                <input type="text" className='w-full border-[1px] border-gray-600 rounded-xl font-poppins px-4 py-2 placeholder:font-poppins' placeholder='Venue preference' name='venue_preference'/>
                                <input type="number" className='w-full border-[1px] border-gray-600 rounded-xl font-poppins px-4 py-2 placeholder:font-poppins' placeholder='Budget' name='budget'/>
                                <input type="number" className='w-full border-[1px] border-gray-600 rounded-xl font-poppins px-4 py-2 placeholder:font-poppins' placeholder='Guest count' name="guest_count"/>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='w-[45%] right-0 hidden md:block' style={{maxHeight:450}}>
                    <div className='relative h-full w-full'>
                        <div className="absolute inset-0 bg-[#00000066] rounded-xl opacity-70"></div>
                        <img src="../../weddinginfo.jpg" alt="Couple Image" className="object-cover w-full h-full rounded-xl" style={{maxHeight:450}}/>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default WeddingInfo;
