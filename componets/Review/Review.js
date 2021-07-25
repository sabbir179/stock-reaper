import review from "./Review.module.css";


const Review = () => {
    return (  
        <>
            <div className= {review.customer}> 
                 <h1 > Customer Review</h1>
                 <div className= {review.line} />
            </div>
           <div className= {review.comments} >
               <div className={review.bx}>
                    <div className={review.blockquote}>
                    
                    </div>
                    <div className={review.com}>
                        <p>Ut vulputate lectus risus, id scelerisque 
                           ipsum venenatis et.<br /> Sed ut risus ut leo ultr
                           icies dapibus vel quis purus. <br/> Suspendisse 
                           potenti. Pellentesque ornare auctor erat,</p>
                    </div>
                    <div className={review.comU}>
                        <p>-Tom James </p>
                        <p> CEO</p>
                    </div>
               </div>
                <div className= {review.box} />
           </div>
        </>
    ); 
}
 
export default Review;