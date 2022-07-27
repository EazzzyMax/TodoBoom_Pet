import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '../../Styles/Colors'

export const ButtonWrapper = styled(TouchableOpacity)`
	border-width: 2px;
	border-color: ${colors.buttonActive};
	padding: 12px 0;
	align-items: center;
	justify-content: center;
	border-radius: 15px;
	margin: 0 10px 10px;
`
export const Tittle = styled.Text`
	font-size: 24px;
	color: ${colors.buttonActive};
	font-family: 'Montserrat_600SemiBold';
`
