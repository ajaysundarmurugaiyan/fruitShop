import React from "react";
import "./index.css";
import Appbar from "./NewProject/Appbar";
import Filters from "./NewProject/Filters";
import Items from "./NewProject/Items";
import Fruitscard from "./NewProject/Fruitscard";
import SeasonSpecials from "./NewProject/SeasonSpecials";
import Footer from "./NewProject/Footer";
import Student from "./components/Student";
import Navbar from "./components/Navbar";
import FetchApi from "./components/FetchApi";

function App() {
  return (
    <div>
      <Appbar/>
      <Filters/>
      <Items/>
      <SeasonSpecials/>
      <Footer/>
      {/* <Student name="ajay" age={21} />
      <Student/> */}
      {/* <Navbar/> */}
      {/* <FetchApi/> */}
    </div>
  );
}

export default App;
