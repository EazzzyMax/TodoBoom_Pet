import { LayoutAnimation } from 'react-native'

import { useDispatch } from 'react-redux'
import { removeTodo } from '../../redux/todoSlice'
import { ITodo } from '../../types/types'
import { FC } from 'react'
import { layoutBaseAnimConfig } from '../../utils/LayoutAnimation'
import { DeleteBtn, DeleteTxt, Desc, InnerModal, OuterModal, Title, Todo } from './styles'

interface todoContextProps {
	isVisible: boolean
	todo: ITodo
	archived: boolean
	categoryId: number
	closeModal: () => void
}

const TodoContextModal: FC<todoContextProps> = ({ archived, categoryId, isVisible, todo, closeModal }) => {
	const dispatch = useDispatch()
	const handleDelete = () => {
		dispatch(removeTodo({ id: todo.id, categoryId, archived }))
		closeModal()
		LayoutAnimation.configureNext(layoutBaseAnimConfig)
	}

	return (
		<OuterModal
			animationIn='zoomIn'
			animationOut='fadeOut'
			animationInTiming={150}
			animationOutTiming={100}
			isVisible={isVisible}
			onBackButtonPress={closeModal}
			onBackdropPress={closeModal}
			backdropOpacity={0.8}
			useNativeDriver={true}
		>
			<InnerModal>
				<Todo>
					<Title>{todo.title}</Title>
					{!!todo.desc && <Desc>{todo.desc}</Desc>}
				</Todo>

				<DeleteBtn onPress={handleDelete}>
					<DeleteTxt>Delete</DeleteTxt>
				</DeleteBtn>
			</InnerModal>
		</OuterModal>
	)
}

export default TodoContextModal
