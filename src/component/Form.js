import React from 'react';
import '../styles/form.css'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      nameErrorClass: "default",
      nameValid: 0,
      emailErrorClass: "default",
      emailValid: 0,

    };

  };

  handleChange = (e) => {
    //e.preventDefault(); This should be on the form's onSubmit event not here
    //validation for my form
    // name should be atleast eight characters
    // I can not do this validation here as the validation is being applied to the input immediately before end of string
    this.setState({ [e.target.name]: e.target.value });

  }

  submitform = (e) => {
    e.preventDefault();
    console.log(e.target);
    this.setState({ name: "", email: "" });
  }

  validateName = () => {
    var nameErrorClass, nameValid;
    if (this.state.name.length < 8) {
      nameErrorClass = "nameinvalid";
      nameValid = 0;
    }
    else {
      nameErrorClass = "default";
      nameValid = 1;
    }
    this.setState({ nameErrorClass, nameValid });


  }

  validateEmail = () => {
    var emailErrorClass, emailValid;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
      emailErrorClass = "default";
      emailValid = 1;

    }
    else {
      emailErrorClass = "emailinvalid";
      emailValid = 0;

    }
    this.setState({ emailErrorClass, emailValid });
  }


  render() {
    return (
      <div>
        <form onSubmit={this.submitform}>
          <div className="validFormin">
            <input className="forminput" name="name" placeholder="Name" onChange={this.handleChange} onBlur={this.validateName} value={this.state.name} />
            <label className={this.state.nameErrorClass}>Name validation errors here</label>
          </div>
          <div className="validFormin">
            <input className="forminput" name="email" placeholder="Email" onChange={this.handleChange} onBlur={this.validateEmail} value={this.state.email} />
            <label className={this.state.emailErrorClass}>Email validation errors here</label>
          </div>
          <button className="validFormin" disabled={this.state.emailValid && this.state.nameValid ? false : true}>Submit</button>
        </form>

      </div >

    );
  }
}

export default Form;