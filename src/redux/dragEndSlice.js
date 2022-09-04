import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	dragEnd: false,
};

export const dragEndSlice = createSlice({
	name: "dragEnd",
	initialState,
	reducers: {
		setDragEnd(state, action) {
			state.dragEnd = action.payload;
		},
	},
});

export const selectDragEnd = (state) => state.dragEndSlice;

export const { setDragEnd } = dragEndSlice.actions;

export default dragEndSlice.reducer;
