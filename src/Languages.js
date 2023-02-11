import Navbar from "./Navbar";

import {FaLanguage} from "react-icons/fa";

import lang from "./assets/images/david-ballew-yRRTd31I6VM-unsplash.jpg"

import {motion as m} from "framer-motion";

const Languages = () => {
    return (
        <m.section 
          id='language' className='bg-black text-white w-full h-auto'
          animate={{width:"100%", transition: {duration: .7}}}
          exit={{x: "100%", transition: {duration: .7}}}
          initial={{width: 0}}
        >
            <Navbar />
            <div className= 'text-white'>
              <div  className=' bg-gray-800 p-10 text-white'> 
                <FaLanguage className='mx-auto text-6xl mt-5'/>
                <h1 className='text-xl font-bold text-center mt-3'>Language skills</h1>
              </div>

              <div className=" w-full flex relative xl:min-h-screen flex-col md:flex-row">
                    <div className= " basis-1/2 p-5 md:p-0 text-xl md:self-center mx-auto">
                      <ul className='mt-5 lg:pl-40 p-10 mx-auto text-lg list-disc'>
                        <li>Native: Turkish, Persian</li>
                        <li>English: Fluent (C1)</li>
                        <li>Italian (B1)</li>
                      </ul>
                    </div>
                    
                    <div className="h-screen w-full">
                        <img className="object-cover object-center w-full max-h-screen relative md:top-0 md:w-1/2 md:right-0 md:h-full xl:pr-0 md:absolute" width="756" height="1008" loading="lazy" src={lang}/>
                    </div>
                </div> 
            </div>
        </m.section>
    )
}

export default Languages;