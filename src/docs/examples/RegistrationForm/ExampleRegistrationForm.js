import React from 'react';
import RegistrationForm from 'ps-react/RegistrationForm';

/** Registration from with email and password inputs */
export default class ExampleRegistrationForm extends React.Component {
  onSubmit = (user) => {
    console.log(user);
  }

  render() {
    return <RegistrationForm 
              confirmationMessage="Success!!!" 
              onSubmit={this.onSubmit}
              minPasswordLength={8}
              />
  }
}