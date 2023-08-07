
import interactive from '../images/desktop/image-interactive.jpg'
import app from '../styles/app.module.scss'
const About = () => {

    return (
        <section className='sm:p-7 mt-12 flex flex-col gap-4 lg:flex-row relative  '>
            <img className='' src={ interactive} alt="man-with-vr-headset" />
            <section className='lg:absolute lg:bottom-5  lg:bg-white lg:p-16 lg:right-[0%] lg:w-1/2 xl:right-[5%] 2xl:right-[10%] '>
                <h1 className={`text-[2rem] leading-none text-center ${app.text} mt-8 lg:text-[3rem] lg:mb-8`}>The leader in interactive VR</h1>
                <p className='text-center text-base text-[#8c8c8c]'>
                    Founded in 2011, Loopstudios has been producing world-class virtual reality projects
                    for some of the best companies around the globe. Our award-winning creations have transformed businesses
                    through digital experiences that bind to their brand. </p>
            </section>

        </section>)
}

export default About