import { combineReducers } from "redux";
import customerDetailsReducer from "./coustemer/reducer";
// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from "redux-persist";
// import persistReducer from "redux-persist/es/persistReducer";

// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['coustemers'] 
//     // version: 1
// };

const rootReducer = combineReducers({
    customers: customerDetailsReducer,
})
 
// export default persistReducer(persistConfig, rootReducer) 
export default rootReducer