import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Typography } from "@mui/material";
import BorderComponent from "../Components/BorderComponent";
import "./About.css";

const About = () => {
    return (
        <div className="page">
            <div className="about-page">
                <nav>
                    <Navbar />
                </nav>
                <main>
                    <div className="hero-header">
                        <div className="hero-header-content">
                            <div className="hero-content">
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontWeight: 800,
                                        fontSize: { sm: "50px", xs: "20px" },
                                        paddingLeft: "4rem",
                                        fontFamily: "Inter",
                                        color: "#0D3767",
                                        marginTop: "2rem",
                                        width: "100%",
                                    }}
                                    className="hero-content-heading"
                                >
                                    About Us
                                    <BorderComponent />
                                </Typography>
                                <img
                                    src="../images/vector-line.png"
                                    alt="hero-header-img"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="about-content">
                        <section className="who-we-are">
                            <div className="image__box"></div>
                            <div className="about-box">
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: 800,
                                        fontFamily: "Inter",
                                        fontSize: "1.9rem",
                                    }}
                                >
                                    Devwrites Africa
                                </Typography>
                                <p>
                                    Devwrites is a virtual technical writing
                                    community focused on helping techies get
                                    started with technical writing and API
                                    documentation.
                                </p>
                            </div>
                        </section>
                        <section className="our-values-container">
                            <div className="our-values-container__box">
                                <Typography
                                    variant="h4"
                                    sx={{
                                        width: "250px",
                                        fontFamily: "Inter",
                                        fontStyle: "normal",
                                        fontWeight: 800,
                                        fontSize: "30px",
                                        color: "#F5F5F5",
                                        alignSelf: "flex-start",
                                        margin: "0 2rem 2rem 0",
                                    }}
                                >
                                    Our <br /> Values
                                    <BorderComponent />
                                </Typography>
                                <div className="our-values">
                                    <div className="our-values-value value-1">
                                        <img
                                            src="../images/Technical-growth.png"
                                            alt="technical-growth"
                                            loading="lazy"
                                        />
                                        <p>Technical Growth</p>
                                    </div>
                                    <div className="our-values-value">
                                        <p>Guidance</p>
                                        <img
                                            src="../images/Tuition.png"
                                            alt="guidance"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="our-values-value">
                                        <img
                                            src="../images/Teamwork.png"
                                            alt="teamwork"
                                            loading="lazy"
                                        />
                                        <p>Teamwork</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="our-mission-container">
                            <div className="our-mission-imagebox"></div>
                            <div className="our-mission-content">
                                <div className="our-mission-overlay-content">
                                    <h3>Our Mission</h3>
                                    <p>
                                        Nihil, aperiam, ad molestiae ut enim
                                        reprehenderit rem repudiandae ducimus
                                        dolorum obcaecati rerum accusamus
                                        provident atque eos cum. Reiciendis,
                                        modi, sint, vel, eligendi veniam esse
                                        qui quasi voluptas recusandae eum
                                        accusamus error animi expedita amet rem
                                        ad quos. accusamus provident atque eos
                                        cum. Reiciendis, modi, sint, vel,
                                        eligendi veniam esse qui quasi voluptas
                                        recusandae eum accusamus error animi
                                        expedita amet rem ad quos.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section className="get-started-container">
                            <div className="get-started-imagebox">
                                <div className="get-started-content">
                                    <p>
                                        Now you know about us. <br />
                                        We’d love to hear from you or better
                                        still
                                        <br />
                                        <span>Get Started</span>
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default About;
