import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setData, setStep } from '../store/signUpSlice';
import BusinessInformationSchema from '../validationSchemas/BusinessInfoSchema';

interface BusinessInformationFormData {
    description: string;
    company_name: string;
    phone_number: string;
    email: string;
    social_media: string;
    facilities: string;
    vision: string;
}

const BusinessInformation: React.FC = () => {
    const dispatch = useDispatch();
    const businessInfoForm = useRef<HTMLFormElement>(null);

    const handleNext = async () => {
        if (!businessInfoForm.current) return;

        const businessInfoFormData = new FormData(businessInfoForm.current);
        try {
            const business_information: Partial<BusinessInformationFormData> = {};
            for (let [key, value] of businessInfoFormData.entries()) {
                business_information[key as keyof BusinessInformationFormData] = value as string;
            }
            await BusinessInformationSchema.validate(business_information, { abortEarly: false });

            // If validation succeeds, continue with form submission
            const modData = {
                business_information
            };
            dispatch(setData(modData));
            dispatch(setStep(8));
        } catch (error: any) {
            toast.error(`${error.message}`);
            console.error('Validation errors:', error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-12 bg-white">
            <div className="container max-w-4xl mx-auto">
                <form action="" ref={businessInfoForm}>
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
                        <div className='flex flex-col md:h-52 md:flex-row gap-8 items-center justify-between'>
                            <div className='flex flex-col gap-4 h-full items-center justify-between'>
                                <input name='company_name' type="text" className='border-[1px] border-gray-600 rounded-xl font-poppins px-4 py-2 placeholder:font-poppins' placeholder='Company name'/>
                                <input name='phone_number' type="text" className='border-[1px] border-gray-600 rounded-xl font-poppins px-4 py-2 placeholder:font-poppins' placeholder='Phone number'/>
                                <input name='email' type="text" className='border-[1px] border-gray-600 rounded-xl font-poppins px-4 py-2 placeholder:font-poppins' placeholder='Email'/>
                                <input name='social_media' type="text" className='border-[1px] border-gray-600 rounded-xl font-poppins px-4 py-2 placeholder:font-poppins' placeholder='Social media'/>
                            </div>
                            <textarea name="facilities" id="" className='w-full md:w-auto h-28 md:h-full border-[1px] border-gray-600 rounded-xl font-poppins px-4 py-2 placeholder:font-poppins placeholder:text-center' placeholder='Facilities'></textarea>
                            <textarea name="vision" id="" className='w-full md:w-auto h-28 md:h-full border-[1px] border-gray-600 rounded-xl font-poppins px-4 py-2 placeholder:font-poppins placeholder:text-center' placeholder='Vision'></textarea>
                        </div>
                    </div>
                </form>
                <div className='flex w-full items-end justify-end'>
                    <button className="bg-primary  font-poppins text-[#FFFFFFEB] font-semibold px-6 py-2 rounded-full hover:bg-secondary hover:shadow-md transition-colors" onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default BusinessInformation;
