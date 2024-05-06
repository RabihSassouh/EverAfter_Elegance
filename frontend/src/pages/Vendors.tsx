import { useEffect } from 'react'
import NavigationBar from '../components/NavigationBar';

const Venue = () => {

    useEffect(() => {
        document.title = 'Venue';
    }, []);

    return (
        <div>
            <NavigationBar/>
        </div>
    )
}
export default Venue