import React from 'react';

class BoxModel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			defaultValue: null,
			value: {
				position: { top: null, left: null, right: null, bottom: null, },
				margin: { top: null, left: null, right: null, bottom: null, },
				padding: { top: null, left: null, right: null, bottom: null, },
			},
		};
	}

	componentDidMount() {
		this.setState({
			value: {
				...this.state.value,
				...this.props.value
			},
		});
	}

	updateValue(k,t,v) {
		const {value} = this.state;
		const newValue = {...value};
		newValue[k][t] = (!v)? null: v;
		this.setState({
			value: newValue,
		})
		this.props.onChange(newValue);
	}

	// Render the component.
	render() {
		const { value } = this.state;
		return (
			<div className="box-model">
				<div className="box-model__property">Position</div>
				<div className="box-model__inputs">
					<div className="box-model__input">
						<input id='box-model-top' value={value.position.top} type='text' onChange={(e) => { this.updateValue('position', 'top', e.target.value)}} />
						<label htmlFor='box-model-top'>Top</label>
					</div>
					<div className="box-model__input">
						<input id='box-model-right' value={value.position.right} type='text' onChange={(e) => { this.updateValue('position','right', e.target.value) }} />
						<label htmlFor='box-model-right'>Right</label>
					</div>
					<div className="box-model__input">
						<input id='box-model-bottom' value={value.position.bottom} type='text' onChange={(e) => { this.updateValue('position','bottom', e.target.value) }} />
						<label htmlFor='box-model-bottom'>Bottom</label>
					</div>
					<div className="box-model__input">
						<input id='box-model-left' value={value.position.left} type='text' onChange={(e) => { this.updateValue('position','left', e.target.value) }} />
						<label htmlFor='box-model-left'>Left</label>
					</div>
				</div>


				<div className="box-model__property">Margin</div>
				<div className="box-model__inputs">
					<div className="box-model__input">
						<input id='box-model-top' value={value.margin.top} type='text' onChange={(e) => { this.updateValue('margin', 'top', e.target.value) }} />
						<label htmlFor='box-model-top'>Top</label>
					</div>
					<div className="box-model__input">
						<input id='box-model-right' value={value.margin.right} type='text' onChange={(e) => { this.updateValue('margin','right', e.target.value) }} />
						<label htmlFor='box-model-right'>Right</label>
					</div>
					<div className="box-model__input">
						<input id='box-model-bottom' value={value.margin.bottom} type='text' onChange={(e) => { this.updateValue('margin','bottom', e.target.value) }} />
						<label htmlFor='box-model-bottom'>Bottom</label>
					</div>
					<div className="box-model__input">
						<input id='box-model-left' value={value.margin.left} type='text' onChange={(e) => { this.updateValue('margin','left', e.target.value) }} />
						<label htmlFor='box-model-left'>Left</label>
					</div>
				</div>


				<div className="box-model__property">Padding</div>
				<div className="box-model__inputs">
					<div className="box-model__input">
						<input id='box-model-top' value={value.padding.top} type='text' onChange={(e) => { this.updateValue('padding', 'top', e.target.value) }} />
						<label htmlFor='box-model-top'>Top</label>
					</div>
					<div className="box-model__input">
						<input id='box-model-right' value={value.padding.right} type='text' onChange={(e) => { this.updateValue('padding','right', e.target.value) }} />
						<label htmlFor='box-model-right'>Right</label>
					</div>
					<div className="box-model__input">
						<input id='box-model-bottom' value={value.padding.bottom} type='text' onChange={(e) => { this.updateValue('padding','bottom', e.target.value) }} />
						<label htmlFor='box-model-bottom'>Bottom</label>
					</div>
					<div className="box-model__input">
						<input id='box-model-left' value={value.padding.left} type='text' onChange={(e) => { this.updateValue('padding','left', e.target.value) }} />
						<label htmlFor='box-model-left'>Left</label>
					</div>
				</div>
			</div>
		);
	}
}

export default BoxModel;