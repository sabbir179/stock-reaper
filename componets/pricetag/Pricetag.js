import  price from "./price.module.css"


const PriceTag = () => {
    return ( 
        <>
        {/* 1st card  */}
            <div className= {price.container_1} >
                    <div className= {price.upper_part}>
                        <div className = {price.package} >
                            <div className = {price.name} > Gold</div>
                            <div className= {price.price}>
                              <div className= {price.dollarSign} >$30</div>
                              <div className = {price.perMonth}> /mo</div>
                            </div>
                            

                        </div>
                        <div className = {price.features}>
                                <ul>
                                    <li> <span> &#10004; </span> varius lectus porta vestibulum</li>
                                    <li><span> &#10004; </span> Jiius Soctus porta vestibulumf</li>
                                    <li><span> &#10004; </span> asdf sdaere eref</li>
                                    <li><span> &#10004; </span> varius lectus porta vestibulum</li>
                                </ul>
                                <div className = {price.btnBox}>
                                    <a className =  {price.btn}> Get started</a>
                                </div>
                                
                            </div>
                    </div>

{/* 2nd card  */}
           

                    <div className= {price.upper_part}>
                        <div className = {price.package} >
                            <div className = {price.name} > platinum</div>
                            <div className= {price.price}>
                              <div className= {price.dollarSign} >$50</div>
                              <div className = {price.perMonth}> /mo</div>
                            </div>
                            

                        </div>
                        <div className = {price.features}>
                                <ul>
                                    <li> <span> &#10004; </span> Jiius  vestibulum sdaere eref</li>
                                    <li><span> &#10004; </span> varius lectus porta vestibulum</li>
                                    <li><span> &#10004; </span> asdf sdaere eref</li>
                                    <li><span> &#10004; </span> Jiius Soctus porta vestibulum</li>
                                </ul>
                                <div className = {price.btnBox}>
                                    <a className =  {price.btn}> Get started</a>
                                </div>
                            </div>
                        </div>
            </div>

        </>
     );
}
 
export default PriceTag;