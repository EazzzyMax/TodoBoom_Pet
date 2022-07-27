import React, { FC } from 'react'
import { ButtonWrapper, Tittle } from './styles'

interface buttonProps {
	text: string
	onPress?: () => void
}

const Button: FC<buttonProps> = ({ text, onPress }) => {
	return (
		<ButtonWrapper onPress={onPress}>
			<Tittle>{text}</Tittle>
		</ButtonWrapper>
	)
}

export default Button
