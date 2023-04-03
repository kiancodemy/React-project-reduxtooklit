import { createSlice, nanoid } from "@reduxjs/toolkit";

const carslice = createSlice({
  name: "car",
  initialState: {
    searchterm: "",
    data: [],
  },
  reducers: {
    changesearch(state, action) {
      state.searchterm = action.payload;
    },
    addcar(state, action) {
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removecar(state, action) {
      const update = state.data.filter((car) => {
        return car.id !== action.payload;
      });
      state.data = update;
    },
  },
});

export const { changesearch, addcar, removecar } = carslice.actions;

export const carreducer = carslice.reducer;
