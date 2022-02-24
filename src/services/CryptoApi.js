import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const cryptoHeaders = {
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    "x-rapidapi-key": "aee0c835b0mshfa01b047e6dfb4fp119f2fjsnb692fc4bf8bd",
};
const createRequest = (url) => ({ url, headers: cryptoHeaders });
const baseUrl = "https://coinranking1.p.rapidapi.com";
export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) =>
                createRequest(`/coin/${coinId}/history/${timePeriod}`),
        }),
    }),
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
} = cryptoApi;
