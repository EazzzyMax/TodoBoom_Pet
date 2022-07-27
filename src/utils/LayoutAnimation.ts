import { LayoutAnimation } from 'react-native'

export const layoutBaseAnimConfig = {
	duration: 300,
	update: {
		type: LayoutAnimation.Types.easeInEaseOut,
	},
	delete: {
		duration: 150,
		type: LayoutAnimation.Types.easeInEaseOut,
		property: LayoutAnimation.Properties.scaleXY,
	},
	create: {
		duration: 250,
		type: LayoutAnimation.Types.easeInEaseOut,
		property: LayoutAnimation.Properties.scaleXY,
	},
}

export const layoutCompleteToggleAnimConfig = {
	duration: 200,
	update: {
		type: LayoutAnimation.Types.easeInEaseOut,
	},
	delete: {
		duration: 100,
		type: LayoutAnimation.Types.easeInEaseOut,
		property: LayoutAnimation.Properties.opacity,
	},
	create: {
		duration: 100,
		type: LayoutAnimation.Types.easeInEaseOut,
		property: LayoutAnimation.Properties.opacity,
	},
}
