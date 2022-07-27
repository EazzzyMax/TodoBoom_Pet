import { FlatList, FlatListProps } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '../../Styles/Colors'
import { sizes } from '../../Styles/Sizes'
import { ITodo } from '../../types/types'

type IStyledCategoryWrapperProps = { arhcived: boolean }
export const CategoryWrapper = styled.View<IStyledCategoryWrapperProps>`
	background-color: ${colors.categoryBackground};
	border-radius: 25px;
	width: ${(props) => (props.arhcived ? sizes.ARCHIVED_CARD_WIDTH : sizes.CARD_WIDTH)}px;
`

export const ArchivedTodosContainer = styled.View`
	padding: 3px 15px;
`

export const TodosFlatlist = styled(FlatList as new () => FlatList<ITodo>).attrs(
	(props: FlatListProps<ITodo>) => ({
		contentContainerStyle: {
			paddingVertical: 3,
			paddingHorizontal: 15,
			flexGrow: 1,
		},
		...props,
	})
)``

