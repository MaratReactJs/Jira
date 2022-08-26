import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: {
		checkbox: false,
		date: "",
		time: 0,
		description: "",
		search: "",
	},
};

export const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		setData(state, action) {
			state.data = action.payload;
		},
	},
});

export const selectData = (state) => state.dataSlice;

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
