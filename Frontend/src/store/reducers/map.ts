import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type mapPlacesProps = {
    id: string
    lat: number
    lng: number
    iconUrl: string
}

const initialState: mapPlacesProps[] = []

const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        setMap: (state, action: PayloadAction<mapPlacesProps>) => {
            const newMapPlace = action.payload

            if (state.find((place) => place.id === newMapPlace.id)) {
                console.log("conflito de local")
                console.log(state.length)
            } else {
                state.push(action.payload)
                console.log("sem conflito de local")
                console.log(state.length)
            }

        }
    }
})

export const { setMap } = mapSlice.actions

export default mapSlice.reducer
