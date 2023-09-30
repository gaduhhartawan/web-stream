import React, { useEffect, useState } from "react";
import { Typography, Box, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward, PlayArrow, Info } from "@mui/icons-material";
import { demoHeaderData } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === demoHeaderData.length - 1 ? 0 : prev + 1
      );
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "40vh", sm: "55vh", md: "80vh" },
      }}
    >
      <Box width="100%" height="100%" position="relative">
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={demoHeaderData[currentIndex].image}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
            }}
          />
          <div
            style={{
              position: "absolute",
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8) 100%)",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
            }}
          ></div>
        </div>
        <Typography
          position="absolute"
          bottom="90px"
          left="20px"
          color="#fff"
          variant="h5"
          zIndex={2}
        >
          {demoHeaderData[currentIndex].title}
        </Typography>
        <Box position="absolute" bottom="30px" left="20px" zIndex={2}>
          <Link to={demoHeaderData[currentIndex]._id}>
            <IconButton
              sx={{
                color: "black",
                background: "white",
                borderRadius: 2,
              }}
              className="button"
            >
              <PlayArrow /> Play
            </IconButton>
          </Link>
          <Link to={demoHeaderData[currentIndex]._id}>
            <IconButton
              sx={{
                color: "white",
                background: "rgb(17, 17, 17)",
                borderRadius: 2,
                ml: 2,
              }}
              className="button"
            >
              <Info /> Info
            </IconButton>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
