import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../../Component/Navbar'
import { Link } from 'react-router-dom'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import TitleWithDescription from '../../Component/TitleWithDescription ';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Footer from '../../Component/Footer';
const  Informatica = () => {

    const contestData = [
        {
            title: 'Capture the flag',
            lastDate: '20 - 04 - 2023',
            submissionDates: '20th April - 25 April',
        },
        {
            title: 'Code a thon',
            lastDate: '20 - 04 - 2023',
            submissionDates: '20th April - 25 April',
        },
        {
            title: 'Tech Quiz',
            lastDate: '20 - 04 - 2023',
            submissionDates: '20th April - 25 April',
        },
        {
            title: 'Ideathon',
            lastDate: '20 - 04 - 2023',
            submissionDates: '20th April - 25 April',
        },
    ];
    const faqs = [
        {
            que: "Capture the flag?",
            ans: "A Capture the Flag (CTF) event is a cybersecurity competition where participants try to solve a series of challenges that involve hacking, cryptography, forensics, and other skills related to cybersecurity.",
        },
        {
            que: "Code a thon?",
            ans: " Software Development Competition that challenges participants to develop a project or solution in a limited amount of time to a given scenario.The best 3 Solutions will be Shortlisted and provided with prizes.",
        },
        {
            que: "Tech Quiz?",
            ans: "Join our Tech Quiz competition and put your tech knowledge to the test! The event is open to individuals and teams of up to four members, with separate tracks for students and professionals. Get ready to compete, have fun, and win exciting prizes!",
        },
        {
            que: "Ideathon?",
            ans: "Anyone with a tech-based idea is eligible to participate in the event, which exclusively welcomes project ideas related to technology. It's a chance to showcase your passion and creativity in the field of technology and receive recognition for your innovative ideas. Join in and share your ideas with others who share the same passion for technology!",
        },
    ];
    const [currentFaq, setCurrentFaq] = React.useState(faqs);
    const [expand, setExpand] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);

    const handleExpand = () => {
        if (expand) {
            setCurrentFaq(faqs.slice(0, 7));
            setExpand(false);
        } else {
            setCurrentFaq(faqs);
            setExpand(true);
        }
    };

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    backgroundImage: "url(Assets/Informatica.png)",
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
                         Informatica
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
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
                             Informatica
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ py:5, px: 2, bgcolor: '#000212' }}>
                <TitleWithDescription
                    title="About Informatica"
                    description="Informatica is a student-run organization focused on bringing together like-minded individuals interested in computer science and technology. The club aims to provide its members with opportunities to develop their technical skills, participate in coding competitions, network with industry professionals, and learn about emerging trends in the field"
                />
                <Typography
                    gutterBottom
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    sx={{
                        fontSize: { xs: "30px", sm: "35px", md: "32px" },
                        fontWeight: "semibold",
                        marginTop: "-2rem",
                        color: '#847D77',
                        textAlign: 'center',
                        letterSpacing: 2
                    }}
                >"Where Tech Enthusiasts Unite"</Typography>
            </Box>
            <Box sx={{ py: 5, bgcolor: '#000212' }}>
                <TitleWithDescription
                    title="Event Registration"
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 3,
                        padding:4,
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
            <Box sx={{ p: [5, 10], bgcolor: '#000212' }}>
                <TitleWithDescription
                    title="About our Contest" />
                <Box
                    sx={{
                        width: "100%",
                        "& .MuiPaper-root.MuiAccordion-root": {
                            boxShadow: "0px 12px 21px rgb(0 0 0 / 5%)",
                            borderTop: "none",
                            borderRadius: ".4rem",
                            p: 1,
                            bgcolor: "#111C3A",
                            color: "#fff",
                            mb: 2,
                        },
                        "& .MuiPaper-root.MuiAccordion-root.Mui-expanded": {
                            boxShadow: "0px 12px 21px rgb(0 0 0 / 5%)",
                            borderTop: "none",
                            borderRadius: ".4rem",
                            background: `linear-gradient(91.83deg,rgb(221, 36, 118) 0%, rgb(255, 81, 47)  100%)`,
                            color: "#fff",
                            p: 1,
                        },
                        "& .MuiPaper-root.MuiAccordion-root:before": {
                            height: 0,
                        },
                        "& .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded": {
                            color: "#fff",
                        },
                        "& .MuiCollapse-root": {
                            color: "#fff",
                        },
                        "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                            background: "transparent",
                            color: "#fff",
                        },
                        "& .MuiAccordionSummary-expandIconWrapper": {
                            background: "transparent",
                            color: "#fff",
                        },
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                    }}
                    data-aos="zoom-in-up"
                    data-aos-duration="2000"
                >
                    {currentFaq.map((i, k) => (
                        <Accordion
                            key={k}
                            expanded={expanded === k}
                            onChange={handleChange(k)}
                        >
                            <AccordionSummary
                                expandIcon={expanded === k ? <CancelIcon /> : <AddCircleIcon />}
                                aria-controls={`panel1a-content-${k}`}
                                id={`panel1a-header-${k}`}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontSize: { xs: "1rem", xl: "1.2rem" },
                                        fontWeight: 400,
                                    }}
                                >
                                    {i.que}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontSize: { xs: "1rem", xl: "1.2rem" },
                                        fontWeight: 400,
                                        lineHeight: 1.6,
                                        letterSpacing: 0.9
                                    }}
                                >
                                    {i.ans}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
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

export default Informatica
