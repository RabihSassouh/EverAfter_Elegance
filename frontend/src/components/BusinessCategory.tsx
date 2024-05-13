import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setData, setStep } from '../store/signUpSlice';

interface Category {
    id: number;
    name: string;
    image: string;
}

const BusinessCategory: React.FC = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state: any) => state.signUp);

    const categories: Category[] = [
        { id: 1, name: "Wedding Venues", image: "../../venue.jpg" },
        { id: 2, name: "Photographer", image: "../../photographer.jpg" },
        { id: 3, name: "Wedding Florist", image: "../../wedding_flourist.jpg" },
        { id: 4, name: "Sounds & Lightning", image: "../../sounds_lighting.jpg" },
        { id: 5, name: "DJs", image: "../../djs.jpg" },
        { id: 6, name: "Cars And Limos", image: "../../cars_limos.jpg" },
        { id: 7, name: "Wedding Fireworks", image: "../../wedding_fireworks.jpg" },
        { id: 8, name: "Cakes & Chocolate", image: "../../cakes_choclates.jpg" },
        { id: 9, name: "Hotel & Resorts", image: "../../hotels_resorts.jpg" },
        { id: 10, name: "Wedding Dress", image: "../../wedding_dress.jpg" },
        { id: 11, name: "Menswear", image: "../../mensware.jpg" },
        { id: 12, name: "Hair & Make-Up", image: "../../hair_makeup.jpg" },
        { id: 13, name: "Entertainment", image: "../../entertainment.jpg" }
    ];

    const handleCategorySelect = (category: Category) => {
        const data = {
            category
        };
        dispatch(setData(data));
    };

    const handleNext = () => {
        if (!data.category) {
            toast.error('Select a category first');
        } else {
            dispatch(setStep(4));
        }
    };

    return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <div className="my-12 px-12 text-center h-full flex flex-col gap-5 items-center justify-center">
                <h1 className="text-4xl font-medium font-poppins text-[#000000CC]">Which of these best describes your business?</h1>
                <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <div key={index} className={`flex flex-col items-center justify-center bg-white rounded-xl cursor-pointer group`} onClick={() => handleCategorySelect(category)}>
                            <div className='relative w-full h-32 mb-2'>
                                <div className="absolute inset-0 bg-[#00000066] rounded-xl opacity-70"></div>
                                <img src={category.image} alt={category.name} className={`w-full h-32 object-cover rounded-xl mb-2 border-[2px] border-[#00000033] group-hover:border-primary ${data?.category?.id === category.id ? 'border-primary' : ''}`} />
                            </div>
                            <span className={`text-center text-[#00000099] font-poppins font-semibold group-hover:text-primary ${data?.category?.id === category.id ? 'text-primary' : ''}`}>{category.name}</span>
                        </div>
                    ))}
                </div>
                <div className='flex w-full items-end justify-end'>
                    <button className="bg-primary  font-poppins text-[#FFFFFFEB] font-semibold px-6 py-2 rounded-full hover:bg-secondary hover:shadow-md transition-colors" onClick={handleNext}>Next</button>
                </div>
            </div>

        </div>
    );
};

export default BusinessCategory;
