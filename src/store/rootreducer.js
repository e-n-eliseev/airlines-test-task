import { combineReducers } from "redux";
import additionalReducer from "./additional/additionalReducer";
import filterReducer from "./filter/filterReducer";

const rootreducer = combineReducers({
    filter: filterReducer,
    additional: additionalReducer,
})

export default rootreducer;