import React from 'react';
import Emoji from './Emoji.js';
import UploadButtonView from './UploadButtonView.js';

import Button from '@material-ui/core/Button';

export default class TaskView extends React.Component {

	constructor(props) {
	    super(props)
	    this.state = {
			loading: true,
			currentTask: null,
			allTasks: null,
		}
	    this.handleClick = this.handleClick.bind(this)
	    this.getTasks = this.getTasks.bind(this)
	    this.resetTasks = this.resetTasks.bind(this)
  	}

	componentDidMount() {
		this.getTasks()
	}

	handleClick = () => {
		const allTasks = this.state.allTasks
		const currentTask = allTasks.pop()
		this.setState({ allTasks: allTasks, currentTask: currentTask })
	}

	resetTasks() {
		this.getTasks()
	}

	render() {
		return <div>
			{this.state.loading &&
				<div>loading...</div>
			}
			{!this.state.currentTask && !this.state.loading &&
				<div>
					<div>We're all out of tasks. Sry.</div>
					<br />
					<div>
						<Button variant="contained" size="large"onClick={this.resetTasks}><b>Gimme 'em back.</b></Button>
					</div>
				</div>
			}
			{this.state.currentTask &&
				<div>
					<div><b>{this.state.currentTask.data}</b></div>
					<br/>
					<div><Emoji symbol="🏆" label="trophy" />&nbsp;&nbsp;&nbsp;{this.state.currentTask.win_criteria}</div>
					<div>{this.state.currentTask.time}</div>
					<br />
					<div>
						<Button variant="contained" size="large" onClick={this.handleClick}><b>Next</b></Button>
					</div>
					<br />
					<br />
					<br />
					<UploadButtonView />
			    </div>
			}
		</div>
	}

	async getTasks() {
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
		const randomIndex = Math.floor(Math.random() * data.body.length)
		const currentTask = data.body.splice(randomIndex, 1)[0];
		this.setState({ allTasks: data.body, currentTask: currentTask, loading: false })
		console.log(data)
	}
}