

const CouplesInfo = () => {

    return (
        <div className="min-h-screen flex items-center justify-center  px-12 bg-white">
                <div className='mb-16 flex flex-col gap-8'>
                    <h1 className="text-4xl font-semibold font-poppins text-[#000000CC] text-center">
                        Couples information
                    </h1>
                </div>
                <div className='flex flex-col md:flex-row gap-20 mb-12 w-full'>
                            <h2 className='font-poppins text-4xl font-semibold text-center text-[#000000CC] tracking-wide'>
                                Bride
                            </h2>
                            <hr className='border-[2px] border-primary w-32'/>
                        </div>
                     
        </div>
    )
}

export default CouplesInfo