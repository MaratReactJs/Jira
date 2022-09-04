import { configureStore } from "@reduxjs/toolkit";
import logSlice from "./logSlice";
import dataSlice from "./dataSlice";
import itemLogSlice from "./itemLogSlice";
import dragEndSlice from "./dragEndSlice";

export const store = configureStore({
	reducer: { logSlice, dataSlice, itemLogSlice, dragEndSlice },
});
