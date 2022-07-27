import * as React from 'react'
import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

const SvgComponent = ({ expanded }) => (
	<View style={{ transform: [{ rotate: expanded ? '180deg' : '0deg' }], marginRight: 10 }}>
		<Svg width={26} height={26} fill='none' xmlns='http://www.w3.org/2000/svg'>
			<Path d='m22 9-9 9-9-9' stroke='#888' strokeWidth={2} strokeLinecap='round' />
		</Svg>
	</View>
)

export default SvgComponent
