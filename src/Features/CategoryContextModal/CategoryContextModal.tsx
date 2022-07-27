import { LayoutAnimation } from 'react-native'
import { layoutBaseAnimConfig } from '../../utils/LayoutAnimation'

import { FC, memo } from 'react'
import { Button, DeleteTxt, InnerModal, OuterModal, Txt } from './styles'
import { useAppDispatch } from '../../redux/hooks'
import { archiveCategory, deleteCategory, unarchiveCategory } from '../../redux/todoSlice'

interface ICategoryContextProps {
	todosIsEmpty: boolean
	isVisible: boolean
	categoryId: number
	archived: boolean
	closeModal: () => void
}

const CategoryContextModal: FC<ICategoryContextProps> = ({
	todosIsEmpty,
	isVisible,
	closeModal,
	categoryId,
	archived,
}) => {
	const dispatch = useAppDispatch()

	const handleArchive = () => {
		dispatch(archiveCategory(categoryId))
		LayoutAnimation.configureNext(layoutBaseAnimConfig)
	}
	const handleUnarchive = () => {
		dispatch(unarchiveCategory(categoryId))
		LayoutAnimation.configureNext(layoutBaseAnimConfig)
	}
	const handleDelete = () => {
		dispatch(deleteCategory({ id: categoryId, archived }))
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
				{archived ? (
					<Button onPress={handleUnarchive}>
						<Txt>Unarchive</Txt>
					</Button>
				) : (
					<Button disabled={todosIsEmpty} onPress={handleArchive}>
						<Txt>Archive</Txt>
					</Button>
				)}
				<Button onPress={handleDelete}>
					<DeleteTxt>Delete</DeleteTxt>
				</Button>
			</InnerModal>
		</OuterModal>
	)
}

export default memo(CategoryContextModal)
