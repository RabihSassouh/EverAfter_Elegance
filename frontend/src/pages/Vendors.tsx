import { useEffect } from 'react'
import NavigationBar from '../components/NavigationBar';

const Venue = () => {

    useEffect(() => {
        document.title = 'Venue';
    }, []);

    return (
        <div>
            <NavigationBar/>
            <h2 className="text-4xl font-semibold font-poppins mb-5 text-[#121212]">
              Ever After Elegance
            </h2>
        </div>
    )
}
export default Venue