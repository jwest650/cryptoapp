import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const newsHeaders = {
    "x-bingapis-sdk": "true",
    "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
    "x-rapidapi-key": "a8bd50d0ccmsh92165ae87b7c24ep141321jsn82b99804dd65",
};
const createRequest = (url) => ({ url, headers: newsHeaders });
const baseUrl = "https://bing-news-search1.p.rapidapi.com";
export const newsApi = createApi({
    reducerPath: "newsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getnews: builder.query({
            query: ({ newsCategory, count }) =>
                createRequest(
                    `news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
                ),
        }),
    }),
});

export const { useGetnewsQuery } = newsApi;

// const options = {
//     method: "GET",
//     url: "https://bing-news-search1.p.rapidapi.com/news",
//     params: { textFormat: "Raw", safeSearch: "Off" },
//     headers: {
//         "x-bingapis-sdk": "true",
//         "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
//         "x-rapidapi-key": "a8bd50d0ccmsh92165ae87b7c24ep141321jsn82b99804dd65",
//     },
// };
