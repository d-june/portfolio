import React from 'react'
import "./styles/reset.css"
import "./styles/main.scss"
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ContactsPage from "./pages/ContactsPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop />
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/projects" element={<Projects/>}></Route>
                    <Route path="/contacts" element={<ContactsPage/>}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>

    );
}

export default App;

