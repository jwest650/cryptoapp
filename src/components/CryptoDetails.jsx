import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
} from "../services/CryptoApi";
import {
    AiOutlineDollarCircle,
    AiOutlineNumber,
    AiOutlineThunderbolt,
    AiOutlineTrophy,
    AiOutlineFundProjectionScreen,
    AiOutlineMoneyCollect,
    AiOutlineExclamationCircle,
    AiOutlineCheckCircle,
    AiOutlineStop,
} from "react-icons/ai";
import "./cryptodetails.css";
import millify from "millify";
import HTMLReactParser from "html-react-parser";
import LineChart from "./LineChart";
const CryptoDetails = () => {
    const { coinId } = useParams();

    const [timePeriod, settimePeriod] = useState("7d");
    const time = ["3h", "24h", "7d", "30", "1y", "3m", "3y", "5y"];
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
    const { data: coinHistory } = useGetCryptoHistoryQuery({
        coinId,
        timePeriod,
    });

    const cryptodetails = data?.data?.coin;
    console.log(coinId);

    if (isFetching) return "loading...";
    const stats = [
        {
            title: "Price to USD",
            value: `$ ${cryptodetails?.price && millify(cryptodetails?.price)}`,
            icon: <AiOutlineDollarCircle />,
        },
        {
            title: "Rank",
            value: cryptodetails?.rank,
            icon: <AiOutlineNumber />,
        },
        {
            title: "24h Volume",
            value: `$ ${
                cryptodetails?.volume && millify(cryptodetails?.volume)
            }`,
            icon: <AiOutlineThunderbolt />,
        },
        {
            title: "Market Cap",
            value: `$ ${
                cryptodetails?.marketCap && millify(cryptodetails?.marketCap)
            }`,
            icon: <AiOutlineDollarCircle />,
        },
        {
            title: "All-time-high(daily avg.)",
            value: `$ ${
                cryptodetails?.allTimeHigh?.price &&
                millify(cryptodetails?.allTimeHigh?.price)
            }`,
            icon: <AiOutlineTrophy />,
        },
    ];

    const genericStats = [
        {
            title: "Number Of Markets",
            value: cryptodetails?.numberOfMarkets,
            icon: <AiOutlineFundProjectionScreen />,
        },
        {
            title: "Number Of Exchanges",
            value: cryptodetails?.numberOfExchanges,
            icon: <AiOutlineMoneyCollect />,
        },
        {
            title: "Aprroved Supply",
            value: cryptodetails?.approvedSupply ? (
                <AiOutlineCheckCircle />
            ) : (
                <AiOutlineStop />
            ),
            icon: <AiOutlineExclamationCircle />,
        },
        {
            title: "Total Supply",
            value: `$ ${
                cryptodetails?.totalSupply &&
                millify(cryptodetails?.totalSupply)
            }`,
            icon: <AiOutlineExclamationCircle />,
        },
        {
            title: "Circulating Supply",
            value: `$ ${
                cryptodetails?.volume && millify(cryptodetails?.volume)
            }`,
            icon: <AiOutlineExclamationCircle />,
        },
    ];

    return (
        <div className="container-fluid">
            <section className="row">
                {/* <div className="col-md-12 text-center">
                    <h2>
                        {cryptodetails.name} ({cryptodetails.slug}) price
                    </h2>
                    <small>
                        {cryptodetails.name} live price in US dollars. View
                        value statistics, market cap and supply
                    </small>
                    <hr />
                </div> */}

                <div>
                    <select
                        defaultValue={"7d"}
                        onChange={(e) => settimePeriod(e.target.value)}
                    >
                        {time.map((tt, i) => (
                            <option key={i}>{tt}</option>
                        ))}
                    </select>
                </div>
                <LineChart
                    coinHistory={coinHistory}
                    currentPrice={millify(cryptodetails?.price)}
                    coinName={cryptodetails?.name}
                />
            </section>

            <div>
                <section className="row justify-content-between info">
                    <div className="col-md-5 left">
                        {" "}
                        <h1>{cryptodetails.name} value statistics</h1>
                        <small>
                            An overview showing the stats of{" "}
                            {cryptodetails.name}
                        </small>
                        {stats.map(({ icon, title, value }) => (
                            <>
                                <div className="row justify-content-between p-3 border-bottom">
                                    <div className="col-6 first">
                                        <span>{icon}</span>
                                        <span>{title}</span>{" "}
                                    </div>
                                    <div className="col-6 last">
                                        <span>{value}</span>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>

                    <div className="col-md-5 right">
                        {" "}
                        <h1>Other statistics</h1>
                        <small>An overview of all cryptocurrencies.</small>
                        {genericStats.map(({ icon, title, value }) => (
                            <>
                                <div className="row justify-content-between  p-3 border-bottom">
                                    <div className="col-6 first">
                                        <span>{icon}</span>
                                        <span>{title}</span>
                                    </div>
                                    <div className="col-6 last">
                                        <span>{value}</span>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </section>
            </div>
            <div className="container">
                <section className="row justify-content-between">
                    <div className="col-md-5">
                        <h1>What is {cryptodetails.name}</h1>
                        <p>{HTMLReactParser(cryptodetails.description)}</p>
                    </div>

                    <div className="col-md-5 details-links">
                        <h1>{cryptodetails.name} links</h1>
                        {cryptodetails.links.map((link) => (
                            <>
                                <div className="row ">
                                    <div className="col-md">
                                        <h5>{link.type}</h5>
                                    </div>
                                    <div className="col-md">
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {link.name}
                                        </a>
                                    </div>
                                </div>
                                <hr />
                            </>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CryptoDetails;
