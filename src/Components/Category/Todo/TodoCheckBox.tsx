import { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { colors } from '../../../Styles/Colors'

interface checkboxProps {
	toggleState: () => void
	completed: boolean
}

const TodoCheckBox: FC<checkboxProps> = ({ toggleState, completed }) => {
	//reanimated
	const dotScale = useSharedValue(+completed)
	const circleScale = useSharedValue(1)
	const circleColor = useSharedValue(completed ? colors.checkBox : '#888')

	const animateCheckboxOnPressIn = () => (circleScale.value = withTiming(0.9, { duration: 100, easing: Easing.out(Easing.exp) }))
	const animateCheckboxOnPressOut = () => (circleScale.value = withTiming(1, { duration: 150, easing: Easing.out(Easing.exp) }))
	const animateCheckboxOnPress = () => {
		dotScale.value = withTiming(Math.abs(dotScale.value - 1), { duration: 250, easing: Easing.out(Easing.exp) })
		circleColor.value = dotScale.value === 0 ? colors.checkBox : '#888'
	}

	const AnimatedStyleDot = useAnimatedStyle(() => {
		return { transform: [{ scale: dotScale.value }] }
	})
	const AnimateStyleCicrle = useAnimatedStyle(() => {
		return { transform: [{ scale: circleScale.value }], borderColor: circleColor.value }
	})

	const onPress = () => {
		toggleState()
		animateCheckboxOnPress()
	}

	return (
		<TouchableOpacity activeOpacity={1} onPressIn={animateCheckboxOnPressIn} onPressOut={animateCheckboxOnPressOut} onPress={onPress}>
			<Animated.View style={[AnimateStyleCicrle, s.checkbox]}>
				<Animated.View style={[AnimatedStyleDot, s.circle]} />
			</Animated.View>
		</TouchableOpacity>
	)
}

const s = StyleSheet.create({
	checkbox: {
		alignItems: 'center',
		borderRadius: 12.5,
		borderWidth: 2,
		height: 25,
		justifyContent: 'space-around',
		marginRight: 14,
		width: 25,
	},
	circle: {
		backgroundColor: colors.checkBox,
		borderRadius: 11.5,
		height: 17,
		width: 17,
	},
})

export default TodoCheckBox
