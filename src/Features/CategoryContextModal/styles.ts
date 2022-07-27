import styled from 'styled-components/native'
import Modal from 'react-native-modal'
import { colors } from '../../Styles/Colors'
import { AppText } from '../../Styles/Typography'

export const OuterModal = styled(Modal)`
	/* align-items: center; */
	flex-grow: 1;
	justify-content: flex-end;
	margin-bottom: 65px;
`
export const InnerModal = styled.View`
	align-self: flex-end;
	background-color: ${colors.buttonActive};
	background-color: ${colors.contextBackground};
	border-radius: 15px;
	padding-top: 17px;
	align-self: stretch;
`

type IStyledButtonProps = { disabled?: boolean }
export const Button = styled.TouchableOpacity<IStyledButtonProps>`
	height: 45px;
	opacity: ${(props) => (props.disabled ? 0.2 : 1)};
	padding: 0 30px;
`

export const Txt = styled(AppText)`
	font-size: 20px;
`
export const DeleteTxt = styled(AppText)`
	color: ${colors.alert};
	font-size: 20px;
`
