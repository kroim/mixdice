import React from 'react';
import { Button, Form, FormGroup, Label, Input, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="username">Username/Email</Label>
          <Input
            type="email"
            name="email"
            id="username"
            placeholder="Username/Email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
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
