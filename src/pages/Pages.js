import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import { Route, Routes} from "react-router-dom";

const Pages = () => {
  return (
    //if the path is equal to / then display home and such
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/cuisine/:food_type" element={<Cuisine/>}/>
      <Route path = "/searched/:search" element={<Searched/>} />
    </Routes>

  );
};

export default Pages;
