import React, { useState, useEffect } from "react";
import millify from "millify";
import { useGetCryptosQuery } from "../services/CryptoApi";
import "./cryptocurrencies.css";
import { Link } from "react-router-dom";
const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data, isFetching } = useGetCryptosQuery(count);
    const [coins, setcoins] = useState([]);
    const [search, setsearch] = useState("");

    useEffect(() => {
        const filtered = data?.data?.coins.filter((ff) =>
            ff.name.toLowerCase().includes(search.toLowerCase())
        );
        setcoins(filtered);
        console.log(coins);
    }, [search]);
    if (isFetching) return "loading...";
    return (
        <>
            <div className="row coins row-cols-md g-4 w-100 ">
                {!simplified && (
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Search currencies"
                            onChange={(e) => setsearch(e.target.value)}
                        />
                    </div>
                )}
                {coins?.map((coin, i) => (
                    <>
                        {console.log(coin)}
                        <div className="col-md-3">
                            <Link
                                to={`/cryptodetails/${coin.uuid}`}
                                className="link"
                            >
                                <div className="card border-0 effect" key={i}>
                                    <div className="head d-flex justify-content-between align-items-center">
                                        <span>{`${coin.rank}. ${coin.name} `}</span>
                                        <span>
                                            {
                                                <img
                                                    src={coin.iconUrl}
                                                    alt=""
                                                    className="coin-image"
                                                />
                                            }
                                        </span>
                                    </div>
                                    <div className="card-body">
                                        <p>price: {millify(coin.price)}</p>
                                        <p>
                                            market cap:{" "}
                                            {millify(coin.marketCap)}
                                        </p>
                                        <p>
                                            daily change: {millify(coin.change)}
                                            %
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </>
                ))}
            </div>
        </>
    );
};

export default Cryptocurrencies;
