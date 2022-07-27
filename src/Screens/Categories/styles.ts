import { Dimensions, FlatList, FlatListProps } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '../../Styles/Colors'
import { ICategory } from '../../types/types'

export const Separator = styled.View`
	width: 10px;
`
export const ScreenWrapper = styled.View`
	flex: 1;
	background-color: ${colors.background};
`

export const CategoriesFlatList = styled(FlatList as new () => FlatList<ICategory>).attrs(
	(props: FlatListProps<ICategory>) => ({
		contentContainerStyle: {
			minWidth: Dimensions.get('window').width, //НЕОБХОДИМО для корректной анимации появления/удаления единственной карточки категории
			paddingHorizontal: 20,
			paddingTop: 10,
			paddingBottom: 84,
			justifyContent: 'space-between',
		},
		ItemSeparatorComponent: Separator,
		...props,
	})
)``
