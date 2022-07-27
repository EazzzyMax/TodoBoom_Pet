import { FC, useRef } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { Input } from './styles'

interface ICreateTodoInputProps {
	autoFocus: boolean
}

const CreateTodoInput: FC<ICreateTodoInputProps & TextInputProps> = ({ autoFocus, ...props }) => {
	const inputRef = useRef<TextInput>()

	return (
		<Input
			ref={inputRef}
			onLayout={() => autoFocus && setTimeout(() => inputRef?.current.focus(), 10)}
			keyboardAppearance='dark'
			multiline={true}
			placeholderTextColor='#aaa'
			{...props}
		/>
	)
}

export default CreateTodoInput
