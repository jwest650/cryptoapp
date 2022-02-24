import React from "react";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exchange from "./components/Exchange";
import Cryptocurrencies from "./components/Cryptocurrencies";
import News from "./components/News";
import Footer from "./Footer";
import CryptoDetails from "./components/CryptoDetails";
const App = () => {
    return (
        <div className="container-fluid p-0 ">
            <BrowserRouter>
                <div className="d-flex">
                    <Navbar />

                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/exchanges" element={<Exchange />} />
                        <Route
                            path="/cryptocurrencies"
                            element={<Cryptocurrencies />}
                        />
                        <Route path="/news" element={<News />} />
                        <Route
                            path="/cryptodetails/:coinId"
                            element={<CryptoDetails />}
                        />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
