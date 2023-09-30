import { PlayCircle } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MoviePlayer = ({ movies }) => {
  console.log(movies);
  return (
    <Box width="100%" height="50vh">
      <Box position="relative" width="100%" height="100%">
        <Link to={`${process.env.REACT_APP_BASE_URL}/${movies._id}/streams`}>
          <img
            src={movies.posterImg}
            alt="posterImg"
            width="100%"
            height="100%"
            style={{ objectFit: "contain" }}
          />
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
            <Stack
              justifyContent="center"
              alignItems="center"
              width="100%"
              height="100%"
              color="#fff"
            >
              <PlayCircle fontSize="large" />
            </Stack>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default MoviePlayer;
