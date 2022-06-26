import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const weatherApi = createApi({
    reducerPath: "weatherApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://api.openweathermap.org/data/2.5"}) ,
    endpoints: (builder) => ({
        loadUser: builder.query({
            query: (city) => `weather?q=${city}&units=metric&appid=${process.env.REACT_APP_KEY}`
        })
    })    
});

export const {useLoadUserQuery} = weatherApi;