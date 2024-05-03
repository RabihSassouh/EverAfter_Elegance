import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const Hero = () => {
    return (
        <div className="relative bg-cover bg-center h-[450px]" style={{backgroundImage: "url('../../banner.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                <h1 className="text-white text-4xl font-poppins font-semibold mb-4">Bringing Dreams to life...</h1>
                    <div className="p-4 relative inline-block w-[50%] flex justify-center items-center overflow-hidden w-full">
                            <select className="appearance-none bg-[#FFFFFF0F] px-4 py-2 text-[#FFFFFFCC] focus:outline-none font-poppins w-full rounded-s-lg">
                                <option>Select Category</option>
                                {/* Categories of the business to be added */}
                            </select>

                </div>
            </div>
        </div>
    )
}

export default Hero