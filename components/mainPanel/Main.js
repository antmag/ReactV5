import React from 'react';
import './main.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import * as contentMapTmp from '../../source/contentMap.json';
import * as pres from '../../source/pres.json';
import {updateContentMap } from '../../actions';
import {updatePresentation } from '../../actions';


import Content from '../../components/common/content/containers/Content';
import BrowseContentPanel from '../../components/browseContentPanel/containers/BrowseContentPanel';
import Presentation from '../../components/common/content/presentation/containers/Presentation';
import Slid from '../../components/common/content/slid/containers/Slid';
import EditSlidPanel from '../../components/editSlidPanel/containers/EditSlidPanel';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import globalReducer from '../../reducers';

const store = createStore(globalReducer);

export default class Main extends React.Component{
	 constructor(props) {
		 super(props);

	     let temp_json_data;
	     let temp_pres_data;
        
        temp_json_data=contentMapTmp;
        temp_pres_data=pres;

		 this.state = {
		 	json_data:temp_json_data,
		 	json_pres:temp_pres_data,
		 	gold_slid:{id:2,title:"test",txt:"efdsfsfd",content:"temp"},
		 }
		 store.dispatch(updatePresentation(pres));
		 store.dispatch(updateContentMap(contentMapTmp));
	 }


	 render() {
	 	return (
	 		<Provider store={store} >
		 		<div className='container-fluid'>
		 			<div className="row">
		 				<div className='col-md-3 col-lg-3 scrollable'>
		 					<Presentation/>
		 				</div>
						<div className='col-md-6 col-lg-6'>
							<EditSlidPanel/>
						</div>
						<div className='col-md-3 col-lg-3'>
							<BrowseContentPanel/>
						</div>
				 	</div>
				</div>
			</Provider>
	 	);
	 }
}



