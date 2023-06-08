import React from 'react'
import { FaFacebookF, FaTelegramPlane, FaTwitter } from 'react-icons/fa'
import "./Footer.css"
import footer from "./../../Images/footerImg.svg"
const Footer = () => {
    return (
        <section className="footer">

            <img src={footer} alt="" />
        </section>
    )
}

export default Footer