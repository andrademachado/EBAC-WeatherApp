import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.weatherapi.com/v1'
    }),
    endpoints: (builder) => ({
        getNewLocation: builder.query<WeatherProps, string>({
            query: (location) => `forecast.json?key=ef05e4f12f67490ebed15517242506&q=${location}&lang=pt&days=6&aqi=yes`
        })
    })
})

export const { useGetNewLocationQuery } = api

export default api