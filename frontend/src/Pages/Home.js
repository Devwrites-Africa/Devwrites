import React from "react";
import DividerComponent from "../Components/DividerComponent";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Contributors from "../Components/Contributors";
import { Link } from "react-router-dom";
import "./Home.css";

const HomePage = ()=> {
    return (
        <div className="home-page">
            <Navbar />
            <DividerComponent />
            <section className="landing-page">
                <div className="text-container">
                    <h1>
                        <span className="colored-text">Home </span>for tech writers <br /> and <span className="colored-text">readers</span>
                    </h1>

                    <p>
                        Blog with us, own your content and <br /> share your ideas with the world.
                    </p>

                    <Link 
                        to='' 
                        className="get-started-link"
                    >
                        Get Started
                    </Link>
                </div>
                <img 
                    src="../images/Ellipse-desktop.png" 
                    className="ellipse-desktop"
                />
                <img 
                    src="../images/Ellipse-mobile.png" 
                    className="ellipse-mobile"
                />
                <img 
                    src="../images/young-man.png" 
                    alt="Male Writer"
                    className="writers male-writer"
                />
                <img 
                    src="../images/young-woman.png" 
                    alt="Female Writer"
                    className="writers female-writer"
                />
            </section>

            <section className="features-section">

            </section>

            <DividerComponent />
            <Contributors />
            <DividerComponent />
            <Footer />
        </div>
    )
}

export default HomePage
