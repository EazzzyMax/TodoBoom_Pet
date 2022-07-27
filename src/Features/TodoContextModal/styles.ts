import styled from 'styled-components/native'
import Modal from 'react-native-modal'
import { colors } from '../../Styles/Colors'
import { AppText, TodoDescText, TodoTitleText } from '../../Styles/Typography'

export const OuterModal = styled(Modal)`
	align-items: center;
	flex-grow: 1;
	justify-content: flex-end;
	margin-bottom: 200px;
`

export const InnerModal = styled.View`
  align-self: flex-end;
`

export const Todo = styled.View`
  background-color: ${colors.contextBackground};
  border-radius: 15px;
  margin-bottom: 10px;
  padding: 15px 20px;
`

export const Title = styled(TodoTitleText)``
export const Desc = styled(TodoDescText)``

export const DeleteBtn = styled.TouchableOpacity`
  align-self: flex-end;
  background-color: ${colors.contextBackground};
  border-radius: 15px;
  height: 50px;
  justify-content: space-around;
  padding: 0 20px;
`

export const DeleteTxt = styled(AppText)`
  color: ${colors.alert};
  font-size: 20px;
`