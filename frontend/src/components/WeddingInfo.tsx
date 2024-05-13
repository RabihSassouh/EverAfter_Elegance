
const WeddingInfo = () => {

    return (
        <div className='w-full flex flex-col p-5 gap-5 items-center justify-center h-full' >
            <div className='mb-10 flex flex-col gap-8'>
                <h1 className="text-3xl font-semibold font-poppins text-[#000000CC] text-center">
                    Wedding information
                </h1>
            </div>
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
    );
};

export default WeddingInfo;
