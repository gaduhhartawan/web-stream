import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetchStream } from "../utils/useFetchStream";
import { PlayCircle } from "@mui/icons-material";
import MoviePlayer from "../components/MoviePlayer";

const MovieDetail = () => {
  const { id } = useParams();
  // const { data, isLoading } = useFetchStream(`${id}/streams`);
  const { data: movies, isLoading: isLoadingMovie } = useFetchStream(id);
  // if (isLoading) return "Loading...";
  if (isLoadingMovie) return "Loading...";
  // if (!data[2].url) return "Loading...";
  return (
    <Stack>
      <MoviePlayer movies={movies} />
      <Box p="20px" color="#fff">
        <Typography variant="h5">
          {movies.title} FILM SUBTITLE INDONESIA STREAMING
        </Typography>
        <Stack direction="row" mt={2} gap={2}>
          <img src={movies.posterImg} alt="posterImg" />
          <Stack direction="column" gap={1}>
            <Typography>Negara: {movies.countries.join(", ")}</Typography>
            <Typography>Pemeran: {movies.casts.join(", ")}</Typography>
            <Typography>Sutradara: {movies.directors}</Typography>
            <Typography>Durasi: {movies.duration}</Typography>
            <Typography>Genre: {movies.genres.join(", ")}</Typography>
            <Typography>Rating: {movies.rating}</Typography>
            <Typography>Sinopsis: {movies.synopsis}</Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default MovieDetail;
