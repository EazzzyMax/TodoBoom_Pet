import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './todoSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistStore, persistReducer, FLUSH, REHYDRATE, REGISTER, PURGE, PAUSE, PERSIST } from 'redux-persist'

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['categories', 'archivedCategories', 'currentCategoryIndex'],
}

export const store = configureStore({
	reducer: persistReducer(persistConfig, categoriesReducer),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: true,
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, REGISTER, PURGE, PAUSE, PERSIST],
			},
		}),
})
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
