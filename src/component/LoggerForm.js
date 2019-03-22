//This is my form to input data
import React from 'react';
import '../styles/loggerform.css';

class LoggerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: 'Personal',
      description: '',
      minutes: '',
      descriptionClass: 'hide',
    };

  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitForm = (e) => {
    e.preventDefault();
    //pass the state to the parent - worklogger
    this.props.updateData(this.state);
    this.setState({ project: 'Personal', description: '', minutes: '' });
  }

  render() {
    return (
      <div id="loggerform">
        <form id="inputform" onSubmit={this.submitForm}>
          <div className="labelclass">
            <label htmlFor="project">Project: </label>
            <select className="boxclass" onChange={this.handleChange} name="project">
              <option value="Personal">Personal</option>
              <option value="Work">Work</option>
            </select>
          </div>
          <div className="labelclass">
            <label htmlFor="description"> Description: </label>
            <input className="boxclass" name="description" type="text" onChange={this.handleChange} value={this.state.description} />
          </div>
          <span className={this.state.descriptionClass}>Description length should be greater than 5 characters</span>
          <div className="labelclass">
            <label htmlFor="minutes">Minutes: </label>
            <input className="boxclass" name="minutes" type="number" onChange={this.handleChange} value={this.state.minutes} />
          </div>

          <button className="btn">Add</button>
        </form>
      </div >
    );
  }
}

export default LoggerForm;