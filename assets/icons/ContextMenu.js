import * as React from 'react'
import Svg, { Circle } from 'react-native-svg'

const SvgComponent = () => (
	<Svg width={26} height={26} fill='none' xmlns='http://www.w3.org/2000/svg'>
		<Circle cx={13} cy={8} r={1.5} fill='#888' />
		<Circle cx={13} cy={13} r={1.5} fill='#888' />
		<Circle cx={13} cy={18} r={1.5} fill='#888' />
	</Svg>
)

export default SvgComponent
