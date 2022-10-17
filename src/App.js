
import React from "react";
import First_Task from "./pages/First_Task/First_Task.jsx";
import SecondTask from "./pages/SecondTask/SecondTask.jsx";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
    return (

<div className="App">
<HashRouter>
       <Routes>

       <Route path="/first_task" element={<First_Task/>} />
       <Route path="/second_task" element={<SecondTask/>} />
       <Route path="*" element={<First_Task/>} />
     </Routes>
   </HashRouter>

 
      </div>

    );}

    export default App;














