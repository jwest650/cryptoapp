import moment from "moment";
import React, { useState } from "react";
import { useGetnewsQuery } from "../services/NewsApi";
import "./news.css";
import { useGetCryptosQuery } from "../services/CryptoApi";

const demoImage =
    "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";
const News = ({ simplified }) => {
    const [newsCategory, setnewsCategory] = useState("Cryptocurrency");
    const { data: options, isFetching } = useGetCryptosQuery(100);

    const { data } = useGetnewsQuery({
        newsCategory,
        count: simplified ? 6 : 12,
    });
    if (!data?.value) return "loading... ";
    console.log(setnewsCategory);
    return (
        <>
            <div className="row row-cols-md g-4 w-100 news">
                {!simplified && (
                    <div className="col-12">
                        <select
                            name=""
                            id=""
                            placeholder="select crypto"
                            onChange={(e) => setnewsCategory(e.target.value)}
                        >
                            {options?.data?.coins.map((coin, i) => (
                                <option value={coin.name} key={i}>
                                    {coin.name}
                                </option>
                            ))}
                        </select>{" "}
                    </div>
                )}

                {data?.value.map((news, i) => (
                    <div className="col-md-4 " key={i}>
                        <div className="card effect">
                            <a href={news.url}>
                                <div className="d-flex img-con p-2">
                                    <h6>{news.name}</h6>
                                    <img
                                        src={
                                            news?.image?.thumbnail
                                                ?.contentUrl || demoImage
                                        }
                                        alt="news"
                                    />
                                </div>
                                <div className="card-body">
                                    <small>
                                        {news.description.length > 100
                                            ? `${news.description.substring(
                                                  0,
                                                  100
                                              )} ...`
                                            : news.description}
                                    </small>
                                    <div className="timer d-flex">
                                        <img
                                            src={
                                                news.provider[0]?.image
                                                    ?.thumbnail?.contentUrl ||
                                                demoImage
                                            }
                                            alt=""
                                        />
                                        <small>
                                            {moment(news.datePublished)
                                                .startOf("ss")
                                                .fromNow()}
                                        </small>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default News;
