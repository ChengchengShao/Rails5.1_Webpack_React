import React from 'react';
import Header from './header';
import TaskForm from './task-form';
import TaskTable from './task-table';

class App extends React.Component {
  constructor(props) {
    super(props);

    // Initialize the array storing the task list as 
    this.state = {
      tasks: [],
    }

    // bind methods to get the task to this 
    this.getTasks = this.getTasks.bind(this);
  }

  componentDidMount() {
    // To obtain the task list when the component mounting
    this.getTasks()
  }

  getTasks() {
    // Send a GET request to /api/tasks/ Rails side to get a task list
    let request = new Request('/api/tasks', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });

    fetch(request).then(function (response) {
      return response.json();
    }).then(function (tasks) {
      // get the complete Set it to state 
      this.setState({
        tasks: tasks
      });
    }.bind(this)).catch(function (error) {
      console.error(error);
    });
  }

  render() {
    const { tasks } = this.state;

    return (
      <div>
        <Header title='Rails 5.1 + Webpacker + React Example' />
        <div>
        { /* 
            * Pass the 
            getTasks method as props * * 
            in order to reacquire the task list when creating the task due to the TaskForm component 
            */ } 
          <TaskForm getTasks={this.getTasks} />
        { /* 
            * TaskRow (in the TaskTable) when you delete a task in the component due 
            to re-acquire the * task list 
            pass * getTasks method as Props 
            * Tasks in the Task List 
            */ } 
          <TaskTable tasks={tasks} getTasks={this.getTasks} />
        </div>
      </div>
    )
  }
}

export default App;