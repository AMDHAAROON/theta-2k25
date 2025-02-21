import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Navbar from '.././Component/Navbar';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Footer from '.././Component/Footer';


const Developers = () => {
    const developers = [
        { name: 'Hari haran', role: 'Full Stack Developer', description: 'Expert in React and UI/UX design.', image: './assets/hari.png', profileLink: 'https://linkedin.com/in/johndoe' },
        { name: 'Manoj kumar', role: 'Backend Developer', description: 'Specialist in Node.js ', image:'./assets/aiwrkshop.jpg', profileLink: 'https://github.com/janesmith' },
        { name: 'Manirathnam', role: 'Frontend Developer', description: 'Proficient in frontend development.', image: './assets/mani.png', profileLink: 'https://linkedin.com/in/alicejohnson' },
        { name: 'Jayasurya', role: 'DevOps Engineer', description: 'Experienced in cloud computing and CI/CD pipelines.', image: './assets/surya.png', profileLink: 'https://github.com/bobbrown' },
        { name: 'Harish', role: 'Cybersecurity Specialist', description: 'Passionate about ethical hacking and security analysis.', image: './assets/harish.png', profileLink: 'https://linkedin.com/in/charliewhite' },
        { name: 'Mohamed Haaron', role: 'AI/ML Engineer', description: 'Focused on deep learning and data science applications.', image: './assets/haaroon.jpeg', profileLink: 'https://github.com/emilydavis' }
    ];

    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    backgroundImage: "url(Assets/Logo.png)",
                    backgroundSize: "20%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#0B1121",
                    color: "white",
                    padding: { xs: "30px 1rem", md: "50px 10rem" },
                    height: { xs: "50vh", md: "55vh" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1,
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#0B1121",
                        opacity: 0.85,
                        zIndex: -1,
                    },
                }}
            >
                <Navbar color="#fff" />
                <Box>
                    <Typography
                        sx={{
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: ["20px", "22px", "36px"],
                            my: 1,
                            textAlign: 'center'
                        }}
                    >
                        Our Developers
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'center', pb:5 }}>
                        <Link to="/" style={{ textDecoration: "none" }} ><Typography sx={{ color: "#9A9EA1", fontWeight: "bold", fontSize: '18px' }}>Home</Typography></Link>
                        <ArrowRightAltIcon sx={{ color: "#9A9EA1", fontWeight: "bold", fontSize: '36px' }} />
                        <Typography sx={{ color: "#9A9EA1", fontWeight: "bold", fontSize: '18px' }}>Developers</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ py: 5, bgcolor: '#000212' }}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3, padding: 4 }}>
                    {developers.map((dev, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: { xs: '100%', sm: '90%', md: '30%' },
                                bgcolor: '#E6F3FB',
                                p: 3,
                                border: '3px solid #EF3D4E',
                                borderRadius: '10px',
                                textAlign: 'center',
                                transition: 'transform 0.3s ease, box-shadow 0.5s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0px 0px 103px -25px rgba(125,125,125,1)',
                                },
                            }}
                        >
                            <Box component="img" src={dev.image} alt={dev.name} sx={{ width: '200px', height: '200px', borderRadius: '50%', mb: 2 }} />
                            <Typography sx={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', mb: 1 }}>{dev.name}</Typography>
                            <Typography sx={{ fontSize: '1.1rem', color: '#333', fontWeight: 600, mb: 2.5 }}>{dev.role}</Typography>
                            <Typography sx={{ fontSize: '1.3rem', color: '#9C79A1', fontWeight:700, mb: 3 }}>{dev.description}</Typography>
                            <Button
                                variant="contained"
                                href={dev.profileLink}
                                target="_blank"
                                sx={{
                                    background: `linear-gradient(91.83deg, rgb(255, 81, 47) 0%, rgb(221, 36, 118) 100%)`,
                                    width: '80%',
                                    textTransform: "none",
                                    borderRadius: "50px",
                                    fontSize: "1rem",
                                    px: [4],
                                    color: "#fff",
                                    border: "2px solid transparent",
                                    '&:hover': {
                                        background: "transparent",
                                        border: "2px solid #EF3D4E",
                                        color: '#EF3D4E'
                                    },
                                }}
                            >
                                View Profile
                            </Button>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box>
                <Footer />
            </Box>
        </>
    );
};

export default Developers;
