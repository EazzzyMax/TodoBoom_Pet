import { FC, memo, useCallback, useState } from 'react'
import { LayoutAnimation } from 'react-native'
import { useAppDispatch } from '../../redux/hooks'
import { archiveCategory } from '../../redux/todoSlice'
import { ICategory } from '../../types/types'
import { checkIfEveryTodoDone } from '../../utils/checkIfEverythingDone'
import { layoutBaseAnimConfig } from '../../utils/LayoutAnimation'
import { CategoryHeader } from './CategoryHeader'
import { ArchivedTodosContainer, CategoryWrapper } from './styles'
import { TodosFlatlist } from './styles'
import { Todo } from './Todo'
import { CategoryContextModal } from '../../Features/CategoryContextModal'
import { Button } from '../ArchiveButton'

interface categoryProps {
	category: ICategory
	archived: boolean
}

const Category: FC<categoryProps> = ({ archived, category }) => {
	const dispatch = useAppDispatch()

	const [contextVisibility, setContextVisibility] = useState(false)
	const openCategoryContextModal = () => {
		setContextVisibility(true)
	}

	const [expanded, setExpanded] = useState(false)
	const toggleExpansion = () => {
		setExpanded(!expanded)
		LayoutAnimation.configureNext(layoutBaseAnimConfig)
	}

	const archive = useCallback(() => {
		dispatch(archiveCategory(category.id))
		LayoutAnimation.configureNext(layoutBaseAnimConfig)
	}, [])

	return (
		<CategoryWrapper arhcived={archived}>
			<CategoryContextModal
				todosIsEmpty={!category.todos.length}
				archived={archived}
				isVisible={contextVisibility}
				closeModal={() => setContextVisibility(false)}
				categoryId={category.id}
			/>
			<CategoryHeader
				openCategoryContextModal={openCategoryContextModal}
				expanded={expanded}
				toggleExpansion={() => toggleExpansion()}
				archived={archived}
				categoryName={category.categoryName}
				categoryId={category.id}
			/>

			{archived ? (
				!!expanded && (
					<ArchivedTodosContainer>
						{category.todos.map((item) => {
							return <Todo archived={archived} categoryId={category.id} key={item.id} todo={item} />
						})}
					</ArchivedTodosContainer>
				)
			) : (
				<TodosFlatlist
					horizontal={false}
					data={category.todos}
					renderItem={({ item }) => <Todo archived={archived} categoryId={category.id} todo={item} />}
				/>
			)}
			{!!checkIfEveryTodoDone(category.todos) && !archived && (
				<Button onPress={archive} text='Archive category' />
			)}
		</CategoryWrapper>
	)
}

export default memo(Category)
