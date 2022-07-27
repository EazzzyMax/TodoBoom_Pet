import * as React from 'react'
import Svg, { Rect } from 'react-native-svg'
import { colors } from '../../src/Styles/Colors'

const PlusIcon = () => (
	<Svg width={20} height={20} fill='none' xmlns='http://www.w3.org/2000/svg'>
		<Rect x={9} width={2} height={20} rx={1} fill={colors.navbarBackground} />
		<Rect x={20} y={9} width={2} height={20} rx={1} transform='rotate(90 20 9)' fill={colors.navbarBackground} />
	</Svg>
)
export default PlusIcon
