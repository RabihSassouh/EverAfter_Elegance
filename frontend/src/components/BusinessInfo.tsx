import React from 'react';

const BusinessInformation: React.FC = () => {

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-12 bg-white">
            <div className="container max-w-4xl mx-auto">
                <form action="" >
                    <div className='mb-16 flex flex-col gap-8'>
                        <h1 className="text-3xl font-medium font-poppins text-[#000000CC] text-center">
                            Tell guests what you place has to offer
                        </h1>
                        <textarea name="description" id="" className='border-[1px] border-gray-600 w-full rounded-xl h-44 font-poppins px-4 py-2'></textarea>
                    </div>
                    <div className='flex flex-col gap-8 mb-12'>
                        <h1 className='text-3xl font-medium font-poppins text-[#000000CC] text-center'>
                            Your business information
                        </h1>
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default BusinessInformation;
