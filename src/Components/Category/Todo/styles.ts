import styled from 'styled-components/native'
import { colors } from '../../../Styles/Colors'
import { TodoDescText, TodoTitleText } from '../../../Styles/Typography'

export const TodoWrapper = styled.TouchableOpacity`
	flex-direction: row;
	margin: 12px 0
`
export const TextContent = styled.View`
	flex-shrink: 1;
`
export const TitleWrapper = styled.View`
	justify-content: center;
	min-height: 26px;
`
type IStyledTitleProps = { completed: boolean }
export const Title = styled(TodoTitleText)<IStyledTitleProps>`
	text-decoration-line: ${(props) => (props.completed ? 'line-through' : 'none')};
	color: ${(props) => (props.completed ? colors.secondaryText : colors.text)};
`
export const Desc = styled(TodoDescText)`
	margin-top: 5px;
`
