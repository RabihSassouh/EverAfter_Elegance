import React from 'react';

const BusinessPhotos: React.FC = () => {


    return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <div className="my-12 px-12 text-center h-full flex flex-col gap-5 items-center justify-center">
                <h1 className="text-4xl font-medium font-poppins text-[#000000CC]">Choose photos for your business</h1>
                <div className='flex w-full items-end justify-center mt-5'>
                    <button className="bg-white flex items-center gap-3 font-poppins text-[#000000CC] border-[2px] border-gray-600 font-semibold px-6 py-2 rounded-xl hover:shadow-md transition-colors" onClick={handlePhotos}>
                        <FaPlus />
                        Add photos
                    </button>
                    <input id="photoInput" type="file" style={{ display: 'none' }} onChange={handlePhotoInputChange} multiple />
                </div>
                
            </div>
        </div>
    )
}

// Export the BusinessPhotos component
export default BusinessPhotos;
