import React from 'react';

class TaskRow extends React.Component {
  constructor(props) {
    super(props);

    this.deleteTask = this.deleteTask.bind(this);
  }

  deleteTask(id) {
    // Rails side /api/tasks/{taskID} with the DELETE method to delete the task 
    let request = new Request(`/api/tasks/${this.props.id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    });

    fetch(request).then(function (response) {
      return response;
    }).then(() => {
      // DELETE complete after again get the task list
      this.props.getTasks();
    }).catch(function (error) {
      console.error(error);
    });
  }

  render() {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.description}</td>
        <td className="text-right">
          <button color="danger" onClick={() => this.deleteTask(this.props.id)}>Delete</button>
                
        </td>
      </tr>
    )
  }
}

export default TaskRow;