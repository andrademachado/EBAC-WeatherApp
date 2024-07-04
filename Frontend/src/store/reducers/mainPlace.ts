import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type MainPlaceState = {
    place: string
}

const initialState: MainPlaceState = {
    place: "brasilia"

}

const mainPlaceSlice = createSlice({
    name: 'mainPlace',
    initialState,
    reducers: {
        setPlace: (state, action: PayloadAction<string>) => {
            state.place = action.payload
        }
    }
})

export const { setPlace } = mainPlaceSlice.actions

export default mainPlaceSlice.reducer
