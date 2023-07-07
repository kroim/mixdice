import React from 'react';
import { Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="example_username">Username</Label>
          <Input
            type="username"
            name="username"
            id="example_username"
            placeholder="Username"
          />
        </FormGroup>
        <FormGroup>
          <CustomInput
            type="checkbox"
            id="exampleCustomCheckbox"
            label="I agree to the collection of information in the cookies, I agree with Privacy Policy and the Terms of Use, Gambling isn’t forbidden by my local authorities and I’m at least 18 years old."
          />
        </FormGroup>
        <Button>Start Winning</Button>
      </Form>
    );
  }
}
