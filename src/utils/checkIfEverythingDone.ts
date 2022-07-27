import { ITodo } from '../types/types'

export const checkIfEveryTodoDone = (todos: ITodo[]) => {
	return todos.every((todo) => todo.completed) && todos.length
}
