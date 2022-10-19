
import React from "react";
import FirstTask from "./pages/FirstTask/FirstTask.jsx";
import SecondTask from "./pages/SecondTask/SecondTask.jsx";
import ThirdTask from "./pages/ThirdTask/ThirdTask.jsx";
import ChoiceTicket from "./components/ThirdTask/ChoiceTicket";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
    return (

<div className="App">
<HashRouter>
       <Routes>

       <Route path="/first_task" element={<FirstTask/>} />
       <Route path="/second_task" element={<SecondTask/>} />
       <Route path="/third_task" element={<ThirdTask/>} />
       <Route exact path={"/third_task/:route"} element={<ChoiceTicket />} />
       <Route path="*" element={<FirstTask/>} />
     </Routes>
   </HashRouter>

 
      </div>

    );}

    export default App;














