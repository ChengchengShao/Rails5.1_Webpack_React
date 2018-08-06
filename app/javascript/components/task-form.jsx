import React from 'react';

class TaskForm extends React.Component {
  constructor(props) {
    super(props)

    // input form should set the state for (Input) 
    this.state = {
      title: '',
      description: ''
    }
    // Bind the method that creates the task to 
    this.createTask = this.createTask.bind(this);
  }

  createTask(event) {
    // Create a task by hitting /api/tasks on the Rails side with the POST method 
    let request = new Request('/api/tasks', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        title: this.state.title,
        description: this.state.description
      })
    });

    fetch(request).then(function (response) {
      return response.json();
    }).then((task) => {
      // when the task creation is successful, a task list again to get 
      this.props.getTasks();
    }).catch(function (error) {
      console.error(error);
    }).finally(() => {
      this.setState({
        title: '',
        description: ''
      })
    });

    // preventDefault counteract onSubmit event browser caused by 
    // page and this description is not resulting in transition 
    event.preventDefault();
  }





  render() {
    let { title, description } = this.state;

    return (
      <form onSubmit={this.createTask}>

          <label >Title</label>
          
          <input
            type="text" value={title}
            placeholder="Title"
            onChange={(e) => {
              this.setState({
                title: e.target.value
              })
            }}
          />

        
        

          <label >Description</label>
          <input
            type="text" value={description}
            placeholder="Description"
            onChange={(e) => {
              this.setState({
                description: e.target.value
              })
            }}
          />

        < input  type = "submit"  value = "Create Task"  />
      </form>
    )
  }
}

export default TaskForm;