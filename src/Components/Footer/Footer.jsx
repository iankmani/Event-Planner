import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div class="container">
         <div class="footer">
         <div class="footer-content">
                <div class="footer-main">
                    <h2>Vee Tech</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, corrupti?</p>
                    <div class="social-links">
                        <a href="#"><i class="fa-brands fa-facebook"></i>< FaFacebook /></a>
                        <a href="#"><i class="fa-brands fa-instagram">< FaInstagram /></i></a>
                        <a href="#"><i class="fa-brands fa-tiktok"></i>< FaTiktok /></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i>< FaTwitter /></a>

                    </div>
                    <div class="links">
                        <p>information</p>
                        <a href="" class="link">Our Company</a>
                        <a href="" class="link">About Us</a>
                        <a href="" class="link">Blog</a>
                    </div>
                    <div class="links">
                        <p>Helful Links</p>
                        <a href="" class="link">Services</a>
                        <a href="" class="link">Support</a>
                        <a href="" class="link">Terms & Conditions</a>
                    </div>
                    <div class="links">
                        <p>Navigation</p>
                        <a href="" class="link">Home</a>
                        <a href="" class="link">About</a>
                        <a href="" class="link">Contact</a>
                    </div>
                </div>
            </div>
            

         </div>
    </div>
  )
}

export default Footer