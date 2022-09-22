import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	plans: [],
};

export const planSlice = createSlice({
	name: "plans",
	initialState,
	reducers: {
		setPlan(state, action) {
			state.plans = action.payload;
		},
		removePlan(state, action) {
			state.plans = state.plans.filter((obj) => obj.id !== action.payload);
		},
	},
});

export const selectPlan = (state) => state.planSlice;

export const { setPlan, removePlan } = planSlice.actions;

export default planSlice.reducer;
