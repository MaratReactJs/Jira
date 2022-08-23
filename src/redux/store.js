import { configureStore } from "@reduxjs/toolkit";
import logSlice from "./logSlice";
import dataSlice from "./dataSlice";

export const store = configureStore({
	reducer: { logSlice, dataSlice },
});
