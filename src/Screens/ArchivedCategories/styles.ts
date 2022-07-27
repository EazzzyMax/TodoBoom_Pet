import { LinearGradient } from 'expo-linear-gradient'
import styled from 'styled-components/native'
import { colors } from '../../Styles/Colors'

export const ScreenWrapper = styled.View`
	flex: 1;
	background-color: ${colors.background};
`

export const ArchivedCategoriesFlatList = styled.FlatList.attrs(() => ({
	contentContainerStyle: {
		flexGrow: 1,
		padding: 10,
		paddingBottom: 84,
	},
}))``

export const ItemSeparator = styled.View`
	height: 10px;
`

export const BottomLinearGradient = styled(LinearGradient)`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 80px;
`
