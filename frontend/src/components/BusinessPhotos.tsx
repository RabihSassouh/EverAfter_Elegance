import React, { useState, ChangeEvent } from 'react';
import { FaPlus, FaTimes } from "react-icons/fa"; 
import Masonry from 'react-masonry-css';
import { toast } from 'react-toastify';
import { setData, setStep } from '../store/signUpSlice';
import { useDispatch } from 'react-redux';

const breakpointObj: { [key: number]: number } = {

    3000: 3,
    2000: 3,
    1500: 3,
    1200: 3,
    1000: 2,
    500: 1,
}

const BusinessPhotos: React.FC = () => {
    const dispatch = useDispatch();
    const [photos, setPhotos] = useState<File[]>([]);

    const handlePhotos = () => {
        const fileInput = document.getElementById('photoInput') as HTMLInputElement;
        fileInput.click();
    }

    const handlePhotoInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files as FileList);
        setPhotos(prevPhotos => [...prevPhotos, ...files]);
    }

    const handleRemovePhoto = (index: number) => {
        setPhotos(prevPhotos => prevPhotos.filter((_, i) => i !== index));
    }

    const handleNext = () => {
        if(photos.length < 4){
            toast.error('Must select at least 4 photos');
        } else {
            const data = {
                photos
            }
            dispatch(setData(data));
            dispatch(setStep(7));
        }
    }

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
                <div>
                    {
                        photos.length > 0 ? (
                            <Masonry className="flex gap-5 animate-slide-fwd max-w-4xl mt-5" breakpointCols={breakpointObj}>
                                {photos.map((photo, index) => (
                                    <div key={index} className="relative">
                                        <FaTimes className="z-20 absolute top-0 right-0 cursor-pointer text-red-500 bg-white text-xl rounded-full" onClick={() => handleRemovePhoto(index)} />
                                        <img src={URL.createObjectURL(photo)} alt={`Photo ${index}`} className="w-full object-cover rounded-xl mb-5 border-[2px] border-[#00000033] hover:border-primary cursor-pointer" />
                                    </div>
                                ))}
                            </Masonry>
                        ) : (
                            <div className='p-5'>
                                <p className='font-poppins text-lg font-medium text-red-600'>No image selected</p>
                            </div>
                        )
                    }
                </div>
                <div className='flex w-full items-end justify-end'>
                    <button className="bg-primary  font-poppins text-[#FFFFFFEB] font-semibold px-6 py-2 rounded-full hover:bg-secondary hover:shadow-md transition-colors" onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
    )
}

// Export the BusinessPhotos component
export default BusinessPhotos;
