import React from 'react';
import LoggerForm from './LoggerForm';
import ListData from './ListData';
import '../styles/worklogger.css'
//This is a parent component
class WorkLogger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],

    };

  };
  updateData = (data) => {
    this.setState({ data: [...this.state.data, data] });
  }

  render() {
    var filteredPersonalData = this.state.data.filter((data) => data.project === "Personal");
    var filteredWorkData = this.state.data.filter((data) => data.project === "Work");
    return (
      <div id="worklogger">
        <h1>Work Logger</h1>
        <LoggerForm updateData={this.updateData} />
        <ListData listdata={filteredPersonalData} />
        <ListData listdata={filteredWorkData} />
      </div>
    );
  }
}
export default WorkLogger;