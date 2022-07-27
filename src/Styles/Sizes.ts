import { Dimensions } from 'react-native'

const baseSizes = {
	windowWidth: Dimensions.get('window').width,
	windowHeight: Dimensions.get('window').height,
}

export const sizes = {
	CARD_WIDTH: baseSizes.windowWidth - 40,
	ARCHIVED_CARD_WIDTH: baseSizes.windowWidth - 20,
	WIDTH_OF_SCROLL: baseSizes.windowWidth - 30,
}
