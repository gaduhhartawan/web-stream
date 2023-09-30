import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:id" exact element={<MovieDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
