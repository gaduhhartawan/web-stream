import { Star } from "@mui/icons-material";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import React, { useState } from "react";

const VideoCard = ({ videos }) => {
  const [isHovered, setIsHovered] = useState(false);
  //   console.log(videos);
  const { posterImg, rating, title } = videos;
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  //   console.log();
  return (
    <Card
      sx={{
        width: "200px",
        height: "270px",
        flexShrink: 0,
        backgroundImage: `url(${posterImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="cards"
    >
      {/* <img src={posterImg} alt="posterImg" style={{ position: "relative" }} /> */}
      <Box color="gold" position={"absolute"} top={0} left={0} zIndex={9}>
        <Star />
        {rating}
      </Box>
      {isHovered && (
        <Box
          position="absolute"
          sx={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,.7)",
          }}
        >
          <Typography
            textAlign="center"
            color="#fff"
            position="absolute"
            bottom={20}
            left={0}
            right={0}
          >
            {title}
          </Typography>
        </Box>
      )}
    </Card>
  );
};

export default VideoCard;
