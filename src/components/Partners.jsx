/* import images*/ 
import Dell from '../images/partners/Dell.png'
import zyco from '../images/partners/zycoo.png'
import tp from '../images/partners/tp.png'
import lenovo from '../images/partners/lenovo.jpg'
import dahua from '../images/partners/www.png'
import yealink from '../images/partners/Yealink.png'
import hickvision from '../images/partners/hickvision.png'
import d from '../images/partners/d.png'
import bosch from '../images/partners/bosch.png'
import superme from '../images/partners/Supreme_Logo.jpg'
import bose from '../images/partners/bose.png'
import hp from '../images/partners/HP.png'
function Partners() {
    return (
        <div className='PartnersSection'>
            <p className='tittle'>Partners</p>
            <div className="Partner">
                <div className='images'>
                    
                <img style={{marginTop:"20px"}} src={Dell} alt="dell" />
                <img style={{marginTop:"-35px"}} src={zyco} alt="zyco" />
                <img src={tp} alt="tp" />
                <img src={lenovo} alt="lenovo" />
                <img src={dahua} alt="dahua" />
                <img style={{marginTop:"10px"}} src={yealink} alt="yealink" />
                <img style={{marginTop:"10px"}}  src={hickvision} alt="hickvision" />
                <img src={d} alt="d" />
                <img src={bosch} alt="bosch" />
                <img src={superme} alt="superme" />
                <img style={{marginTop:"-25px"}} src={bose} alt="bose" />
                <img style={{margin:"-25px 20px",width:"100px"}} src={hp} alt="hp" />
                </div>
            </div> 
        </div>
    )
}

export default Partners