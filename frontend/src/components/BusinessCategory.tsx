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



    return (
        <div></div>
    );
};

export default BusinessCategory;
