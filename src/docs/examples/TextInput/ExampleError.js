import React from 'react';
import TextInput from 'ps-react/TextInput';

/** Example textbox with an error */
export default function ExampleError() {
  return <TextInput 
            htmlId="example-error-text" 
            label="First Name"
            name="firstname"
            error="Something went wrong"
            onChange={() => {}}
            />
}