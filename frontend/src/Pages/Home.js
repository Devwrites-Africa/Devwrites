import React from "react";
import DividerComponent from "../Components/DividerComponent";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { FaBookOpen, FaPenNib,  FaPrint} from 'react-icons/fa';

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

            {/* beginning of features section */}

            <section className="features-section">
            <div className="features-container">
            <article className="features-header">
              <div className="features-title">features</div>
              <p>
              Spirit third dry. To you'll. Open a 
              first all bring bearing beast unto fruit was 
              cattle years their open years.</p>

              <p>Spirit third dry. To you'll. Open a 
                first all bring bearing 
                beast unto fruit was cattle years their open years.  </p>
            </article>
              
              <div className="features" >
              <article className="single-feature">
              <span className="feature-icon"><FaPenNib/></span>
                 <h4 className="feature-title">Writing</h4>
                 <p className="feature-paragraph">Fruit behold. Under earth. Upon is gathering first. 
                 He itself. Dominion so sea creepeth. Winged 
                 which light open first saw. Can't i saw above 
                 set lights Forth in, void one.c</p>
             </article>
            <article className="single-feature feature-1">
                <span className="feature-icon"><FaPrint/></span>
                 <h4 className="feature-title">Blogs</h4>
                 <p className="feature-paragraph">Fruit behold. Under earth. Upon is gathering first.
                  He itself. Dominion so sea creepeth. Winged 
                  which light open first saw. Can't i saw above 
                  set lights Forth in, void one.
                 </p>
            </article>
              <article className="single-feature">
              <span className="feature-icon"><FaBookOpen/></span>
                 <h4 className="feature-title">Guidance</h4>
                 <p className="feature-paragraph">Fruit behold. Under earth. Upon is gathering first.
                  He itself. Dominion so sea creepeth. Winged which 
                  light open first saw. Can't i saw above set lights 
                  Forth in, void one.c</p>
            </article>
              <article className="single-feature">
              <span className="feature-icon"><FaBookOpen/></span>
                 <h4 className="feature-title">Guidance</h4>
                 <p className="feature-paragraph">Fruit behold. Under earth. Upon is gathering first. 
                 He itself.
                  Dominion so sea creepeth. Winged which light 
                  open first saw. Can't i saw above set lights 
                  Forth in, void one.c</p>
              </article>
            </div>
            
           </div>
            </section>


            <section className="contributors-section">

            </section>
            <DividerComponent />
            <Footer />
        </div>
    )
}

export default HomePage
