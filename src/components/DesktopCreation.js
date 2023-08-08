import  { mobile_desktop } from './createdesktop'
import app from '../styles/app.module.scss'
import creation from '../styles/creation.module.scss'
const DesktopCreation = () => {
    return(
        <>
        <div className='flex flex-row justify-between items-center '>
         <h2 className={`text-[3rem] text-center mt-16 mb-4 ${app.text}`}>Our Creations</h2>
        <button className={`h-12 text-black border-black border-2 w-48 mt-4 ${creation.buttonhover}`}>
                <span className="uppercase tracking-[0.25rem] font-bold">See All</span></button>   
        </div>
        
        <section className={`grid grid-cols-4 gap-4 items-center justify-items-center`}>
            {mobile_desktop.map((image) => {
                return(
                    
                <section className={`relative m-4 inline-block hover:text-black ${creation.imagecont}`}>
                    
                <img className='hover:opacity-50 hover:cursor-pointer ' src={image.src} alt="thumbnail-img"/>
                <p className={` ${app.text} text-[2rem] leading-none absolute bottom-8 left-8 text-white w-[60%] uppercase ` }>
                {image.name}
                </p>
                </section>)
            })}
            
        </section>
        </>
        
    )
}

export default DesktopCreation