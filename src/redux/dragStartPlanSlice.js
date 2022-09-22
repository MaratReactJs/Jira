import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	dragStartPlan: false,
};

export const dragStartPlanSlice = createSlice({
	name: "dragStartLog",
	initialState,
	reducers: {
		setDragStartPlan(state, action) {
			state.dragStartPlan = action.payload;
		},
	},
});

export const selectDragStartPlan = (state) => state.dragStartPlanSlice;

export const { setDragStartPlan } = dragStartPlanSlice.actions;

export default dragStartPlanSlice.reducer;
