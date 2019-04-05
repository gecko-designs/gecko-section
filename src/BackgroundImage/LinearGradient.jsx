import React from 'react';
import { connect } from 'react-redux';
import { actions } from './redux/actions';
import ColorStop from './ColorStop';
import { ColorPicker } from '@wordpress/components';

class LinearGradient extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedStop: null,
			selectedStopColor: {r:0,g:0,b:0,a:0},
		}
	}
	componentDidMount() {

	}

	toString = (value) => {
		return `linear-gradient(${value.angle},${value.colorStopList.join(', ')})`;
	}

	onChange = (e) => {
		const newFills = JSON.parse(JSON.stringify(this.props.fills));
		newFills[this.props.root][e.target.name] = e.target.value;
		this.props.dispatch(actions.fills(newFills));
	}

	onColorStopChange = (index,value) => {
		const newFills = JSON.parse(JSON.stringify(this.props.fills));
		newFills[this.props.root].colorStopList[index] = value;
		this.props.dispatch(actions.fills(newFills));
	}

	sortStops = (a, b) => {
		const aV = a.split(' ');
		const bV = b.split(' ');
		const aAngle = parseInt(aV[1]);
		const bAngle = parseInt(bV[1]);
		// console.log(aAngle, bAngle);
		if (aAngle < bAngle) return -1;
		if (aAngle > bAngle) return 1;
		return 0;
	}

	deleteStop = (index) => {
		const newFills = JSON.parse(JSON.stringify(this.props.fills));
		newFills[this.props.root].colorStopList.splice(index, 1);
		newFills[this.props.root].colorStopList.sort(this.sortStops);
		this.props.dispatch(actions.fills(newFills));
	}

	addStop = (e) => {
		const tool = e.target.getBoundingClientRect();
		const clickLocation = e.pageX - tool.x;
		const stopLocation = Math.floor((clickLocation / tool.width) * 100);
		// console.log(clickLocation, stopLocation + '%');
		const newStop = `rgba(0,0,0,1) ${stopLocation}%`
		// console.log(e.target);
		const newFills = JSON.parse(JSON.stringify(this.props.fills));
		newFills[this.props.root].colorStopList.push(newStop);
		newFills[this.props.root].colorStopList.sort(this.sortStops);
		this.props.dispatch(actions.fills(newFills));
	}

	parseRGB = (value) => {
		const prep = value.replace('rgba(', '');
		const valueSting = prep.replace(/\)$/g, '');
		const v = valueSting.split(',');
		return { r: parseInt(v[0]), g: parseInt(v[1]), b: parseInt(v[2]), a: parseInt(v[3]) }
	}

	selectedStop = (index, color) => {
		// console.log('selected', index, color);
		this.setState({
			selectedStop: index,
			selectedStopColor: this.parseRGB(this.props.fills[this.props.root].colorStopList[index])
		});
	}

	colorPicker = () => {
		const { root, fills } = this.props;
		return(<ColorPicker
			color={this.state.selectedStopColor}
			onChangeComplete={(color) => {
				const newFills = JSON.parse(JSON.stringify(fills));
				const stop = newFills[root].colorStopList[this.state.selectedStop];
				const values = stop.split(' ');
				const colorString = `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`;
				values[0] = colorString;
				const newStop = values.join(' ');
				newFills[root].colorStopList[this.state.selectedStop] = newStop;
				// console.log('new value', newFills);
				this.props.dispatch(actions.fills(newFills));
				// console.log('new stop', newStop);
			}}
		/>);
	}

	render(){
		// const { angle } = this.state.value;
		// const { colorStopList } = this.props.value;
		const { root, fills } = this.props;
		const { angle, colorStopList } = fills[root];
		const previewStyle = {
			background: `${this.toString({ angle: angle, colorStopList: colorStopList })}, center/5% repeat url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2'><rect x='0' y='0' width='1' height='1' style='fill:rgba(0,0,0,0.5)' /><rect x='1' y='1' width='1' height='1' style='fill:rgba(0,0,0,0.5)' /></svg>")`,
			height: '25px',
			width: '100%',
			display: 'block',
			position: 'relative',
			// border: '1px solid grey',
			margin: '0.5rem 0',
		}
		const addStopStyle = {
			position: 'absolute',
			top: '-3px',
			height: '6px',
			width: '100%',
			cursor: 'copy'
		}
		// console.log(this.state.selectedStopColor);
		return (<div>
			Linear Gradient:
			<input type='text' name='angle' value={angle} onChange={this.onChange} />
			<div style={previewStyle}>
				<div style={addStopStyle} onClick={this.addStop}/>
				{colorStopList && colorStopList.map((stop, index) => {
					let canMove = true;
					if(index === 0) canMove = false;
					if(index === colorStopList.length - 1) canMove = false;
					return (<ColorStop value={stop} canMove={canMove} onChange={this.onColorStopChange} index={index} onClick={this.selectedStop}/>);
				})}
			</div>
			{colorStopList && colorStopList.map((stop, index) => {
				let canDelete = true;
				if (index === 0) canDelete = false;
				if (index === colorStopList.length - 1) canDelete = false;
				// This is a bit of a hack to make the state of the colorPicker Change
				return(
					<div>
						{this.state.selectedStop === index && canDelete && <div onClick={() => this.deleteStop(index)}>Delete Stop</div>}
						{this.state.selectedStop === index && this.colorPicker()}
					</div>
				)
			})}
		</div>);
	}
}

function mapStateToProps(state) {
	const { fills } = state;
	return {
		fills,
	};
}
export default connect(mapStateToProps)(LinearGradient);