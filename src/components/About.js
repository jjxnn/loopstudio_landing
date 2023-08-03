
import interactive from '../images/desktop/image-interactive.jpg'
import app from '../styles/app.module.scss'
const About = () => {

    return (
        <section className='p-7 mt-12 flex flex-col gap-4 '>
            <img src={interactive} alt="man-with-vr-headset" />
            <h1 className={`text-[2rem] leading-none text-center ${app.text} mt-8`}>The leader in interactive VR</h1>
            <p className='text-center text-base text-[#8c8c8c]'>
                Founded in 2011, Loopstudios has been producing world-class virtual reality projects 
                for some of the best companies around the globe. Our award-winning creations have transformed businesses
                through digital experiences that bind to their brand. </p>
        </section>)
}

export default About