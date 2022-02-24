import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <h3>cryptoverse</h3>
                <small>All right reserved</small>
                <Link to="/" className="link">
                    Home
                </Link>{" "}
                <Link to="/exchange" className="link">
                    Exchange
                </Link>{" "}
                <Link to="/news" className="link">
                    News
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
