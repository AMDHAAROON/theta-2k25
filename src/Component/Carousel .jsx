import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Typography, IconButton, Container } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { keyframes } from "@emotion/react";
import { slides } from "../utility/data";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
const AUTO_PLAY_INTERVAL = 7000;
const TRANSITION_DURATION = 3000;

const progressAnimation = keyframes`
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  `;

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, AUTO_PLAY_INTERVAL);

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#eee",
        fontFamily: "Poppins, sans-serif",
        fontSize: "12px",
        margin: 0,
        position: "relative",
      }}
    >
      <Box
        sx={{
          overflow: "hidden",
          width: "100%",
          height: "100vh",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            transition: "transform 0.5s ease-in-out",
            height: "100%",
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <Box
              key={index}
              sx={{
                minWidth: "100%",
                height: "100%",
                position: "relative",
              }}
            >
              <Box
                component="img"
                src={slide.img}
                alt={`Slide ${index + 1}`}
                sx={{
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "20%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: { xs: "90%", md: "80%" },
                  paddingRight: { xs: 0, md: "30%" },
                  boxSizing: "border-box",
                  color: "#fff",
                  textShadow: "0 5px 10px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    lineHeight: "1.3em",
                    letterSpacing: 2.5,
                  }}
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    lineHeight: "1.3em",
                    color: "#DBD3D3",
                  }}
                >
                  {slide.topic}
                </Typography>
                  <Typography
                    variant="h6"
                    sx={{ marginTop: "20px", lineHeight: "1.5em" }}
                  >
                    {slide.des}
                  </Typography>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 250px)" },
                    gridTemplateRows: "40px",
                    gap: "5px",
                    marginTop: "20px",
                  }}
                >
                    <Button
                    variant="contained"
                    endIcon={<ArrowCircleRightIcon />}
                    href={slide.path}
                    sx={{
                      background: `linear-gradient(91.83deg, rgb(255, 81, 47) 0%, rgb(221, 36, 118) 100%)`,
                      textTransform: "none",
                      borderRadius: "50px",
                      fontSize: "1rem",
                      px: [4],
                      color: "#fff",
                      zIndex: 1,
                      border: "2px solid transparent",
                      "&:hover": {
                        background: "transparent",
                        border: "2px solid #EF3D4E",
                      },
                    }}
                  >
                    See More
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: ["20px", "50px"],
            left: ["80%", "50%"],
            transform: "translateX(-50%)",
            display: "flex",
            gap: "20px",
            zIndex: 100,
            padding: "0 20px",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {slides.map((slide, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: { xs: "100px", sm: "150px" },
                height: { xs: "150px", sm: "220px" },
                flexShrink: 0,
                position: "relative",
                cursor: "pointer",
                borderRadius: "20px",
                overflow: "hidden",
                border:
                  index === currentIndex
                    ? "5px solid #6249CE"
                    : "5px solid transparent",
                transition: "transform 0.3s",
                scrollSnapAlign: "start",
                "&:hover img": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Box
                component="img"
                src={slide.img}
                alt={`Thumbnail ${index + 1}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  right: "10px",
                  color: "#fff",
                }}
              >
                <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                  {slide.thumbnailtitle}
                </Typography>
                <Typography sx={{ fontSize: "12px", fontWeight: 300 }}>
                  {slide.thumbnaildesc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "80%",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "10px",
            zIndex: 100,
            maxWidth: "30%",
            width: "300px",
          }}
        >
          
       
        </Box>
        <Box
          sx={{
            position: "absolute",
            zIndex: 1000,
            width: "100%",
            height: "3px",
            backgroundColor: "#333",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "#f1683a",
              animation: `${progressAnimation} ${TRANSITION_DURATION}ms linear forwards`,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Carousel;
