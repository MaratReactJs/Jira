import { configureStore } from "@reduxjs/toolkit";
import logSlice from "./logSlice";
import dataSlice from "./dataSlice";
import itemLogSlice from "./itemLogSlice";

export const store = configureStore({
	reducer: { logSlice, dataSlice, itemLogSlice },
});
