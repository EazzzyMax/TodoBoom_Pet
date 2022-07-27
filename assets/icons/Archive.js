import * as React from 'react'
import Svg, { Path, Rect } from 'react-native-svg'

const SvgComponent = () => (
	<Svg width={26} height={26} fill='none' xmlns='http://www.w3.org/2000/svg'>
		<Path
			d='M2.61 9.1A1 1 0 0 1 3.605 8h18.79a1 1 0 0 1 .995 1.1l-1.3 13a1 1 0 0 1-.995.9H4.905a1 1 0 0 1-.995-.9l-1.3-13ZM4.745 8 4.58 5.978A.905.905 0 0 1 5.482 5h15.036c.53 0 .945.451.902.978L21.255 8'
			stroke='#C4C4C4'
		/>
		<Path d='M6.687 5.3 6.56 3.261a.905.905 0 0 1 .903-.961h11.074c.522 0 .936.44.903.961L19.313 5.3' stroke='#C4C4C4' />
		<Rect x={7.5} y={12} width={11} height={1} rx={0.5} fill='#C4C4C4' />
	</Svg>
)

export default SvgComponent
