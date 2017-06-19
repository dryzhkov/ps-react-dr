import React from 'react';
import TextInput from 'ps-react/TextInput';

/** Optional textbox with a label */
export default function ExampleOptional() {
  return <TextInput 
            htmlId="example-optional-text" 
            label="First Name"
            name="firstname"
            onChange={() => {}}
             />
}