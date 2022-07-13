/*import logo*/
import Logo from '../images/Logo.png'
/*import location image*/ 
import location from '../images/location.png'
function Footer() {
    return(
        <div className="container ">
            <div className="Footer">
                <div class="left-side">
                    <div className="for-icon">
                        <i className="fa-solid fa-phone"></i>
                        <p>+971 585 95 1330</p>
                    </div>
                    <div className="for-icon">
                        <i className="fa-solid fa-envelope"></i>
                        <p>info@modernsgate.com</p>
                    </div>
                </div>

                <div className="for-center">
                    <p className="thanks"> Thank you for visiting our website !</p>
                    <img src={Logo} className='logo-footer' alt="logo"/>
                </div>

                <a id='locations' target={"_blank"} rel="noreferrer" href="https://www.google.com/maps/place/The+Atrium+Centre/@25.257108,55.299059,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f4368c3425ec9:0x49a020d9c7a743cb!8m2!3d25.257108!4d55.299059?hl=en-AE"><img src={location} className='' alt="location"/></a> 

            </div> 
        </div>

    )
}

export default Footer