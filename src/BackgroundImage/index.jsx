import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Fills from './Fills';


export default class Root extends React.Component {
	render(){
		return(
			<Provider store={store} >
				<Fills {...this.props} />
			</Provider>
		);
	}
}