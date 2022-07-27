import * as React from 'react'
import Svg, { Path, Rect } from 'react-native-svg'

const SvgComponent = () => (
	<Svg width={26} height={26} fill='none' xmlns='http://www.w3.org/2000/svg'>
		<Path
			d='M18.537 2.3H7.463a.905.905 0 0 0-.903.961l.075 1.19c.03.477.425.849.903.849h10.925a.905.905 0 0 0 .903-.848l.074-1.19a.905.905 0 0 0-.903-.962Z'
			fill='#C4C4C4'
			stroke='#C4C4C4'
		/>
		<Path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M4.082 6.02a1.405 1.405 0 0 1 1.4-1.52h15.037c.82 0 1.467.7 1.4 1.52l-.097 1.19c-.06.729-.669 1.29-1.4 1.29H5.579c-.731 0-1.34-.561-1.4-1.29l-.097-1.19Z'
			fill='#C4C4C4'
			stroke='#222'
			strokeWidth={0.5}
		/>
		<Path
			d='M3.605 7.25a1.75 1.75 0 0 0-1.741 1.924l1.3 13a1.75 1.75 0 0 0 1.741 1.576h16.19a1.75 1.75 0 0 0 1.742-1.576l1.3-13a1.75 1.75 0 0 0-1.742-1.924H3.605Z'
			fill='#C4C4C4'
			stroke='#222'
			strokeWidth={0.5}
		/>
		<Rect x={7.5} y={12} width={11} height={1} rx={0.5} fill='#222' />
	</Svg>
)

export default SvgComponent
