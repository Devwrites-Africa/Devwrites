import React from "react";
import DividerComponent from "../Components/DividerComponent";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ContributorSlide from "../Components/ContributorSlide";
import Contributors from "../Components/Contributors";
import { Link } from "react-router-dom";
import {  
    FaFacebook, 
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaAngleDown
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

                <div className="features ">
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
                        </div>
                    </div>
                </div> 
            </section>
            <ContributorSlide />
            <Footer />
        </div>
    )
}

export default HomePage
