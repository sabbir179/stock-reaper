import membership from "./../../styles/membership.module.css";
import PriceTag from "../../componets/pricetag/Pricetag";


const Membership = () => {
    return (  
        <div className= {membership.box}> 
             <div className = {membership.box2} >
            
               <h1 className= {membership.title} > Membership </h1>
                <h1 className= {membership.subtitle} > The right price for you, whowever you are</h1>
               
            </div>
            <div className = {membership.priceTag} >
                <PriceTag />
            </div>
           
           <div className={membership.ref} >
               <div>
                   <h1> Refareal</h1>
               </div>
               <div>
                   <h1> After Payment</h1>
                 
               </div>
           </div> 
        
      
            
           
        </div>
    );
}
 
export default Membership;