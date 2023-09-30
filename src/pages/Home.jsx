import React from "react";
import { Feed, Header } from "../components";

const Home = () => {
  return (
    <>
      <Header />
      {/* <PopularFeed title="Popular Now" /> */}
      <Feed endpoint="popular/movies" title="Popular Movies" />
      <Feed endpoint="movies" title="Recent Movies" />
      <Feed endpoint="genres/horror" title="Horror Movies" />
      <Feed endpoint="genres/action" title="Action Movies" />
      <Feed endpoint="genres/romance" title="Romance Movies" />
    </>
  );
};

export default Home;
