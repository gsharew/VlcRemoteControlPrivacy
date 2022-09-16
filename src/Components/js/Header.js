import header from '../css/header.css';
import app_icon from '../../Assets/app_icon.png'
const Header = () =>{
    return(
         <div>
            <div className='header'>
                <img src={app_icon} alt="Loading..."></img>
                <h1>Privacy Policy</h1>
            </div>  
         </div> 
    )
}

export default Header;