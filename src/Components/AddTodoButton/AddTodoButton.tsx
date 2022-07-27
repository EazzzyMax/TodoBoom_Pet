import { useNavigationState } from '@react-navigation/native'
import { FC, memo, useState } from 'react'
import { LayoutAnimation } from 'react-native'
import { useDispatch } from 'react-redux'
import { CreateTodoModal } from '../../Features/CreateTodoModal'
import { addCategory } from '../../redux/todoSlice'
import { layoutBaseAnimConfig } from '../../utils/LayoutAnimation'
import { PlusIcon } from '../../../assets/icons'
import { ButtonWrapper } from './styles'

const AddTodoButton: FC = () => {
	const btnIsDisable = useNavigationState((state) => state.index) === 2

	const dispatch = useDispatch()
	const [createModalVisibility, setCreateModalVisibility] = useState(false)
	const createNewCategory = () => {
		dispatch(addCategory())
		LayoutAnimation.configureNext(layoutBaseAnimConfig)
	}

	return (
		<>
			<CreateTodoModal isVisible={createModalVisibility} closeModal={() => setCreateModalVisibility(false)} />
			<ButtonWrapper
				disabled={btnIsDisable}
				onLongPress={createNewCategory}
				onPress={() => setCreateModalVisibility(true)}
			>
				<PlusIcon />
			</ButtonWrapper>
		</>
	)
}

export default memo(AddTodoButton)
