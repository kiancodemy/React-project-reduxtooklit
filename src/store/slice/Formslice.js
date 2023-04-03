import { createSlice } from "@reduxjs/toolkit";
import { addcar } from "./Carslice";

const formslice = createSlice({
  name: "from",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changename(state, action) {
      state.name = action.payload;
    },
    changecost(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addcar, (state, action) => {
      state.name = "";
      state.cost = 0;
    });
  },
});

export const { changename, changecost } = formslice.actions;
export const formreducer = formslice.reducer;
