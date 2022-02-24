import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
    }

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinTimestamp.push(
            new Date(
                coinHistory?.data?.history[i].timestamp
            ).toLocaleDateString()
        );
    }
    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: "Price In USD",
                data: coinPrice,
                fill: false,
                backgroundColor: "#0071bd",
                borderColor: "#0071bd",
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <>
            <div className="container">
                <div className="row  justify-content-between">
                    <div className="col-md-4">
                        {" "}
                        <h2>{coinName} Price Chart</h2>
                    </div>
                    <div className="col-md-4">
                        <span>{coinHistory?.data.change}% </span>
                        <span>
                            current {coinName} Price:$ {currentPrice}
                        </span>
                    </div>
                </div>
            </div>
            <Line data={data} options={options} />
        </>
    );
};

export default LineChart;
