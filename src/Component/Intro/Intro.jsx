import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import glassesimoji from '../../img/glassesimoji.png'
import crown from '../../img/crown.png'
import Floatingdiv from '../FloatingDiv/Floatingdiv'
import { motion } from 'framer-motion'
function Intro() {
    const transition = { duration: 2, type: 'spring' }
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi I Am</span>
                    <span>Rohit Ranaware</span>
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempora pariatur maiores quam eius non aliquam corrupti, atque nobis ratione!</span>
                </div>
                <button className="button i-button">Hire Me</button>
                <div className="i-icon">
                    <img src={Github} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Linkedin} alt="" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}
                    src={glassesimoji} alt="" />
                <motion.div
                    initial={{ top: '-4%', left: '74%' }}
                    whileInView={{ left: '68%' }}
                    transition={transition}
                    className='floating-div'
                    style={{ top: '-4%', left: '68%' }}>
                    <Floatingdiv image={crown} txt1='Web' txt2='Developer' />
                </motion.div>
                <motion.div
                    initial={{ left: '9rem', top: '18rem' }}
                    whileInView={{ left: '1.6rem' }}
                    transition={transition}
                    style={{ top: '18rem', left: '1.5rem' }}
                    className='floating-div'

                    >

                    <Floatingdiv image={thumbup} txt1='Python' txt2='Expert' />
                </motion.div>
                {/* blur div */}
                <div className="blur" style={{ background: 'rgb(238 210 255)' }}></div>
                <div className="blur"
                    style={{
                        background: '#C1F5FF',
                        top: '18rem',
                        width: '21rem',
                        height: '6rem',
                        left: '-8rem'

                    }}
                ></div>
            </div>
        </div>
    )
}

export default Intro