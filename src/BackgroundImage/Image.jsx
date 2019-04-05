import React from 'react';
import { connect } from 'react-redux';
import { actions } from './redux/actions';
import {
	MediaUpload,
	MediaPlaceholder
} from '@wordpress/editor';
class Image extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: {
				repeatStyle: null,
				position: null,
				bgSize: null,
				bgImage: null,
			}
		}
	}
	onChange = (e) => {
		const newFills = JSON.parse(JSON.stringify(this.props.fills));
		newFills[this.props.root][e.target.name] = e.target.value;
		this.props.dispatch(actions.fills(newFills));
	}
	componentDidMount(){
		// this.setState({
		// 	value: this.props.value,
		// })
	}

	isSelected(tv,v){
		if(tv === v) return true;
		return false;
	}

	render(){
		const { root, fills } = this.props;
		const { repeatStyle, position, bgSize, bgImage } = fills[root];
		const style = {
			display: 'flex',
		}
		return (<div>
			<label>Attachment</label>
			<div style={style}>
			<MediaUpload
				onSelect={(value) => {
					const newFills = JSON.parse(JSON.stringify(this.props.fills));
					newFills[this.props.root].bgImage = value.url;
					this.props.dispatch(actions.fills(newFills));
				}}
				type={['image']}
				value={null}
				render={({ open }) => {
					const style = {
						display: 'inline-block',
						width: '50px',
						height: '2rem',
						borderRadius: '5px',
						backgroundImage: `url(${bgImage})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundColor: 'grey',
						cursor: 'pointer',
					}
					return (
						<div onClick={open} style={style}></div>
					);
				}}
			/>
			<select type='text' name='repeatStyle' value={repeatStyle} onChange={this.onChange}>
				<option value='no-repeat' selected={this.isSelected('no-repeat',repeatStyle)}>No Repeat</option>
				<option value='repeat' selected={this.isSelected('repeat', repeatStyle)}>Repeat</option>
				<option value='repeat-x' selected={this.isSelected('repeat-x', repeatStyle)}>Repeat X</option>
				<option value='repeat-y' selected={this.isSelected('repeat-y', repeatStyle)}>Repeat Y</option>
			</select>
			<select type='text' name='position' value={position} onChange={this.onChange}>
				<option value='center' selected={this.isSelected('center', position)}>Center</option>
				<option value='top' selected={this.isSelected('top', position)}>Top</option>
				<option value='right' selected={this.isSelected('right', position)}>Right</option>
				<option value='bottom' selected={this.isSelected('bottom', position)}>Bottom</option>
				<option value='left' selected={this.isSelected('left', position)}>Left</option>
			</select>
			<select type='text' name='bgSize' value={bgSize} onChange={this.onChange}>
				<option value='auto' selected={this.isSelected('auto', position)}>Auto</option>
				<option value='contain' selected={this.isSelected('contain', position)}>Contain</option>
				<option value='cover' selected={this.isSelected('cover', position)}>Cover</option>
			</select>
			{/* <input type='text' name='bgImage' value={bgImage} onChange={this.onChange}/> */}
			</div>
		</div>);
	}
}

function mapStateToProps(state) {
	const { fills } = state;
	return {
		fills,
	};
}
export default connect(mapStateToProps)(Image);