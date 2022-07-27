import styled from 'styled-components/native'
import { colors } from '../../Styles/Colors'

type IStyledButtonWrapperProps = { disabled: boolean }
export const ButtonWrapper = styled.TouchableOpacity<IStyledButtonWrapperProps>`
	align-items: center;
	background-color: ${(props) => (props.disabled ? colors.buttonDisabled : colors.buttonActive)};
	border-radius: 15px;
	justify-content: space-around;
	width: 90px;
`
