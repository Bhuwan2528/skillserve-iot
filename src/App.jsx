import React, { useEffect } from "react";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

const App = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <Routes>

      <Route path="/" element={<Header />} />
    </Routes>
  );
};

export default App;