import {motion} from "framer-motion";
import {
    AiFillLinkedin,
    AiFillInstagram,
    AiFillGithub
  } from "react-icons/ai";

const Footer = () => {
    return (
        <section id='footer' height="200" width="100%" className=' bg-gray-700 text-white w-full'>

            <ul className=" p-20 flex justify-around">
                <li className='text-xl flex justify-center gap-10 text-white'>
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
            
            
        </section>
    )
}

export default Footer;