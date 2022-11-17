import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import DividerComponent from "../Components/DividerComponent";
import { Box, Stack, Typography } from "@mui/material";
import { BsDash } from "react-icons/bs";
import "./About.css";

const About = () => {
    return (
        <>
            <div className="about-page">
                <Navbar />
                <div className="header">
                    <DividerComponent />
                    <header className="header-content">
                        <div className="content">
                            <Typography
                                variant="h1"
                                sx={{
                                    fontweight: 800,
                                    fontSize: "2rem",
                                    color: "#F5F5F5",
                                    paddingLeft: { sm: "2.5rem", xs: 0 },
                                    fontFamily: "Inter",
                                    textAlign: "center",
                                }}
                            >
                                About Us
                            </Typography>
                        </div>
                    </header>
                    <DividerComponent />
                </div>
                <section className="about-content">
                    <Stack>
                        <Stack
                            direction={{ xs: "column", sm: "row" }}
                            justifyContent="center"
                            alignItems="center"
                            spacing={{ sm: 8, xs: 2 }}
                        >
                            <Box
                                component="div"
                                sx={{
                                    width: { xs: "100%", sm: "350px" },
                                    height: 300,
                                    background: `url("../images/friends.png")`,
                                    backgroundRepeat: "no-repeat",
                                    backgroudPosition: "center",
                                    backgroundSize: "cover",
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                }}
                            ></Box>
                            <Box
                                component="div"
                                sx={{
                                    width: { xs: "100%", sm: "350px" },
                                    padding: "2rem 0",
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: "20px",
                                    }}
                                >
                                    About
                                </Typography>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        paddingTop: "5px",
                                        fontWeight: 800,
                                        fontSize: "2rem",
                                    }}
                                >
                                    Devwrites Africa
                                </Typography>
                                <Typography
                                    variant="span"
                                    sx={{
                                        display: "block",
                                        padding: "1.4rem 0",
                                        lineHeight: 1.2,
                                        fontStyle: "italic",
                                        fontWeight: 500,
                                        fontSize: "20px",
                                    }}
                                >
                                    Devwrites is a virtual technical writing
                                    community focused on helping techies get
                                    started with technical writing and API
                                    documentation.
                                </Typography>
                                <div className="what-we-do">
                                    <ul>
                                        <li>
                                            <BsDash />
                                            Virtual
                                        </li>
                                        <li>
                                            <BsDash />
                                            Focused on helping techies
                                        </li>
                                        <li>
                                            <BsDash />
                                            We create in-dept technical articles
                                        </li>
                                        <li>
                                            <BsDash />
                                            We teach API documentation
                                        </li>
                                    </ul>
                                </div>
                            </Box>
                        </Stack>
                        <Stack
                            direction={{ xs: "column", sm: "row" }}
                            justifyContent="center"
                            alignItems="center"
                            sx={{ marginTop: "3rem" }}
                        >
                            <Box
                                component="div"
                                sx={{
                                    width: { xs: "100%", sm: "350px" },
                                    height: 350,
                                    background: `url("../images/man-and-woman.png")`,
                                    backgroundRepeat: "no-repeat",
                                    backgroudPosition: "center",
                                    backgroundSize: "cover",
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    zIndex: 100,
                                    marginRight: { xs: 0, sm: "-100px" },
                                }}
                                className="image-box"
                            ></Box>
                            <Box
                                component="div"
                                sx={{
                                    width: { xs: "100%", sm: "500px" },
                                    height: "auto",
                                    minHeight: "400px",
                                    background: "#2DB68F",
                                    color: "#FFFFFF",
                                    borderRadius: "20px",
                                    padding: "40px",
                                }}
                            >
                                <div className="overlay-content">
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontSize: "30px",
                                            fontWeight: 800,
                                        }}
                                        className="overlay-heading"
                                    >
                                        Our Mission
                                    </Typography>
                                    <Typography
                                        variant="span"
                                        sx={{
                                            display: "inline-block",
                                            marginTop: "20px",
                                            fontSize: "20px",
                                            fontWeight: 400,
                                            fontStyle: "italic",
                                            lineHeight: 1.4,
                                        }}
                                        className="overlay-desc"
                                    >
                                        Nihil, aperiam, ad molestiae ut enim
                                        reprehenderit rem repudiandae ducimus
                                        dolorum obcaecati rerum accusamus
                                        provident atque eos cum. Reiciendis,
                                        modi, sint, vel, eligendi veniam esse
                                        qui quasi voluptas recusandae eum
                                        accusamus error animi expedita amet rem
                                        ad quos.
                                    </Typography>
                                </div>
                            </Box>
                        </Stack>
                    </Stack>
                </section>
                <Footer />
            </div>
        </>
    );
};

export default About;
