import styles from '../styles/header.module.scss'
import logo from '../images/logo.svg'
import hamburger from '../images/icon-hamburger.svg'
import app from '../styles/app.module.scss'
const Header = () => {
    return (
        <>
         
        <section className={`${styles.header} p-4 flex flex-col`}>

           <section className='flex justify-between items-center mt-4'>
            <header className={`flex justify-between`}>
            <img src={logo} alt="logo"/>
            </header>
            <nav>
                <img className="aspect-auto lg:hidden" src={hamburger} alt='mobile-hamburger-icon' />
                    <ul className={`flex flex-row gap-4 hidden lg:block ${app.hoverunderline}`}>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Products</li>
                        <li>Support</li>
                    </ul>
            </nav>
            </section>
            
            <section className={`p-4 border-solid border-2 border-white my-auto w-100` }>
                <span className={`text-4xl antialiased uppercase text-white table-caption ${app.text}`}>
                    Immersive experiences that <br/>deliver
                </span>
            </section>
        </section>

        </>
        
    )
}

export default Header; 