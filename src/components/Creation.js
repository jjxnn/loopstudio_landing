import mobile_img from "./createmobile";

import app from '../styles/app.module.scss'
import creation from '../styles/creation.module.scss'
const Creation = () => {

    return(
        <section className="p-2 flex flex-col items-center">
            {mobile_img.map((image) => {
                return(
                <section className="relative m-4">
                <img src={image.src} alt="thumbnail-img"/>
                <p className={` ${app.text} text-[1.5rem] leading-none absolute bottom-4 left-4 text-white table-caption w-2/5 uppercase` }>
                {image.name}
                </p>
                </section>)
            })}
            <button className={`p-3 text-black border-black border-2 w-48 mt-4 ${creation.buttonhover}`}>
                <span className="uppercase tracking-[0.25rem] font-bold">See All</span></button>
        </section>
    )
}

export default Creation; 