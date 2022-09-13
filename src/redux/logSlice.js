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
		removeLog(state, action) {
			state.logs = state.logs.filter((obj) => obj.id !== action.payload);
		},
	},
});

export const selectLogs = (state) => state.logSlice;

export const { setLog, removeLog } = logSlice.actions;

export default logSlice.reducer;
