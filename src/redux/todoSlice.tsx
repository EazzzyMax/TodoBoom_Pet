import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICategory } from '../types/types'

type State = {
	currentCategoryIndex: number
	categories: ICategory[]
	archivedCategories: ICategory[]
}

const initialState: State = {
	currentCategoryIndex: 0,
	categories: [],
	archivedCategories: [],
}

const getCategoriesListName = (archived: boolean) => (archived ? 'archivedCategories' : 'categories')

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState,

	reducers: {
		addTodo(state, action) {
			state.categories[state.currentCategoryIndex].todos.unshift({
				id: new Date().getTime(),
				title: action.payload.title,
				desc: action.payload.desc,
				completed: false,
			})
		},
		removeTodo(state, action) {
			const listName = getCategoriesListName(action.payload.archived)
			const categoryIndex = state[listName].findIndex((category) => category.id === action.payload.categoryId)
			state[listName][categoryIndex].todos = state[listName][categoryIndex].todos.filter(
				(todo) => todo.id !== action.payload.id
			)
		},
		toggleTodoComplete(state, action) {
			const listName = getCategoriesListName(action.payload.archived)
			const categoryIndex = state[listName].findIndex((category) => category.id === action.payload.categoryId)
			state[listName][categoryIndex].todos = state[listName][categoryIndex].todos.map((todo) => {
				if (todo.id === action.payload.id) todo.completed = !todo.completed
				return todo
			})
		},
		changeCurrentCategory(state, action: PayloadAction<number>) {
			state.currentCategoryIndex = Math.max(0, action.payload)
		},
		archiveCategory(state, action: PayloadAction<number>) {
			state.categories = state.categories.filter((category) => {
				if (category.id !== action.payload) {
					return true
				} else {
					state.archivedCategories.unshift(category)
					return false
				}
			})
			state.currentCategoryIndex = Math.max(
				Math.min(state.categories.length - 1, state.currentCategoryIndex),
				0
			)
		},
		unarchiveCategory(state, action: PayloadAction<number>) {
			state.archivedCategories = state.archivedCategories.filter((category) => {
				if (category.id !== action.payload) {
					return true
				} else {
					state.categories.unshift(category)
					return false
				}
			})
		},
		addCategory(state) {
			state.categories.unshift({
				id: new Date().getTime(),
				categoryName: `Category ${Math.floor(Math.random() * 1000)}`,
				todos: [],
			})
		},
		renameCategory(state, action) {
			const listName = getCategoriesListName(action.payload.archived)
			const categoryIndex = state[listName].findIndex((category) => category.id === action.payload.categoryId)
			state[listName][categoryIndex].categoryName = action.payload.name
		},
		deleteCategory(state, action) {
			const listName = getCategoriesListName(action.payload.archived)
			state[listName] = state[listName].filter((category) => category.id !== action.payload.id)
		},
	},
})

export default categoriesSlice.reducer

export const {
	renameCategory,
	unarchiveCategory,
	deleteCategory,
	addCategory,
	archiveCategory,
	addTodo,
	removeTodo,
	toggleTodoComplete,
	changeCurrentCategory,
} = categoriesSlice.actions
