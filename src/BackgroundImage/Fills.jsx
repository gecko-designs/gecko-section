import React from 'react';
import { connect } from 'react-redux';
import { actions } from './redux/actions';

import Color from './Color';
import Url from './Image';
import LinearGradient from './LinearGradient';

class Fills extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: []
		};
	}

	removeFill = (index) => {
		const newFills = JSON.parse(JSON.stringify(this.props.fills));
		newFills.splice(index, 1);
		this.props.dispatch(actions.fills(newFills));
	}

	addFill = (type) => {
		const newFills = JSON.parse(JSON.stringify(this.props.fills));
		const fill = {};
		fill.type = type;
		if (type === 'color') {
			fill.color = '';
		}
		if (type === 'url') {
			fill.repeatStyle = 'no-repeat';
			fill.position = 'center';
			fill.bgSize = 'cover';
			fill.bgImage = '';
		}
		if(type === 'linear-gradient'){
			fill.angle = '0deg';
			fill.colorStopList =  ['rgba(0,0,0,0.75) 0%', 'rgba(0,0,0,0) 100%'];
		}
		newFills.unshift(fill);
		this.props.dispatch(actions.fills(newFills));
	}

	componentDidUpdate(prevProps, prevState, snapshot){
		if(this.props.fills === prevProps.fills) return;
		this.props.onChange(this.toString(this.props.fills));
	}

	onChange = (index, value) => {
		// console.log('adjusted Value =', value);
		const newValue = JSON.parse(JSON.stringify(this.state.value));
		newValue[index] = value;
		this.setState({ 
			value: newValue
		});
		this.props.onChange(this.toString(newValue));
		// console.log('new Value =', newValue);
	}

	toString = (value) => {
		const stringArray = [];
		value.map((v) => {
			if(v.type === 'color') stringArray.push(v.color);
			if(v.type === 'url') stringArray.push(`${v.position}/${v.bgSize} ${v.repeatStyle} url(${v.bgImage})`);
			if(v.type === 'linear-gradient'){
				stringArray.push(`linear-gradient(${v.angle}, ${v.colorStopList.join(', ')})`);
			}
		})
		return stringArray.join(', ');
	}

	parseValue = (value) => {
		// const values = value.split(' , ');// Cheap way to split but a temp fix
		// console.log(values);
		function splitNoParen(s) {
			let results = [];
			let next;
			let str = '';
			let left = 0, right = 0;

			function keepResult() {
				results.push(str.trim());
				str = '';
			}

			for (var i = 0; i < s.length; i++) {
				switch (s[i]) {
					case ',':
						if ((left === right)) {
							keepResult();
							left = right = 0;
						} else {
							str += s[i];
						}
						break;
					case '(':
						left++;
						str += s[i];
						break;
					case ')':
						right++;
						str += s[i];
						break;
					default:
						str += s[i];
				}
			}
			keepResult();
			return results;
		}
		// console.log('initial', splitNoParen(value));
		const valueStrings = splitNoParen(value);
		const values = [];
		valueStrings.map((string) => {
			const bg = {};
			if(string.includes('linear-gradient')){
				bg.type = 'linear-gradient';
				const prep = string.replace('linear-gradient(', '');
				const lgPropsString = prep.replace(/\)$/g, '');
				const lgProps = splitNoParen(lgPropsString);
				bg.colorStopList = [];
				lgProps.map((prop) => {
					if (prop.includes('deg')) return bg.angle = prop;
					return bg.colorStopList.push(prop);
				});
			}else if(string.includes('url')){
				bg.type = 'url';
				const urlProps = string.split(' ');
				urlProps.map((prop)=>{
					if (prop.includes('url')) {
						const prep = prop.replace('url(', '');
						return bg.bgImage = prep.replace(/\)$/g, '')
					};
					if (prop.includes('repeat')) return bg.repeatStyle = prop;
					if (prop.includes('/')) {
						const positionSize = prop.split('/');
						bg.position = positionSize[0];
						bg.bgSize = positionSize[1];
						return
					}
				})
			}else{
				bg.type = 'color';
				bg.color = string;
			}
			values.push(bg);
		})
		// console.log('Parsed',values);
		this.props.dispatch(actions.fills(values));
		// Property names should match bg propties
		this.setState({
			value: values
		});
	}

	componentDidMount(){
		const { value } = this.props;
		// console.log(value);
		// const value = 'linear-gradient(90deg, rgba(2,0,36,0.5) 0%, rgba(0,212,255,0.3) 100%), linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0.2) 35%, rgba(255,0,0,1) 100%), center/contain no-repeat url(https://via.placeholder.com/500x500), rgba(255,0,0,1)';
		if(value) return this.parseValue(value);
		this.props.dispatch(actions.fills([]));
	}

	render(){
		// const {label, value} = this.props;
		const {label} = this.props;
		const bgArray = this.props.fills;
		const styleFill = {
			display: 'inline-block',
			borderRadius: '999px',
			height: '1.5rem',
			width: '1.5rem',
			margin: '0rem 0.25rem',
			background: '#DDD',
			cursor: 'pointer',
			border: '1px solid #999'
		}
		const styleFillImage = {
			...styleFill,
			background: `center/50% repeat url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2'><rect x='0' y='0' width='1' height='1' style='fill:rgba(0,0,0,0.5)' /><rect x='1' y='1' width='1' height='1' style='fill:rgba(0,0,0,0.5)' /></svg>")`,
		}
		const styleFillGradient = {
			...styleFill, 
			background : 'linear-gradient(0deg, #999 0%, #DDD 100%)',
		}
		return(
			<div >
				<label>Add Fill:</label>
				<p>
					<div onClick={() => this.addFill('linear-gradient')} style={styleFillGradient} /> 
					<div onClick={() => this.addFill('url')} style={styleFillImage} /> 
					<div onClick={() => this.addFill('color')} style={styleFill} />
				</p>
				<hr />
				{bgArray.map((bg, index) => {
					return (
					<div>
						<p onClick={() => this.removeFill(index)}>Remove Fill</p>
						{bg.type === 'color' && <Color key={index} root={index}/>}
						{bg.type === 'url' && <Url key={index} root={index}/>}
						{bg.type === 'linear-gradient' && <LinearGradient key={index} root={index}/>}
						<hr />
					</div>
					);
				})}
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { fills } = state;
	return {
		fills,
	};
}
export default connect(mapStateToProps)(Fills);