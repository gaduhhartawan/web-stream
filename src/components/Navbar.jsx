import { Stack, Typography, Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      sx={{
        background: "#030303",
        color: "#fff",
        p: { xs: "15px 20px", md: "15px 60px" },
        position: "sticky",
        top: 0,
        zIndex: 10,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <Typography variant="h5">GHStream</Typography>
      </Link>
      <Paper
        component={"form"}
        onSubmit={() => {}}
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          pl: 2,
          boxShadow: "none",
          display: "flex",
        }}
      >
        <input
          className="search-bar"
          placeholder="Search..."
          type="text"
          value=""
          onChange={() => {}}
          style={{ border: "none", outline: "none" }}
        />
        <IconButton type="submit" sx={{ p: "8px", color: "#000" }}>
          <Search />
        </IconButton>
      </Paper>
    </Stack>
  );
};

export default Navbar;
