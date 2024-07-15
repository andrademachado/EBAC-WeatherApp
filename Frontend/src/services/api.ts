import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.weatherapi.com/v1'
    }),
    endpoints: (builder) => ({
        getNewLocation: builder.query<WeatherProps, string>({
            query: (location) => `forecast.json?key=4c53f136aabd43ada19173320241507&q=${location}&lang=pt&days=6&aqi=yes`
        })
    })
})

export const { useGetNewLocationQuery } = api

export default api