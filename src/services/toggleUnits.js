import {createSlice} from "@reduxjs/toolkit";

export const toggleUnits = createSlice({
    name: "toggle",
    initialState: {
        valueC: true,
        valueF: false,
        display: false
    },
    reducers: {
        degreeF: (state) => {
            state.valueF = true;
            state.valueC = false
        },
        degreeC: (state) => {
            state.valueC = true;
            state.valueF = false
        },
        toggleDisplay: (state) => {
            state.display = !state.display
        },
        hideDiaplay: (state) => {
            state.display = false
        }
    }
})

export const {degreeF, degreeC, toggleDisplay, hideDiaplay} = toggleUnits.actions;
export default toggleUnits.reducer;