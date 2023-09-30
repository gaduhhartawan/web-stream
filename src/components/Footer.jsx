import { Box, Stack } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box>
      <Stack alignItems="center" justifyContent="end" p={4} color={"#fff"}>
        Copyright &copy; 2023 GHStream.
      </Stack>
    </Box>
  );
};

export default Footer;
