import React from "react";
import { useFetchMovies } from "../utils/useFetchMovies";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import VideoCard from "./VideoCard";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Feed = ({ title, endpoint }) => {
  const { data: videos, isLoading } = useFetchMovies(endpoint, {
    select: (data) => data.slice(0, 15),
  });

  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  if (isLoading) return "Loading...";
  return (
    <Box p="10px 20px">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <h2 style={{ color: "white" }}>{title}</h2>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <IconButton
            className="button"
            sx={{ backgroundColor: "white", mr: "10px" }}
            onClick={() => scroll("left")}
          >
            <ArrowLeft color="#000" />
          </IconButton>
          <IconButton
            className="button"
            sx={{ backgroundColor: "white" }}
            onClick={() => scroll("right")}
          >
            <ArrowRight color="#000" />
          </IconButton>
        </Stack>
      </Stack>
      <Stack
        className="scroll"
        direction="row"
        flexWrap="nowrap"
        width="100%"
        gap={2}
        sx={{
          overflowX: "scroll",
        }}
        ref={scrollRef}
      >
        {videos.map((video) => (
          <Link to={video._id}>
            <VideoCard videos={video} />
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default Feed;
