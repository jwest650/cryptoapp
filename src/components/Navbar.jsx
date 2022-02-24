import React from "react";
import "./navbar.css";
import {
    AiOutlineHome,
    AiFillFund,
    AiOutlineMoneyCollect,
    AiOutlineBulb,
} from "react-icons/ai";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar_container">
            <div className="container-fluid ">
                <h1>Crypto verse</h1>
                <ul className="p-0">
                    <Link to="/" className="links">
                        <li>
                            <span>
                                {" "}
                                <AiOutlineHome className="icons" />
                            </span>{" "}
                            Home
                        </li>
                    </Link>
                    <Link to="/cryptocurrencies" className="links">
                        <li>
                            <span>
                                <AiFillFund className="icons" />
                            </span>{" "}
                            Cryptocurrencies
                        </li>
                    </Link>
                    <Link to="/exchanges" className="links">
                        <li>
                            <span>
                                <AiOutlineMoneyCollect className="icons" />
                            </span>
                            Exchanges
                        </li>
                    </Link>
                    <Link to="/news" className="links">
                        <li>
                            <span>
                                <AiOutlineBulb className="icons" />
                            </span>{" "}
                            News
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
