import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	logs: [],
};

export const logSlice = createSlice({
	name: "logs",
	initialState,
	reducers: {
		setLog(state, action) {
			state.logs = action.payload;
		},
	},
});

export const selectLogs = (state) => state.logSlice;

export const { setLog } = logSlice.actions;

export default logSlice.reducer;
