import React from 'react'


import { FaWhatsappSquare} from 'react-icons/fa';
import { FaEnvelope} from 'react-icons/fa';
import { FaCopyright} from 'react-icons/fa';



const Footer = () => {
    return (  
        <div className="footer">
            <div className = "icons">
                 <p> <FaWhatsappSquare  /> </p> <p className="wtFont">+1-408 600 2293</p>
            </div>
            <div className = "icons">
            <p> <FaEnvelope /> </p> <p className="wtFont"> contact@stockreaper.com</p>
            </div>
            
            <div className = "icons">
            <p> StockRaper Inc </p> <p className="wtFont"><FaCopyright /> </p> <p className="wtFont">  2021 </p>
            </div>
           
        </div>
    );
}
 
export default Footer;