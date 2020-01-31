import React, { Component } from 'react';
import axios from 'axios';

export default class FiboForm extends Component {
	constructor(props){
		super(props);

		this.onChangeValue = this.onChangeValue.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			number: '',
			result: ''
		}

	}

	componentDidMount(){
		this.setState({
			number: 'Number'
		})
	}

	onChangeValue(e){
		this.setState({
			number: e.target.value
		})
	}

	onSubmit(e){
		e.preventDefault();
		axios.get('http://localhost:5000/fibo/' + this.state.number)
		.then(res => {
			console.log(res.data)
			this.setState({
				result: res.data
			})
		});
	}

	render() {
		return (
			<div>
				<h3>What fibonacci number do you want to calculate</h3>
				<form onSubmit={this.onSubmit}>
					<div className = "form-group">
						<input type = "text"
							required
							className = "form-control"
							value = {this.state.number}
							onChange = {this.onChangeValue}
						/>
					</div>

					<div className = "form-group">
						<input type = "submit" value = "Generate" className = "btn btn-primary" />
					</div>
				</form>

				<div>
					Result: {this.state.result}
				</div>
			</div>
		);
	}
}