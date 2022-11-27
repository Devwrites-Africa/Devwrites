import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Testimonial from "../Components/Testimonial";
import { Link } from "react-router-dom";
import {  
    FaFacebook, 
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaAngleDown,
    FaAngleRight
} from 'react-icons/fa';
import "./Home.css";

const HomePage = ()=> {
    return (
        <div className="home-page">
            <Navbar />
            <section className="landing-page">
                <div className="text-container">
                    <h1>Devwrites Africa</h1>
                    <h2>
                        Home for <span className="colored-text">tech <br /> writers</span> and <span className="colored-text">readers</span>
                    </h2>
                    <p>
                        Blog with us, own your content and <br /> share your ideas with the world.
                    </p>
                    <div className="btn-container">
                        <Link 
                            to='' 
                            className="landing-page-btn get-started"
                        >
                            Get Started
                        </Link>
                        <Link 
                            to='' 
                            className="landing-page-btn contact-us"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
                <div className="landing-image-container">
                <img 
                    src="../Images/landing-image.png" 
                    className="landing-page-image"
                    alt=""
                />
                </div>
                <FaAngleDown className="angledown" />
            </section>
            <section className="features-section">
                <div className="features-heading">
                    <h1>Identify With Us</h1>
                    <p>Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati rerum accusamus provident atque eos cum. Reiciendis, modi, sint, velma.
                    </p>
                </div>
                <div className="features ">
                    <div className="features-image-container">
                        <img src='../images/colleagues.png' alt='Colleagues Working Together' />
                    </div>
                    <div className="features-text-container">
                        <h1>Guidance</h1>
                        <p>Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati rerum accusamus provident atque eos cum. Reiciendis, modi, sint, velma.
                        </p>
                    </div>
                </div> 
                <div className="features reversed">
                    <div className="features-image-container reversed-image">
                        <img src='../images/afro-americans.png' alt='Afro Americans Working Together' />
                    </div>
                    <div className="features-text-container">
                        <h1>Technical Writing Community</h1>
                        <p>Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati rerum accusamus provident atque eos cum. Reiciendis, modi, sint, velma.
                        </p>
                    </div>
                    
                </div> 
                <div className="features ">
                    <div className="features-image-container">
                        <img src='../images/business-executives.png' alt='Business Executives' />
                    </div>
                    <div className="features-text-container">
                        <h1>Attend Our Programs</h1>
                        <p>Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati rerum accusamus provident atque eos cum. Reiciendis, modi, sint, velma.
                        </p>
                    </div>  
                </div>

                <div className="features reversed">
                    <div className="features-image-container reversed-image">
                        <img src='../images/afro-americans.png' alt='Afro Americans Working Together' />
                    </div>
                    <div className="features-text-container">
                        <h1>Share Your Work</h1>
                        <p>Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati rerum accusamus provident atque eos cum. Reiciendis, modi, sint, velma.
                        </p>
                    </div>
                </div>

                <div className="features features-social-media">
                    <div className="features-image-container">
                        <img src='../images/business-executives.png' alt='Business Executives' />
                    </div>
                    <div className="features-text-container">
                        <h1>Follow Us on Social Media</h1>
                        <p>Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati rerum accusamus provident atque eos cum. Reiciendis, modi, sint, velma.
                        </p>
                        <div className="home-social-icons">
                            <FaFacebook className="social-icon" />
                            <FaInstagram className="social-icon" />
                            <FaLinkedin className="social-icon" />
                            <FaTwitter className="social-icon" />
                            <FaAngleRight className="social-icon angle-right" />
                        </div>
                    </div>
                </div> 
            </section>
            <section className="illustration-image-section">
                <img src='./Images/magic_illustration.png' alt='Magic Illustration' className="illustration-img" />
                <div className='illustration-text'>
                    <p>Interested in technical writing? It’s not too late, you can start today, and remember it’s never too late to learn a new skill!</p>
                </div>
            </section>
            <section className='testimonial-section'>
                <Testimonial />
                <div className="subscribe-container">
                    <h1>Don't want to miss anything?</h1>
                    <p>Get weekly update on the latest blogs, programs and tips right in your mailbox</p>
                    <div className="subsribe-input">
                        <input type='email' placeholder='Email' className="subscribe-email" />
                        <input type='submit' className="subscribe-btn" value='Submit' />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default HomePage
