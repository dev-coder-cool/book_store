import React from "react";
import { Route } from "react-router-dom";
import Home from "./home/Home";
import { Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from './components/Signup'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
