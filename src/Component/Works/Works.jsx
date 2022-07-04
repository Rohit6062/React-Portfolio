import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiver from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import {motion} from 'framer-motion'

const Works = () => {
  return (
    <body>
        <div className="works">
        <div className="awesome">
                <span>Works for all this</span>
                <span>Brands & Clients</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit <br /> Dolore amet nemo ex?<br /> Itaque eveniet ea dolorem! Recusandae,<br />Lorem ipsum dolor sit amet. rem. Vero, quas?</span>
                <div className="button s-button">Hire me</div>
                <div className="blur s-blur1" style={{
                    background: '#ABF1FF94'
                }}></div>

            </div>
            {/* right side  */}
            <div className="w-right">
              <motion.div className="w-mainCircle"
              initial={{rotate:45}}
              whileInView={{rotate:0}}
              viewport={{margin:'-40px'}}              
              transition={{duration:3.5,type:'spring'}}
              >
                <div className="w-secCircle">
                  <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                  <img src={Fiver} alt="" />
                </div>
                <div className="w-secCircle">
                  <img src={Amazon} alt="" />
                </div>
                <div className="w-secCircle">
                  <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                  <img src={Facebook} alt="" />
                </div>


              </motion.div>
              <div className="w-backCircle blueCircle"></div>
              <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>

    </body>
  )
}

export default Works