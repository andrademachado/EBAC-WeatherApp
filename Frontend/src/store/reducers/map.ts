import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type mapPlacesProps = {
    [cidade: string]: {
        lat: number
        lon: number
        iconUrl: string
    }
}

const initialState: mapPlacesProps = {
    "brasilia": {
        lat: -15.78,
        lon: -47.92,
        iconUrl: ''
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
