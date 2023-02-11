import Navbar from "./Navbar";

import {GiSkills} from "react-icons/gi";

import html from "./assets/images/html.png";
import cs from "./assets/images/css.png";
import py from "./assets/images/python.png";
import k from "./assets/images/kubernetes.png"
import jq from "./assets/images/jquery.png"
import doc from "./assets/images/docker.png"
import ne from "./assets/images/nextjs.png"
import fg from "./assets/images/Figma.svg"
import ph from "./assets/images/Photoshop.png"
import ex from "./assets/images/excel.jpeg"
import wo from "./assets/images/word.png"
import tai from "./assets/images/tailwind.png"
import fir from "./assets/images/firebase.png"
import js from "./assets/images/js.jpeg"
import react from "./assets/images/react.png"

import {motion as m} from "framer-motion";


const Education = () => {
    return (
        <m.section 
          id='skills' 
          className='h-screen bg-white text-black'
          animate={{width:"100%", transition: {duration: .7}}}
          exit={{x: "100%", transition: {duration: .7}}}
          initial={{width: 0}}
          >
            <Navbar />
            <div className=' bg-gray-800 p-10  text-center text-white'>
              <GiSkills className='mx-auto text-5xl mt-4'/>
              <h3 className="text-xl font-bold text-center mt-3">Skills & tools</h3>
            </div>

          
            <div className="image-grid">
                    <div className="flex-col">
                      <img src={html}/>
                      <p>HTML</p>
                    </div>
                    <div className="flex-col">
                      <img src={cs}/>
                      <p>CSS</p>
                    </div>
                    <div className="flex-col">
                      <img src={react}/>
                      <p>ReactJs</p> 
                    </div>
                    <div className="flex-col">
                     <img src={py}/>
                     <p>Python</p>
                    </div>
                    <div className="flex-col">
                      <img src={k}/>
                      <p>kubernetes</p>
                    </div>
                    <div className="flex-col">
                      <img objectFit='cover' src={jq}/>
                      <p>jquery</p>
                    </div>
                    <div className="flex-col">
                      <img objectFit='cover' src={doc}/>
                      <p>Docker</p>
                    </div>
                    <div className="flex-col">
                      <img objectFit='cover' src={ne}/>
                      <p>Nextjs</p>
                    </div>
                    <div className="flex-col">
                      <img objectFit='cover' src={fg}/>
                      <p>figma</p>
                    </div>
                    <div className="flex-col">
                      <img objectFit='cover' src={ph}/>
                      <p>Photoshop</p>
                    </div>
                    <div className="flex-col">
                      <img objectFit='cover' src={ex}/>
                      <p>Excel</p>
                    </div>
                    <div className="flex-col">
                      <img objectFit='cover' src={wo}/>
                      <p>Word</p>
                    </div>
                    <div className="flex-col">
                      <img objectFit='cover' src={tai}/>
                      <p>tailwind</p>
                    </div>
                    <div className="flex-col">
                      <img objectFit='cover' src={fir}/>
                      <p>firebase</p>
                    </div>
                    <div className="flex-col">
                      <img objectFit='cover' src={js}/>
                      <p>Javascript</p>
                    </div>
            </div>

            <style jsx>
              {`
                .image-grid {
                  --gap: 10px;
                  --col_num: 4;
                  --row-height: 70px;
                  margin: 35px;

                  box-sizing: border-box;
                  padding: var(--gap);
                  display: grid;
                  grid-template-columns: repeat(var(--col_num), 1fr);
                  grid-auto-rows: var(--row-height);
                  gap: var(--gap)
                }

                .flex-col > img {
                  width: 50px;
                  height: 50px;
                  object-fit: cover;
                  padding: 5px;
                  border: 1px gray dotted;
                } 

                .flex-col > p {
                  font-weight: bold;
                }
                
                @media screen and {max-width: 1024px} {
                  .image-grid {
                    --col_num: 2;
                    --row-height: 200px;
                  }
                }

                @media screen and {min-width: 1024px} {
                  .image-grid img{
                    --row-height: 300px;
                  }

                }
              `}
            </style>
          </m.section>
    )
}

export default Education;