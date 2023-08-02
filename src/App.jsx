import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, FilterMovies, Movie, SharedLayout } from "./pages";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="filter" element={<FilterMovies />} />
            <Route path="movie/:id" element={<Movie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
