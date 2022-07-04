import React from 'react'
import './services.css'
import heartemoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './Resume.pdf'
import {motion} from 'framer-motion'

const Services = () => {
    const transition={duration:1,type:'spring'}
    return (
        <div className="services" id='Services'>
            {/* left side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore amet nemo ex? Itaque eveniet ea dolorem! Recusandae, rem. Vero, quas?</span>
                <a href={Resume}>
                <button className='button s-button '>Download CV</button>
                </a>
                <div className="blur s-blur1" style={{
                    background: '#ABF1FF94'
                }}></div>

            </div>
            {/* right side */}
            <div className="cards">
                <motion.div
                whileInView={{left:'9rem'}}
                initial={{left:'25%'}}
                transition={transition}
                 style={{left: '9rem', top:'-5rem'}}>
                    <Card
                        emoji={heartemoji}
                        heading={'Design'}
                        detail={'Figma,Sketch,Adobe,Photoshop,Adobe-xd,css3'}
                    />
                </motion.div>
                <div style={{top:'10rem',left:'-8rem'}}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={'Html,Css,JavaScript,Reacct Html,Css,JavaScript,Reacct'}
                    
                    />
                </div>
                <motion.div 
                initial={{left:'15rem'}}
                whileInView={{left:'9rem'}}
                transition={transition}
                style={{top:'15rem',left:'9rem'}}>

                    <Card 
                        emoji={Humble}
                        heading={'UI/UX'}
                        detail={'kasgdiy hebkjfwe cjmngkfndksgHtml,Css,JavaScript,Reacct0'}
                    
                    />
                </motion.div>
                <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>
            </div>
        </div>
    )
}

export default Services