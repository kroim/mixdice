import React from 'react';
import { Button, Form, FormGroup, Label, Input, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Username/Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Username/Email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Password"
          />
          <NavLink href="#">SHOW</NavLink>
        </FormGroup>
        <NavLink href="#">Forgot your Password</NavLink>
        <Button>Log in</Button>
      </Form>
    );
  }
}
