
import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'
import app from '../styles/app.module.scss'
const Footer = () => {
    return (
        <footer className='bg-black flex flex-col text-white items-center mt-24 
        lg:flex-row lg:justify-between lg:p-4 lg:items-baseline'>
            <section>
            <img className="mt-12" src={logo} alt="logo" />
            <ul className={`flex flex-col gap-4 items-center mt-8 ${app.hoverunderline} lg:flex-row`}>
                <li>About</li>
                <li>Careers</li>
                <li>Events</li>
                <li>Products</li>
                <li>Support</li>
            </ul>  
            </section>
            
            <section className='flex flex-col items-center'>
             <div className='flex gap-4 mt-12'>
                <img src={facebook} alt="facebook-logo"/>
                <img src={twitter} alt="twitter-logo"/>
                <img src={pinterest} alt="pinterest-logo"/>
                <img src={instagram} alt="instagram-logo"/>
            </div>
            <p className={`text-[#8c8c8c] mt-4 mb-12`}>&#169; 2023 Loopstudios. All rights reserved.</p>   
            </section>
            
        </footer>
    )
}

export default Footer; 