import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../../Component/Navbar'
import { Link } from 'react-router-dom'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Footer from '../../Component/Footer';
import EventNavbar from '../../Component/EventNavbar';
const Day2 = () => {

    const contestData = [
        {
            title: 'Short Film Contest Registration',
            lastDate: '20 - 04 - 2023',
            submissionDates: '20th April - 25 April',
        },
        {
            title: 'Mobile Photography Contest',
            lastDate: '20 - 04 - 2023',
            submissionDates: '20th April - 25 April',
        },
        {
            title: 'AD Film Contest',
            lastDate: '20 - 04 - 2023',
            submissionDates: '20th April - 25 April',
        },
        {
            title: 'MashUp Contest',
            lastDate: '20 - 04 - 2023',
            submissionDates: '20th April - 25 April',
        },
        {
            title: 'Digital Camera Photography Contest',
            lastDate: '20 - 04 - 2023',
            submissionDates: '20th April - 25 April',
        },
        {
            title: 'On spot Photography Contest',
            lastDate: '20 - 04 - 2023',
            submissionDates: '20th April - 25 April',
        },
    ];
    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    backgroundImage: "url(Assets/Emulsion.png)",
                    backgroundSize: "50%",
                    backgroundPosition: "center",
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
                       Day 2 Events
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'center',pb:5 }}>
                        <Link to="/" style={{ textDecoration: "none" }} ><Typography
                            sx={{
                                color: "#9A9EA1",
                                fontWeight: "bold",
                                fontSize: '18px',
                            }}
                        >
                            Home
                        </Typography></Link>
                        <ArrowRightAltIcon sx={{
                            color: "#9A9EA1",
                            fontWeight: "bold",
                            fontSize: '36px',
                        }} />
                        <Typography
                            sx={{
                                color: "#9A9EA1",
                                fontWeight: "bold",
                                fontSize: '18px',
                            }}
                        >
                           Day 2 Events
                        </Typography>
                    </Box>
                    <EventNavbar />
                </Box>
            </Box>
            <Box sx={{ py: 5, bgcolor: '#000212' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 3,
                        padding: 4,
                    }}
                >
                    {contestData.map((contest, index) => (
                        <Box
                            key={index}
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay={`${100 * index}`}
                            sx={{
                                width: { xs: '100%', sm: '90%', md: '30%' },
                                height: 'auto',
                                bgcolor: '#E6F3FB',
                                gap: 2,
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

                            <Typography
                                sx={{
                                    fontSize: '1.2rem',
                                    fontWeight: 'bold',
                                    color: '#333',
                                    mb: 1
                                }}
                            >
                                {contest.title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '1.1rem',
                                    color: '#333',
                                    fontWeight: 600,
                                    letterSpacing: 0.8,
                                    mb: 2.5
                                }}
                            >
                                Last Date for Registration:<br /> {contest.lastDate}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '1.1rem',
                                    color: '#9C79A1',
                                    letterSpacing: 0.8,
                                    mb: 3,
                                }}
                            >
                                Submission dates: {contest.submissionDates}
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    background: `linear-gradient(91.83deg, rgb(255, 81, 47) 0%, rgb(221, 36, 118) 100%)`,
                                    textTransform: "none",
                                    borderRadius: "50px",
                                    fontSize: "1rem",
                                    px: [4],
                                    color: "#fff",
                                    border: "2px solid transparent",
                                    "&:hover": {
                                        background: "transparent",
                                        border: "2px solid #EF3D4E",
                                        color: '#EF3D4E'
                                    },
                                }}
                            >
                                Register Now
                            </Button>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box sx={{ bgcolor: "#000212" }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: "center", py: 5 }}>
                    <Divider
                        variant="middle"
                        component="li"
                        sx={{
                            borderColor: '#282828',
                            width: '92%',
                            position: 'relative',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'scaleY(1.1)',
                            },
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                width: '30%',
                                height: '2px',
                                backgroundColor: '#FFD700',
                                top: '50%',
                                left: '0',
                                transform: 'translateY(-50%)',
                                transition: 'width 0.3s ease',
                            },
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                width: '30%',
                                height: '2px',
                                backgroundColor: '#FFD700',
                                top: '50%',
                                right: '0',
                                transform: 'translateY(-50%)',
                                transition: 'width 0.3s ease',
                            },
                            '&:hover::before, &:hover::after': {
                                width: '40%',
                            },
                        }}
                    />
                </Box>
            </Box>
            <Box>
                <Footer />
            </Box>
        </>
    )
}

export default Day2
