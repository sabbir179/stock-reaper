import Footer from "../shared/Footer"
import Navbar from "../shared/Navbar"


const BaseLayout = ({children} ) => {
    return (  
        <div>
            <Navbar />
            { children }
            <Footer />
        </div>
    );
}
 
export default BaseLayout;