import * as React from 'react'
import Svg, { Rect, Path } from 'react-native-svg'

const SvgComponent = () => (
	<Svg width={26} height={26} fill='none' xmlns='http://www.w3.org/2000/svg'>
		<Rect x={2.5} y={2.5} width={21} height={21} rx={1.5} fill='#C4C4C4' stroke='#C4C4C4' />
		<Path d='m7.477 12.456 4.887 4.887 7.19-7.19' stroke='#222' strokeLinecap='round' strokeLinejoin='round' />
	</Svg>
)

export default SvgComponent
