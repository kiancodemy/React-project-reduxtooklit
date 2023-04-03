import { configureStore } from "@reduxjs/toolkit";
import { changesearch, addcar, removecar, carreducer } from "./slice/Carslice";

import { changename, changecost, formreducer } from "./slice/Formslice";

const store = configureStore({
  reducer: { car: carreducer, form: formreducer },
});

export {
  store,
  formreducer,
  changesearch,
  addcar,
  removecar,
  carreducer,
  changename,
  changecost,
};
