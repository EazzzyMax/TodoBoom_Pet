import styled from 'styled-components/native'
import { colors } from '../../../Styles/Colors'

export const Title = styled.TextInput`
	font-size: 20px;
	color: white;
	flex: 1;
	font-family: Montserrat_600SemiBold;
`

type IStyledHeaderWrapperProps = { archived: boolean }
export const HeaderWrapper = styled.TouchableOpacity<IStyledHeaderWrapperProps>`
	height: 64px;
	background-color: ${colors.categoryHeader};
	flex-direction: row;
	align-items: center;
	padding-left: ${(props) => (props.archived ? '15px' : '20px')};
	border-radius: 25px;
`
export const ContextMenuButtonWrapper = styled.TouchableOpacity`
	margin-left: auto;
	padding: 12px;
`
