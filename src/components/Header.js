
import logo from '../images/logo.svg'
import hamburger from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'
import app from '../styles/app.module.scss'
import { useState } from 'react'
import { styled } from 'styled-components'
const HeaderStyle = styled.section`
    background: ${props => props.width < 1024 ? `url('../images/mobile/image-hero.jpg')` : `url('../images/desktop/image-hero.jpg')`} no-repeat;
    background-size: cover;
    width: 100%;
    background-position:50% 50%;
    height: 80vh;
    object-fit: cover;
    image-rendering: -webkit-optimize-contrast;

`
const Header = () => {

    const [mobileNav, setmobileNav] = useState(false)
    const hamburgerMenu = () => {

        setmobileNav(!mobileNav)
        document.body.style.overflow = 'hidden';
    }

    if (!mobileNav) {
        document.body.style.overflow = 'visible';
    }

    const MobileHeader = () => {
        return (
        <>
        <section className='bg-black h-screen p-4 flex flex-col'>
        <section className='flex justify-between items-center mt-8 p-2'>
                    <header className={`flex justify-between`}>
                        <img src={logo} alt="logo" />
                    </header>
                    <img className="aspect-auto lg:hidden" src={mobileNav ? close : hamburger} alt='mobile-hamburger-icon' onClick={() => hamburgerMenu()} />
                    </section>
                    <nav className='my-auto lg:hidden px-4'>
                        <ul className={`flex flex-col gap-4 ${app.hoverunderline} ${app.mobilenav} text-white`}>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Events</li>
                            <li>Products</li>
                            <li> Support</li>
                        </ul>
                    </nav>
                
            </section>    
        </>)
    }


    if(mobileNav) {
        return(<MobileHeader/>)
    } else {
        return(
           <HeaderStyle width={window.innerWidth} className={`p-4 flex flex-col p-16`}>

                <section className='flex justify-between items-center mt-4'>
                    <header className={`flex justify-between`}>
                        <img src={logo} alt="logo" />
                    </header>
                    <img className="aspect-auto lg:hidden" src={hamburger} alt='mobile-hamburger-icon' onClick={() => hamburgerMenu()} />
                    <nav className='hidden lg:block'>
                        <ul className={`flex flex-row gap-4 ${app.hoverunderline} text-white`}>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Products</li>
                            <li>Support</li>
                        </ul>
                    </nav>
                </section>

                <section className={`p-4 border-solid border-2 border-white my-auto w-100 lg:w-6/12`}>
                    <span className={`text-4xl antialiased uppercase text-white table-caption ${app.text}`}>
                        Immersive experiences that <br />deliver
                    </span>
                </section>
            </HeaderStyle> 
        )
    }

}

export default Header; 