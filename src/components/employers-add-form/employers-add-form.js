import {Component} from "react";

import './employers-add-form.css';

class EmployersAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    }
  }

  onValueChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
}

  render() {
    const {name, salary} = this.state;

    return (
      <div className="app-add-form">
        <h3>Add a new employee</h3>
        <form
          className="add-form d-flex">
          <input type="text"
                 className="form-control new-post-label"
                 placeholder="What is the employee's name?"
                 name="name"
                 value={name}
                 onChange={this.onValueChange} />
          <input type="number"
                 className="form-control new-post-label"
                 placeholder="Salary in $?"
                 name="salary"
                 value={salary}
                 onChange={this.onValueChange} />

          <button type="submit"
                  className="btn btn-outline-light">Add</button>
        </form>
      </div>
    )
  }
}

export default EmployersAddForm;
