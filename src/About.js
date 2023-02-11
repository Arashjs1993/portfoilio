
import {FcAbout} from "react-icons/fc";
import me from "./assets/images/IMG_0494 copy.jpg";

import pdf from "./assets/Curriculum Vitae.pdf"

const About = () => {
    return (
        <section id='about' className='h-auto w-full pb-5 md: p-0 relative'>
            <div>
                <div className=' bg-gray-800 text-white p-10'>
                    <FcAbout className=' text-white mt-5 mx-auto text-6xl'/>
                    <h1 className='text-xl font-bold text-center font-stone-200'>About me</h1>
                </div>
                
                <div className="w-full flex relative xl:min-h-screen flex-col md:flex-row">

                    <div className="h-screen">
                        <img className="object-cover object-center relative w-full max-h-screen md:top-0 md:w-1/2 md:h-full xl:pr-0 md:absolute" width="756" height="1008" loading="lazy" src={me}/>
                    </div>

                    <div className= " basis-1/2 text-xl md:self-center ml-auto">
                        <p className="text-neutrals-50/60 p-20 max-w-prose">
                           I am Arash, I was born on October, 1993. I have been working with computer tools since I started the highschool. It has always been interesting for me to learn
                           newly emerged techs and tools in web development and computer networking fields. During my bachelor and master studies I developed the team working skill and I also 
                           leart how to use commonly used libraries and modules in programming languages like python and javascript. I always like to 
                           embrace new challenges to grow my horizon. 
                        </p>
                        <a href={pdf} download="arash_javanshour_CV" className=' text-white bg-gradient-to-r from-cyan-800 to-teal-900 px-8 py-1 rounded-xl ml-20 hover:text-black transition delay-250'>Download my CV</a>
                    </div>
                </div>
            </div>

        </section>
                
    )
}

export default About;