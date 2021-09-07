//This object represents all of the state of our project.
import {combineReducers} from "redux"

import userReducer from "./user/user.reducer"

export default combineReducers({
  user: userReducer,
})
