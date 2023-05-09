import React from 'react'
import  Foot  from './Footer.module.css'
import { Logo, Facebook, Twitter, Instagram, Linkedln, Youtube } from '../../assets'

const Footer = () => {
  return (
    <div className= {Foot.Container}>
        <div className= {Foot.wrapper}>
                <div>
                    <img src ={Logo} alt = 'logo' />
                    <p>All of the content on comic zone is protected by copyright laws. Copyright laws may make any unlawful use, sharing, or duplicating illegal.</p>
                </div>
                <ul>
                    <li>Privacy</li>
                    <li>Terms of use</li>
                    <li>Help/FAQs</li>

                </ul>
                <div>
                    <p>Follow ComicZone</p>
                    <figure>
                    <img src ={Facebook} alt = 'facebook' />
                    <img src ={Twitter} alt = 'twitter' />
                    <img src ={Instagram} alt = 'instagram' />
                    <img src ={Linkedln} alt = 'linkrdln' />
                    <img src ={Youtube} alt = 'youtube' />
                    </figure>
                </div>
        </div>
        <div className={Foot.White}>
            <span></span>
            <p>Copyright @ 2023</p>
            <span></span>
        </div>
    </div>
  )
}

export default Footer