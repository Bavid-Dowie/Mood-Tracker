import React, { useState } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';

const Login = (props) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className='Login'>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId='name' bsSize='large'>
          <FormLabel>Name</FormLabel>
          <FormControl
            autoFocus
            type='name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId='email' bsSize='large'>
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId='password' bsSize='large'>
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
          />
        </FormGroup>
        <Button
          block
          bsSize='large'
          disabled={!validateForm()}
          type='submit'
        >
          Login
        </Button>
      </form>
    </div>
  )
}

export default Login
