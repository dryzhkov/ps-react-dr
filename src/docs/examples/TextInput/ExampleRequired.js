import React from 'react';
import TextInput from 'ps-react/TextInput';

/** Required textbox with a label */
export default function ExampleRequired() {
  return <TextInput 
            htmlId="example-required-text" 
            label="Last Name"
            name="lastname"
            require
            onChange={() => {}}
             />
}