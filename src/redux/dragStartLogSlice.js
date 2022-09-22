import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	dragStartLog: false,
};

export const dragStartLogSlice = createSlice({
	name: "dragStartLog",
	initialState,
	reducers: {
		setDragStartLog(state, action) {
			state.dragStartLog = action.payload;
		},
	},
});

export const selectDragStartLog = (state) => state.dragStartLogSlice;

export const { setDragStartLog } = dragStartLogSlice.actions;

export default dragStartLogSlice.reducer;
