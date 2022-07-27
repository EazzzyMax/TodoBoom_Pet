import { KeyboardAvoidingView, LayoutAnimation, Platform } from 'react-native'
import CreateTodoInput from './CreateTodoInput'
import { FC, useState } from 'react'
import { CreateIcon } from '../../../assets/icons'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/todoSlice'
import { AddBtn, InnerModal, OuterModal } from './styles'
import { layoutBaseAnimConfig } from '../../utils/LayoutAnimation'

interface createTodoProps {
	isVisible: boolean
	closeModal: () => void
}

const CreateTodoModal: FC<createTodoProps> = ({ isVisible, closeModal }) => {
	const [title, setTitle] = useState<string>('')
	const [desc, setDesc] = useState<string>('')

	const dispatch = useDispatch()
	const createNewTodo = () => {
		if (title.trim().length) {
			dispatch(addTodo({ title: title.trim(), desc: desc.trim() }))
			setTitle('')
			setDesc('')
			closeModal()
			LayoutAnimation.configureNext(layoutBaseAnimConfig)
		}
	}

	return (
		<OuterModal
			isVisible={isVisible}
			onBackButtonPress={closeModal}
			onBackdropPress={closeModal}
			backdropOpacity={0.8}
			useNativeDriver={true}
		>
			<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
				<InnerModal>
					<CreateTodoInput autoFocus={true} value={title} onChangeText={setTitle} placeholder='Title' />
					<CreateTodoInput autoFocus={false} value={desc} onChangeText={setDesc} placeholder='Description' />
					<AddBtn onPress={createNewTodo}>
						<CreateIcon />
					</AddBtn>
				</InnerModal>
			</KeyboardAvoidingView>
		</OuterModal>
	)
}

export default CreateTodoModal
