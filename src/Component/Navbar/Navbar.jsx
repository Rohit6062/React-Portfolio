import React from 'react'
import Toggel from '../Toggle/Toggel'
import './Navbar.css'
import {Link} from 'react-scroll'

function Navbar() {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Rohit</div>
                <Toggel/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'><li>Home</li></Link> 
                        <Link spy={true} to='Services' smooth={true}><li>services</li></Link> 
                        <Link spy={true} to='Exprience' smooth={true}><li>Experience</li></Link> 
                        <Link spy={true} to='Portfolio' smooth={true}><li>Portfolio</li></Link> 
                        <Link spy={true} to='Testomonials' smooth={true}><li>Testomonial</li></Link> 
                    </ul>
                </div>
                <button className="button n-button">
                    Contact us
                </button>
            </div>
        </div>
    )
}

export default Navbar