import { combineReducers } from "redux";
import songReducer from "./songs/song-reducer";
import userReducer from "./users/user-reducer";

export default combineReducers({
  songReducer,
  userReducer,
});
