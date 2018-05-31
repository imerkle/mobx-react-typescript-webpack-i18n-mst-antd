import * as React from 'react';
import { observer, inject } from 'mobx-react';
import {
	STORE_LANGUAGE
} from '../../constants';

@inject(STORE_LANGUAGE)
@observer
export class Language extends React.Component<any, {}>{
	render(){
		const { language, resource } = this.props;
		if (resource.indexOf('.') !== -1 ) {
			return (<span>
      				{language.resource[resource.split('.')[0]][resource.split('.')[1]]}
    				</span>);
		}else{
			return language.resource[resource];
		}
	}
}
