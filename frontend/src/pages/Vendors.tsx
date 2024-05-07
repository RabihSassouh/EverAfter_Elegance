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
            <p className="font-poppins text-[#494949]">
              We're committed to turning your dream fairytale wedding into
              reality, with careful attention to every detail. Our goal is to
              create a memorable experience that reflects your personal style,
              from grand gestures to small touches. Let us make your special day
              a magical celebration that you'll remember forever...
            </p>
        </div>
    )
}
export default Venue