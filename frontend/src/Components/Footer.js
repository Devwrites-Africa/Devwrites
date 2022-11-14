import React from "react";
import "./Footer.css";
import { 
    FaFacebook, 
    FaInstagram, 
    FaLinkedin, 
    FaTwitter 
} from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer = ()=> {
    return (
        <footer className="footer">
            <div className="footer-items">
                    {/* FIRST CONTAINER HOLDING LOGO AND MEDIA ICONS */}
                <div className="first-footer-container">
                    <img src="./Images/Logo.png" alt="logo" className="footer-logo"/>
                    <p>Devwrites is a virtual technical writing community focused on 
                        helping techies get started with technical writing and API 
                        documentation.
                    </p>
                    <div className="social-icon-container">
                        <FaFacebook className="social-media"/>
                        <FaInstagram className="social-media"/>
                        <FaLinkedin className="social-media"/>
                        <FaTwitter className="social-media"/>
                    </div>
                </div>

                {/* FOOTER LINKS */}
                <div className="footer-link-container">
                    <div className="footer-link">
                        <div className="links footer-home-link">
                        <Link to=''>Home</Link>
                        <p>features</p>
                        <p>features</p>
                        <p>features</p>
                        <p>features</p>
                        </div>

                        <div className="links footer-about-link">
                        <Link to=''>About</Link>
                        <p>Contributors</p>
                        <p>Contributors</p>
                        <p>Contributors</p>
                        <p>Contributors</p>
                        </div>
                        <div className="links footer-blog-link">
                        <Link to=''>Blog</Link>
                        <p>Recent</p>
                        <p>Recent</p>
                        <p>Recent</p>
                        <p>Recent</p>
                        </div>

                        <div className="links footer-programs-link">
                        <Link to=''>Programs</Link>
                        <p>Manifesto</p>
                        <p>Manifesto</p>
                        <p>Manifesto</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-social-icon">
                <FaFacebook className="mobile-social-media"/>
                <FaInstagram className="mobile-social-media"/>
                <FaLinkedin className="mobile-social-media"/>
                <FaTwitter className="mobile-social-media"/>
            </div>
            <p className="all-right-reserved">All Rights Reserved. Devwrites Africa</p>
        </footer>
    )
}

export default Footer