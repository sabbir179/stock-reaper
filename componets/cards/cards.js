
import card from "./Card.module.css"

const Cards = () => {
    return ( 
        <div className={card.container}>
            <div className={card.cBox}>
                <div className={card.cHeader}>
                   <h1  >Who we are</h1>
                </div>
                 <div className={card.cbody}>
                     <p>We are a group of enthusiastic stock finders who help to find the right stock to our subscribers.</p>
                 </div>
                
            </div>
            <div className={card.cBox}>
                <div className={card.cHeader}>
                    <h1>What do we do</h1>
                </div>
                <div className={card.cbody}>
                    <p>We filter hot stocks in the market and suggest to our subscribers.</p>
                </div>
                
            </div>
            <div className={card.cBox}>
                <div className={card.cHeader}>
                      <h1>Get benefited</h1>
                </div>
                
                <div className={card.cbody}>
                <p>We suggest same stocks we trade to our subscribers. So that they can get benefits along with us. If you follow our secret trading strategy, you will reap good profits from stock market trading..</p>
                </div>
                
            </div>

        </div>
     );
}
 
export default Cards;