import { LayoutAnimation, StyleSheet } from 'react-native'
import TodoCheckBox from './TodoCheckBox'
import { TodoContextModal } from '../../../Features/TodoContextModal'
import { FC, memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodoComplete } from '../../../redux/todoSlice'
import { ITodo } from '../../../types/types'
import { layoutCompleteToggleAnimConfig } from '../../../utils/LayoutAnimation'
import { Desc, TextContent, Title, TitleWrapper, TodoWrapper } from './styles'

interface todoItemProps {
	todo: ITodo
	categoryId: number
	archived: boolean
}

const Todo: FC<todoItemProps> = ({ todo, categoryId, archived }) => {
	const [contextVisibility, setContextVisibility] = useState(false)

	const dispatch = useDispatch()
	const toggleState = () => {
		dispatch(toggleTodoComplete({ id: todo.id, categoryId, archived }))
		LayoutAnimation.configureNext(layoutCompleteToggleAnimConfig)
	}

	return (
		<>
			<TodoContextModal
				categoryId={categoryId}
				archived={archived}
				isVisible={contextVisibility}
				todo={todo}
				closeModal={() => setContextVisibility(false)}
			/>
			<TodoWrapper onPress={() => setContextVisibility(true)}>
				<TodoCheckBox toggleState={toggleState} completed={todo.completed} />
				<TextContent style={styles.textContent}>
					<TitleWrapper>
						<Title completed={todo.completed}>{todo.title}</Title>
					</TitleWrapper>
					{!!todo.desc.length && !todo.completed && <Desc>{todo.desc}</Desc>}
				</TextContent>
			</TodoWrapper>
		</>
	)
}

const styles = StyleSheet.create({
	textContent: {
		flexShrink: 1,
	},
})

export default memo(Todo)
