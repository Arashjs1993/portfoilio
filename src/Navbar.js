import {Link} from "react-router-dom";
import {motion} from "framer-motion";

import {
  AiFillLinkedin,
  AiFillGithub
} from "react-icons/ai";

const Navbar = () => {
    return (
        <nav className=' fixed flex justify-around bg-gray-900 p-2 bg-opacity-50 w-full h-10 left-0 z-10'>
                <ul className='text-white flex space-x-3 text-xs ml-2 md:text-md md:font-bold md:space-x-10'>
                    <Link to={"/"}>
                      <a className='hover:text-teal-600 transition delay-250'><motion.li whileHover={{
                        scale: 1.03,
                        transition: {
                          duration: .2
                        }
                      }}>home</motion.li></a>
                    </Link>
                    
                    <Link to={"/education"}>
                      <a className='hover:text-teal-600 transition delay-250'>
                        <motion.li whileHover={{
                        scale: 1.03,
                        transition: {
                          duration: .2
                        }
                        }}>
                          Education 
                        </motion.li>
                      </a>
                    </Link>

                    <Link to={"/skills"}>
                      <a className='hover:text-teal-600 transition delay-250'><motion.li whileHover={{
                        scale: 1.03,
                        transition: {
                          duration: .2
                        }
                      }}>Skills</motion.li></a>
                    </Link>

                    <Link to={"/projects"}>
                      <a className='hover:text-teal-600 transition delay-250'><motion.li whileHover={{
                        scale: 1.03,
                        transition: {
                          duration: .2
                        }
                      }}>Mini projects</motion.li></a>
                    </Link>

                    <Link to={"/languages"}>
                      <a className='hover:text-teal-600 transition delay-250'><motion.li whileHover={{
                        scale: 1.03,
                        transition: {
                          duration: .2
                        }
                      }}>Languages</motion.li></a>
                    </Link>
                    
                    <a href='#'className='hover:text-teal-600 transition delay-250'></a><li>
                  </li>
                  <li className='text-xl flex justify-center gap-3 text-white'>
                    <motion.a href='https://www.linkedin.com/in/arash-javanshour-352305182/' className='hover:text-teal-600' whileHover={{
                      scale: 1.3,
                      transition: {
                        duration: .2
                      }
                    }}><AiFillLinkedin /></motion.a>
                    
                    <motion.a href='https://github.com/Arashjs1993' whileHover={{
                      scale: 1.3,
                      transition: {
                        duration: .2
                      }
                    }}><AiFillGithub className='hover:text-teal-600' /></motion.a>
                  </li>
                  
                </ul>
              </nav>
    )
}

export default Navbar;