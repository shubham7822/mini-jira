

import { configureStore,createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import  reducerMiniJira  from "../redux/reducer";
import { logger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, reducerMiniJira)
 
export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunk,logger),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);


export const persistor = persistStore(store)