import React from 'react';

export default class InputLinearGradient extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: null,
			dragging: false,
			showColor: false,
		}
		this.ref = React.createRef();
	}

	componentDidMount() {
		this.setState({
			value: this.props.value,
		})
	}

	componentDidUpdate(props, state) {
		if (this.state.dragging && !state.dragging) {
			document.addEventListener('mousemove', this.onMouseMove)
			document.addEventListener('mouseup', this.onMouseUp)
		} else if (!this.state.dragging && state.dragging) {
			document.removeEventListener('mousemove', this.onMouseMove)
			document.removeEventListener('mouseup', this.onMouseUp)
		}
	}

	move = (e) => {
		// console.log('Grabbing', this.ref.current);
		this.setState({
			dragging: true,
			rel: {
				x: e.pageX,
				l: parseInt(this.ref.current.style.left),
			}
		})
	}

	// After finished dragging
	onMouseUp = (e) => {
		if(!this.state.dragging) return;
		const value = JSON.parse(JSON.stringify(this.props.value));;
		const stopValues = value.split(' ');
		const left = this.ref.current.style.left;
		stopValues[1] = left;
		const newValue = stopValues.join(' ');
		console.log(newValue);
		this.props.onChange(this.props.index, newValue)
		this.setState({
			dragging: false,
			x: null,
		})
	}

	onMouseMove = (e) => {
		if (!this.props.canMove) return;
		if (!this.state.dragging) return
		this.setState({
			x: e.pageX - this.state.rel.x,
		})
		const container = this.ref.current.parentElement.offsetWidth;
		const distance = (e.pageX - this.state.rel.x);
		const change = (distance / container) * 100;
		const total = this.state.rel.l + change;
		let left = Math.floor(total);
		if(total < 0)left = 0;
		if(total > 100)left = 100;
		this.ref.current.style.left = `${left}%`;
		e.stopPropagation()
		e.preventDefault()
	}

	onClick = () => {
		const stopValues = this.props.value.split(' ');
		this.props.onClick(this.props.index, stopValues[0])
	}

	render() {
		const stopStyle = {
			height: '10px',
			width: '10px',
			top: '-5px',
			left: '0px',
			display: 'block',
			position: 'absolute',
			border: '1px solid grey',
			transform: 'translateX(-50%)',
			background: 'white',
			borderRadius: '99px',
			cursor: 'pointer',
		}
		const stopValues = this.props.value.split(' ');
		// stopStyle.background = stopValues[0];
		stopStyle.left = stopValues[1];
		return (
			<div style={stopStyle} onMouseDown={this.move} onClick={this.onClick} ref={this.ref}>
			</div>
		);
	}
}