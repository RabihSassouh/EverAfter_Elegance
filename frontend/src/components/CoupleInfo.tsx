

const CouplesInfo = () => {

    return (
        <div className="min-h-screen flex items-center justify-center  px-12 bg-white">
            <div className="container max-w-5xl mx-auto">
                <div className='mb-16 flex flex-col gap-8'>
                    <h1 className="text-4xl font-semibold font-poppins text-[#000000CC] text-center">
                        Couples information
                    </h1>
                </div>
                <div className='flex flex-col md:flex-row gap-20 mb-12 w-full'>
                    <div className="w-full md:w-1/2 h-full md:p-14 md:shadow-xl">
                        <div className='mb-8 flex flex-col items-center justify-center'>
                            <h2 className='font-poppins text-4xl font-semibold text-center text-[#000000CC] tracking-wide'>
                                Bride
                            </h2>
                            <hr className='border-[2px] border-primary w-32'/>
                        </div>
                        <div className='flex flex-col gap-4 h-full items-center justify-between w-full'>
                            <form className='h-full flex flex-col gap-4 w-full' >
                                <input type="text" className='w-full border-[1px] border-gray-600 rounded-xl font-poppins px-4 py-2 placeholder:font-poppins' placeholder='First name' name='first_name'/>
                                <input type="text" className='w-full border-[1px] border-gray-600 rounded-xl font-poppins px-4 py-2 placeholder:font-poppins' placeholder='Last name' name='last_name'/>
                                <input type="text" className='w-full border-[1px] border-gray-600 rounded-xl font-poppins px-4 py-2 placeholder:font-poppins' placeholder='Email' name='email'/>
                                <input type="text" className='w-full border-[1px] border-gray-600 rounded-xl font-poppins px-4 py-2 placeholder:font-poppins' placeholder='Phone' name='phone'/>
                            </form>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default CouplesInfo