import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	itemLog: {},
};

export const itemLogSlice = createSlice({
	name: "itemLog",
	initialState,
	reducers: {
		setItemLog(state, action) {
			state.itemLog = action.payload;
		},
	},
});

export const selectItemLog = (state) => state.itemLogSlice;

export const { setItemLog } = itemLogSlice.actions;

export default itemLogSlice.reducer;
