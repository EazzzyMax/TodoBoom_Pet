import { FC, useState } from 'react'
import { ContextMenuIcon, ShowMoreIcon } from '../../../../assets/icons'
import { useAppDispatch } from '../../../redux/hooks'
import { renameCategory } from '../../../redux/todoSlice'
import { ContextMenuButtonWrapper, HeaderWrapper, Title } from './styles'

interface categoryHeaderProps {
	archived: boolean
	categoryName: string
	categoryId: number
	expanded?: boolean
	toggleExpansion?: () => void
	openCategoryContextModal: () => void
}

const CategoryHeader: FC<categoryHeaderProps> = ({
	archived,
	categoryName,
	categoryId,
	expanded,
	toggleExpansion,
	openCategoryContextModal,
}) => {
	const dispatch = useAppDispatch()
	const [name, setName] = useState(categoryName)
	const rename = () => dispatch(renameCategory({ categoryId, archived, name }))

	return (
		<HeaderWrapper disabled={!archived} activeOpacity={0.5} onPress={toggleExpansion} archived={archived}>
			{!!archived && <ShowMoreIcon expanded={expanded} />}
			<Title
				editable={!archived}
				multiline={true}
				maxLength={40}
				onEndEditing={rename}
				onChangeText={(value) => setName(value)}
				value={name}
			/>
			<ContextMenuButtonWrapper onPress={openCategoryContextModal}>
				<ContextMenuIcon />
			</ContextMenuButtonWrapper>
		</HeaderWrapper>
	)
}

export default CategoryHeader
