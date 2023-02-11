import {FaUniversity} from "react-icons/fa";
import Navbar from "./Navbar";
import {motion, delay} from "framer-motion";

import edu from "./assets/images/rut-miit-oTglG1D4hRA-unsplash.jpg";

const Education = () => {
    return (
        <motion.section 
            id='education' 
            className=' h-auto w-full bg-black text-white'
            animate={{width:"100%", transition: {duration: .7}}}
            exit={{x: "100%", transition: {duration: .7}}}
            initial={{width: 0}}
            >
            <Navbar />
            <div className= 'text-white'>
                <div className=' bg-gray-800 p-10'>
                    <FaUniversity className='mx-auto text-6xl mt-5'/>
                    <h1 className=' text-xl font-bold text-center mt-3'>Educational background</h1>
                </div>
                
                <div className=" w-full flex relative xl:min-h-screen flex-col md:flex-row">
                    <div className= " basis-1/2 p-5 md:p-0 text-xl md:self-center mx-auto">
                        <ul className='mt-5 lg:pl-40 p-10 mx-auto text-lg list-disc'>
                            <li className='mt-5'>
                                Pavia university, Italy
                            </li>
                            <li className='mt-5'>
                                GPA: 99/110
                            </li>
                            <li className='mt-5'>
                                M.Sc in computer science
                            </li>
                            <li className='mt-5'>
                                My thesis is about virtualized network functions in cloud computing environment
                            </li>
                        </ul>
                    </div>
                    
                    <div className="h-screen w-full">
                        <img className="object-cover object-center w-full max-h-screen relative md:top-0 md:w-1/2 md:right-0 md:h-full xl:pr-0 md:absolute" width="756" height="1008" loading="lazy" src={edu}/>
                    </div>
                </div>      
            </div>
      </motion.section>
    )
}

export default Education;