import React from "react";
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
                        <Link to=''>Home</Link>
                        <Link to=''>About</Link>
                        <Link to=''>Blog</Link>
                        <Link to=''>Programs</Link>

                        <p>features</p>
                        <p>features</p>
                        <p>features</p>
                        <p>features</p>

                        <p>Contributors</p>
                        <p>Contributors</p>
                        <p>Contributors</p>
                        <p>Contributors</p>

                        <p>Recent</p>
                        <p>Recent</p>
                        <p>Recent</p>
                        <p>Recent</p>

                        <p>Manifesto</p>
                        <p>Manifesto</p>
                        <p>Manifesto</p>
                    </div>
                </div>
            </div>
            <p className="all-right-reserved">All Rights Reserved. Devwrites Africa</p>
        </footer>
    )
}

export default Footer