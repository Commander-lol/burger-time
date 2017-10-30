import * as React from 'react'
import color from 'color'

export default class Slice extends React.Component {
	render() {
		const col = color(this.props.color)
		const height = (this.props.height || 1) * 40
		return (
			<svg className="slice" height={height} viewbox="0 0 500 500">
				<rect 
					x={0} 
					y={0}
					rx={10}
					ry={10}
					width="100%"
					height={height}
					style={{fill: col.hex(), stroke: col.darken(0.5).hex() }}
				/>
			</svg>
		)
	}
}