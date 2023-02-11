import Navbar from "./Navbar";
import {RiComputerFill} from "react-icons/ri";
import {motion} from "framer-motion";

import project from "./assets/images/annie-spratt-vGgn0xLdy8s-unsplash.jpg"



const Projects = () => {
    return (
        <section 
          id='projects' 
          className='h-auto w-full'
          animate={{width:"100%", transition: {duration: .7}}}
          exit={{x: "100%", transition: {duration: .7}}}
          initial={{width: 0}}
          >
                <Navbar />
                
              <div className= 'text-black'>
                <div className=' bg-gray-800 p-10 text-white'>
                  <RiComputerFill className='mx-auto text-6xl mt-5'/>
                  <h1 className=' text-xl font-bold text-center mt-3'>My projects and mini projetcs</h1>
                </div>

                <div className=" w-full flex relative xl:min-h-screen flex-col md:flex-row">
                    
                    <div className="h-screen">
                        <img className="object-cover object-center w-full max-h-screen relative md:top-0 md:w-1/2 md:h-full xl:pr-0 md:absolute" width="756" height="1008" loading="lazy" src={project}/>
                    </div>

                    <div className= " basis-1/2 p-10 md:mr-0 text-xl md:self-center ml-auto">
                      <h1 className="text-2xl font-bold">Click on the links below to see online:</h1>
                      <ul className='mt-5 mr-0 leading-10 max-w-xs list-disc'>
                        <motion.li className=" hover:font-bold" whileHover={{
                        scale: 1.05,
                        transition: {
                          duration: .2
                        }
                      }}>
                          <a href='https://github.com/Arashjs1993/airbnb-react'>React mini project</a>
                        </motion.li>
                        <motion.li className=" hover:font-bold" whileHover={{
                        scale: 1.05,
                        transition: {
                          duration: .2
                        }
                      }}>
                          <a href='https://github.com/Arashjs1993/Dilation-Erosion-CV'>Computer vision project</a>
                        </motion.li>

                        <motion.li className=" hover:font-bold" whileHover={{
                        scale: 1.05,
                        transition: {
                          duration: .2
                        }
                      }}>
                          <a href='https://arashjs1993.github.io/tinDog/'>Website template</a>
                        </motion.li>

                        <motion.li className=" hover:font-bold" whileHover={{
                        scale: 1.05,
                        transition: {
                          duration: .2
                        }
                      }}>  
                          <a href='https://github.com/Arashjs1993/drum-kit'>Javascript game</a>
                        </motion.li>

                        <motion.li className=" hover:font-bold" whileHover={{
                        scale: 1.05,
                        transition: {
                          duration: .2
                        }
                      }}>
                          <a href='https://arashjs1993.github.io/simon-game/'>Javascript game</a>
                        </motion.li>

                        <motion.li className=" hover:font-bold" whileHover={{
                        scale: 1.05,
                        transition: {
                          duration: .2
                        }
                      }}>
                          <a href='https://challenge-2cc25.web.app/'>Amazon clone in ReactJs</a>
                        </motion.li>

                        <motion.li className=" hover:font-bold" whileHover={{
                        scale: 1.05,
                        transition: {
                          duration: .2
                        }
                      }}>
                          <a href='https://arashjs1993.github.io/JS-meme/'>Javascript memory game</a>
                        </motion.li>
                      </ul>
                    </div>
                </div>
            </div>
          </section>
    )
}

export default Projects;