import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Box, Stack, Typography } from "@mui/material";
import "./About.css";
import BorderComponent from "../Components/BorderComponent";

const About = () => {
    return (
        <>
            <div className="about-page">
                <nav>
                    <Navbar />
                </nav>
                <main>
                    <div className="header">
                        <header className="header-content">
                            <div className="content">
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontWeight: 800,
                                        fontSize: { sm: "70px", xs: "20px" },
                                        paddingLeft: "3.5rem",
                                        fontFamily: "Inter",
                                        color: "#0D3767",
                                        marginTop: "2rem",
                                    }}
                                >
                                    About Us
                                    <BorderComponent />
                                </Typography>
                                <img
                                    src="../images/vector-line.png"
                                    alt="about-header-img"
                                    loading="lazy"
                                />
                            </div>
                        </header>
                    </div>
                    <section className="about-content">
                        <Stack>
                            <Stack alignItems="center">
                                <Box
                                    component="div"
                                    className="image__box"
                                    sx={{
                                        width: {
                                            xs: "100%",
                                            sm: "80%",
                                        },
                                        height: { sm: "500px", xs: "400px" },
                                        borderRadius: "30px",
                                        overflow: "auto",
                                        background: `url("../images/friends.png")`,
                                        backgroundRepeat: "no-repeat",
                                        backgroudPosition: "center",
                                        backgroundSize: "cover",
                                    }}
                                ></Box>
                                <Box
                                    component="div"
                                    className="about-box"
                                    sx={{
                                        width: { sm: "70%", xs: "100%" },
                                        padding: "3rem ",
                                        backgroundColor: "#0D3767",
                                        color: "#fff",
                                        textAlign: "center",
                                        borderRadius: "20px",
                                        marginTop: { sm: "-150px", xs: "0px" },
                                    }}
                                >
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontWeight: 800,
                                            fontFamily: "Inter",
                                            fontSize: {
                                                sm: "2rem",
                                                xs: "1.5rem",
                                            },
                                        }}
                                    >
                                        Devwrites Africa
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            display: "inline-block",
                                            margin: "1.5rem auto 0 auto",
                                            lineHeight: 1.2,
                                            fontStyle: "italic",
                                            fontWeight: 500,
                                            fontSize: "17px",
                                            width: { sm: "50%", xs: "100%" },
                                            textAlign: "center",
                                            fontFamily: "Futura Bk BT",
                                        }}
                                    >
                                        Devwrites is a virtual technical writing
                                        community focused on helping techies get
                                        started with technical writing and API
                                        documentation.
                                    </Typography>
                                </Box>
                            </Stack>
                            <Stack
                                alignItems="center"
                                sx={{
                                    padding: "3rem 0",
                                }}
                            >
                                <Box
                                    component="div"
                                    className="our-values__box"
                                    sx={{
                                        width: { sm: "70%", xs: "100%" },
                                        backgroundColor: "#0D3767",
                                        borderRadius: "20px",
                                        padding: "2rem",
                                        marginLeft: {
                                            sm: "35rem",
                                            md: "0rem",
                                            xs: "0rem",
                                        },
                                        display: "flex",
                                        alignItems: "center",
                                        flexDirection: {
                                            sm: "row",
                                            xs: "column",
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            width: "150px",
                                            fontFamily: "Inter",
                                            fontStyle: "normal",
                                            fontWeight: 800,
                                            fontSize: "30px",
                                            color: "#F5F5F5",
                                            alignSelf: "flex-start",
                                            margin: "0 2rem 2rem 0",
                                        }}
                                    >
                                        Our Values
                                        <BorderComponent />
                                    </Typography>
                                    <Stack
                                        direction="row"
                                        spacing={{ xs: 4, sm: 8, md: 4 }}
                                        sx={{ color: "#f5f5f5" }}
                                    >
                                        <Stack>
                                            <img
                                                src="../images/Technical-growth.png"
                                                alt="technical-growth"
                                                className="our-values__img"
                                            />
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontFamily: "Futura Bk BT",
                                                    fontStyle: "italic",
                                                    fontWeight: 400,
                                                    fontsize: "40px",
                                                    lineHeight: {
                                                        sm: "48px",
                                                        xs: "20px",
                                                    },
                                                }}
                                            >
                                                Technical Growth
                                            </Typography>
                                        </Stack>
                                        <Stack>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontFamily: "Futura Bk BT",
                                                    fontStyle: "italic",
                                                    fontWeight: 400,
                                                    fontsize: "40px",
                                                    textAlign: "center",
                                                    lineHeight: "30px",
                                                }}
                                            >
                                                Guidance
                                            </Typography>
                                            <img
                                                src="../images/Tuition.png"
                                                alt="guidance"
                                                className="our-values__img"
                                            />
                                        </Stack>
                                        <Stack sx={{}}>
                                            <img
                                                src="../images/Teamwork.png"
                                                alt="teamwork"
                                                className="our-values__img"
                                            />
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontFamily: "Futura Bk BT",
                                                    fontStyle: "italic",
                                                    fontWeight: 400,
                                                    fontsize: "40px",
                                                    textAlign: "center",
                                                    lineHeight: "48px",
                                                }}
                                            >
                                                Teamwork
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Stack>
                            <Stack
                                direction={{ xs: "column", sm: "row" }}
                                justifyContent="center"
                                alignItems="center"
                                sx={{ margin: "3rem 0" }}
                            >
                                <Box
                                    component="div"
                                    sx={{
                                        width: "500px",
                                        height: "350px",
                                        background: `url("../images/man-and-woman.png")`,
                                        backgroundRepeat: "no-repeat",
                                        backgroudPosition: "center",
                                        backgroundSize: "cover",
                                        borderRadius: "20px",
                                        overflow: "hidden",
                                        zIndex: 10,
                                        marginRight: { xs: 0, sm: "-100px" },
                                    }}
                                    className="image-box"
                                ></Box>
                                <Box
                                    component="div"
                                    sx={{
                                        width: "500px",
                                        height: "400px",
                                        minHeight: "400px",
                                        backgroundColor: "#0D3767",
                                        color: "#FFFFFF",
                                        borderRadius: "20px",
                                        padding: "40px",
                                        overflow: "hidden",
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
                                            variant="body1"
                                            sx={{
                                                display: "inline-block",
                                                marginTop: "20px",
                                                fontSize: "18px",
                                                fontWeight: 400,
                                                fontStyle: "italic",
                                                lineHeight: 1.3,
                                                fontFamily: "Futura Bk BT",
                                            }}
                                            className="overlay-desc"
                                        >
                                            Nihil, aperiam, ad molestiae ut enim
                                            reprehenderit rem repudiandae
                                            ducimus dolorum obcaecati rerum
                                            accusamus provident atque eos cum.
                                            Reiciendis, modi, sint, vel,
                                            eligendi veniam esse qui quasi
                                            voluptas recusandae eum accusamus
                                            error animi expedita amet rem ad
                                            quos.
                                        </Typography>
                                    </div>
                                </Box>
                            </Stack>
                            <Stack alignItems="center">
                                <Box
                                    component="div"
                                    sx={{
                                        width: { sm: "80%", xs: "100%" },
                                        height: "500px",
                                        borderRadius: "20px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        overflow: "hidden",
                                        margin: "3rem 0",
                                        background: `url("../images/unsplash-image.png")`,
                                        backgroundRepeat: "no-repeat",
                                        backgroudPosition: "center",
                                        backgroundSize: "cover",
                                    }}
                                    className="image__box"
                                >
                                    <Box
                                        component="div"
                                        sx={{
                                            width: { sm: "60%", xs: "100%" },
                                            height: "200px",
                                            background:
                                                "linear-gradient(180deg, rgba(21, 21, 21, 0.47) 0%, rgba(0, 0, 0, 0.78) 100%)",
                                            backdropFilter: "blur(11.5px)",
                                            borderRadius: "20px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            flexDirection: "column",
                                            padding: "2rem",
                                            textAlign: "center",
                                        }}
                                    >
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontFamily: "Futura Bk BT",
                                                fontStyle: "italic",
                                                fontWeight: 400,
                                                fontSize: "20px",
                                                lineHeight: "25px",
                                                color: "#FFFFFF",
                                            }}
                                        >
                                            Now you know about us. <br />
                                            We’d love to hear from you or better
                                            still
                                            <br />
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: "#2DB68F",
                                                    display: "inline-block",
                                                    marginTop: "20px",
                                                    fontStyle: "normal",
                                                    fontFamily: "Inter",
                                                }}
                                            >
                                                Get Started
                                            </Typography>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Stack>
                        </Stack>
                    </section>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
};

export default About;
