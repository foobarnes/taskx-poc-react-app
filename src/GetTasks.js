import React from 'react';
import Emoji from './Emoji.js';
import Button from '@material-ui/core/Button';

export default class Tasks extends React.Component {

	constructor(props) {
	    super(props)
	    this.state = {
			loading: true,
			currentTask: null,
			allTasks: null,
		}
	    this.handleClick = this.handleClick.bind(this)
  	}

	async componentDidMount() {
		const url = "https://fayktmygu7.execute-api.us-east-1.amazonaws.com/test/tasks";
		const headers = new Headers();
		const getTasksRequest = new Request(url, {
			method: 'GET',
			headers: headers,
			mode: 'cors',
			cache: 'default'
		});
		const response = await fetch(getTasksRequest);
		const data = await response.json();
		const currentTask = data.body.pop(0);
		this.setState({ allTasks: data.body, currentTask: currentTask, loading: false })
		console.log(data)
	}

	handleClick = () => {
		const allTasks = this.state.allTasks
		const currentTask = allTasks.pop()
		this.setState({ allTasks: allTasks, currentTask: currentTask })
	}

	render() {
		return <div>
			{this.state.loading || !this.state.currentTask ? (
				<div>We're all out of tasks. Sry.</div>
			) : (
				<div>
					<div>{this.state.currentTask.data}</div>
					<br/>
					<div><Emoji symbol="🏆" label="trophy" />&nbsp;&nbsp;&nbsp;{this.state.currentTask.win_criteria}</div>
					<div>{this.state.currentTask.time}</div>
					<br />
					<Button variant="contained" onClick={this.handleClick}>Next</Button>
				</div>
			)}
		</div>
	}
}