import './App.css';
import Navbar from "./Components/NavBar";
import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import AddUser from "./Components/AddUser";
import AllUser from "./Components/AllUser";
import Code from "./Components/Code";
import EditUser from "./Components/EdiUser";

function App() {
  return (
    <BrowserRouter className="App">
        <Navbar />
        <Routes>
            <Route path={'/'} element={<Code />}/>
            <Route path={'/add'} element={<AddUser />}/>
            <Route path={'/all'} element={<AllUser />}/>
            <Route path={'/edit/:id'} element={<EditUser />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
