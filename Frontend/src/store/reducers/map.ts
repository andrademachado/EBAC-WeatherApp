import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type mapPlacesProps = {
    [cidade: string]: {
        iconUrl: string
    }
}

const initialState: mapPlacesProps = {
    "maceio": {
        iconUrl: "https://cdn.weatherapi.com/weather/64x64/day/353.png"
    }
}

const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        setMap: (state, action: PayloadAction<string>) => {
            state["maceio"].iconUrl = action.payload
            /* positions2["maceio"].iconUrl = 'novoIcon'; */
        }
    }
})

export const { setMap } = mapSlice.actions

export default mapSlice.reducer
