/**
 * Redux Store Configuration
 * 
 * This file configures and exports the Redux store for the application.
 * It sets up:
 * - Redux Toolkit's configureStore: configures and initializes the global state container (store) that holds your application's state.
 * - Redux Persist: saves your Redux state to localStorage, allowing state to persist between page refreshes.
 * - Middleware configuration: sets up middleware for the Redux store, including special configuration to handle Redux Persist's non-serializable actions.
 * 
 * The configured store and persistor are exported for use in the application.
 */


import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './reducer'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
