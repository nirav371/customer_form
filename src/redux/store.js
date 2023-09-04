import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "./root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage,
// //   whitelist: ['customers']
//   // version: 1
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const loggerMiddleware = createLogger();
// export const store = createStore(
//   persistedReducer,
//   composeWithDevTools(applyMiddleware(thunk, loggerMiddleware))
// );
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, loggerMiddleware))
);

// export const persistor = persistStore(store);
// export default { store, persistor };
// export const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// export default configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// });
