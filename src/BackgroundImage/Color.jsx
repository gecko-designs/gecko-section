import React from 'react';
import { connect } from 'react-redux';
import { actions } from './redux/actions';
import { ColorPicker } from '@wordpress/components';
import { ColorPalette } from '@wordpress/editor';
class Solid extends React.Component {
	constructor(props) {
		super(props);
	}
	
	onChange = (color) => {
		const newFills = JSON.parse(JSON.stringify(this.props.fills));
		newFills[this.props.root].color = color;
		this.props.dispatch(actions.fills(newFills));
	}

	// onChange = (color) => {
	// 	const newFills = JSON.parse(JSON.stringify(this.props.fills));
	// 	newFills[this.props.root].color = `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`;;
	// 	this.props.dispatch(actions.fills(newFills));
	// }

	// parseRGB = (value) => {
	// 	const prep = value.replace('rgba(', '');
	// 	const valueSting = prep.replace(/\)$/g, '');
	// 	const v = valueSting.split(',');
	// 	return { r: parseInt(v[0]), g: parseInt(v[1]), b: parseInt(v[2]), a: parseInt(v[3])}
	// }

	render(){
		const { root, fills } = this.props;
		// console.log(fills[root].color);
		// const value = this.parseRGB(fills[root].color);
		return (<div>
			Color:
			{/* <ColorPicker
				color={value}
				onChangeComplete={this.onChange}
			/> */}
			<ColorPalette
				label='Background Color'
				value={fills[root].color}
				onChange={this.onChange}
			/>
		</div>);
	}
}

function mapStateToProps(state) {
	const { fills } = state;
	return {
		fills,
	};
}
export default connect(mapStateToProps)(Solid);