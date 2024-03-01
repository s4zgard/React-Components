import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { changeName, changeCost, formReducer } from "./slices/formSlice";
import { reset } from "./actions";
import {
  addCar,
  removeCar,
  changeSearchTerm,
  carsReducer,
} from "./slices/carsSlice";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
    cars: carsReducer,
    form: formReducer,
  },
});
export {
  store,
  addSong,
  removeSong,
  addMovie,
  removeMovie,
  changeCost,
  changeName,
  addCar,
  removeCar,
  changeSearchTerm,
  reset,
};
