import styled from 'styled-components/native'
import { colors } from '../../Styles/Colors'
import Modal from 'react-native-modal'

export const Input = styled.TextInput`
	background-color: ${colors.inputBackground};
	border-radius: 15px;
	flex-shrink: 1;
	margin-top: 10px;
	min-height: 41px;
	padding: 10px 20px;

	font-size: 18px;
	color: ${colors.text};
`

export const OuterModal = styled(Modal)`
  flex-grow: 1;
  justify-content: flex-end;
  margin: 0;
`
export const InnerModal = styled.View`
  background-color: ${colors.creatingModalBackground};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 0 10px 10px;
`
export const AddBtn = styled.TouchableOpacity`
  align-self: flex-end;
  padding: 10px;
`