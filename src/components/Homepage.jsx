import React from "react";
import "./homepage.css";
import { useGetCryptosQuery } from "../services/CryptoApi";
import millify from "millify";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import { Link } from "react-router-dom";
const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    const GlobalStats = data?.data?.stats;
    console.log(data);
    if (isFetching) return "loading...";
    return (
        <div className="homepage">
            <div className="container">
                <h1>global crypto stats</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="items">
                            <h5>total currencies</h5>
                            <p>{GlobalStats.total}</p>
                        </div>
                        <div className="items">
                            <h5>total exchanges</h5>
                            <p>{GlobalStats.totalExchanges}</p>
                        </div>
                        <div className="items">
                            <h5>Market cap</h5>
                            <p>{millify(GlobalStats.totalMarketCap)}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="items">
                            <h5>24h volume</h5>
                            <p>{millify(GlobalStats.total24hVolume)}</p>
                        </div>
                        <div className="items">
                            <h5>market</h5>
                            <p>{millify(GlobalStats.totalMarkets)}</p>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="d-flex align-items-center justify-content-between">
                    <h1>top 10 cryptocurrencies in the world</h1>
                    <Link to="/cryptocurrencies" className="link">
                        {" "}
                        <h2>show more</h2>
                    </Link>
                </div>

                <Cryptocurrencies simplified />
            </section>
            <section>
                <div className="d-flex align-items-center justify-content-between">
                    <h1>latest crypto news</h1>
                    <Link to="/news" className="link">
                        <h2>show more</h2>
                    </Link>
                </div>

                <News simplified />
            </section>
        </div>
    );
};

export default Homepage;
