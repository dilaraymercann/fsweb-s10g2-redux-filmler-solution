import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import favoritesReducer from "./favoritesReducer";

const rootReducer = combineReducers({
  movieReducer,
  favoritesReducer,
});

export default rootReducer;
// APP URL: "https://fsweb-s10g2-redux-filmler-solution-sepia.vercel.app/movies"
