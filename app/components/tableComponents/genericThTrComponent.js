import React from 'react';
import { observer } from "mobx-react"
import Checkbox from 'material-ui/Checkbox'
import AddColumnComponent from './addColumnComponent'
import configObject from '../../config/app.js'

@observer
class GenericTh extends React.Component {
	constructor(){
		super()
		this.state = {

		}
	}
	componentWillMount(){
		
	}

	changeHandler(which,e){
		this.state[which] = e.target.value
		this.setState(this.state)
	}
	render() {

		let { getColumns,hiddenColumns } = this.props.tableStore

		let columnsHeadings = getColumns.map((x,index) => {
			let iconClass = configObject.dataTypes.filter(y => y.name == x.dataType)[0].icon
			let IconElem = <i className={ iconClass + ' colicon'}></i>
			let hidden = hiddenColumns.indexOf(x.name) != -1
			return <th key={index} className={ hidden ? 'hide':'taleft pb7'}>
						{ IconElem }
						<span className="colname"> { x.name } </span>
						<i className='fr ion-arrow-down-b cp'></i>
					</th>
		})


		return (
				<tr>
					<th className="tdtrcheck"> <Checkbox className="mlm11" onCheck={ this.props.selectDeselectAllRows }/> </th>
						{ columnsHeadings }
					<AddColumnComponent tableStore={ this.props.tableStore } />
				</tr>
		);
	}
}

export default GenericTh;