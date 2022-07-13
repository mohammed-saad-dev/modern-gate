import React, { useState } from 'react'
/*import data*/ 
import sliderData from './sliderData'
function AboutUs() {
    let [current, setCurrent] = useState(0);
    function toggleOne(){

        return current === 0  ? "unacctiv": "acctive"
    }
    function toggleTwo(){

        return current === 3 ? "unacctiv": "acctive"
    }
    function coll(){
        return current === 0 ? 'coll': "" 

        
    }

    return (
        <div id='about' className='AboutUsSection'>
            <p className='tittle'>About us</p>
            <div  className='AboutUs'>
                <div className='subject'>
                    <p className={coll()}>{sliderData[current].text}</p>
                </div>
                
                <div className='buttons'>
                    <button  onClick={() => setCurrent( current === 0 ? current = 0: --current)} className={toggleOne()}><i className="fa-solid fa-chevron-left left"></i></button>
                    <button  onClick={() => setCurrent( current === sliderData.length - 1  ? current = 3 : ++current)} className={toggleTwo()}><i className="fa-solid fa-chevron-right right"></i></button>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
