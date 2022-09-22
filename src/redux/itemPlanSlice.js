import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	itemPlan: {},
};

export const itemPlanSlice = createSlice({
	name: "itemPlan",
	initialState,
	reducers: {
		setItemPlan(state, action) {
			state.itemPlan = action.payload;
		},
	},
});

export const selectItemPlan = (state) => state.itemPlanSlice;

export const { setItemPlan } = itemPlanSlice.actions;

export default itemPlanSlice.reducer;
