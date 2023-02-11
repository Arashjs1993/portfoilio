import Navbar from "./Navbar";

import {Link} from "react-router-dom";

import {GiImpactPoint} from "react-icons/gi";
import { useEffect, useState } from 'react';
import {delay, motion} from "framer-motion"; 

import background from "./assets/images/sebastian-svenson-d2w-_1LJioQ-unsplash.jpg";

const Intro = () => {
    const [move, setMove] = useState("false");
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    
    useEffect(() => {
      window.addEventListener('scroll', handleScroll)

      return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <motion.section 
          id-="home" 
          className='h-screen w-full'
          animate={{width:"100%", transition: {duration: .7}}}
          exit={{opacity: 0}}
          >

          <div className='relative flex w-full h-full overflow-hidden'>
              <Navbar />
              <img src={background} className="w-full" style={{transform: `translateY(${offsetY * 0.5}px)`}}/>
              <div className=' backdrop-blur-3xl w-full h-full absolute top-0 left-0 bg-gradient-to-bl from-gray-900 via-gray-800 opacity-60'></div>
              <div className='absolute text-center left-0 top-0 w-full h-full'>
                
                
                <motion.div className='text-white w-full absolute top-40' 
                    initial={{y: 50, scale:0}} 
                    animate={{
                    scale: 1,
                    transition: {type: "tween", duration: .8}
                  }} 
                    onLoad={() => { 
                    setMove(!move)
                  }}
                    exit={{opacity:0}}
                  >
                    <p className='font-bold text-3xl max-auto ml-8 md:text-2xl'>welcome to my page</p>
                </motion.div>
                  
                <motion.div initial="hidden" animate="visible" variants={{
                  hidden: {
                    scale: .5,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: .3,
                      duration: .7
                    }
                  }
                }}>
                  <div className='mt-10 h-full text-center pt-60 p-10'>
                    <h3 className='text-5xl text-white mt-10'>A junior but <span className=' font-bold text-blue-200'>passionate</span> Web developer</h3>
                    
                      <p className='text-3xl mx-auto mt-20 text-white'>About me</p> 

                      <Link to={"/about"}>
                        <motion.a whileHover={{
                          scale: 1,
                          transition: {
                            duration: .9
                          }
                        }}><GiImpactPoint className='text-6xl mx-auto mt-6 text-white hover:text-teal-600' /></motion.a>
                      </Link>
                  </div>
                </motion.div>
              </div>
          </div>
          
        </motion.section>        
    )
}

export default Intro;





