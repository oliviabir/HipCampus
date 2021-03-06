import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './LoginForm.css'

const LoginForm = () => {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)

  const [credential, setCredential] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors([])

    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json()
        if (data && data.errors) setErrors(data.errors)
      })
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <ul>
        {errors.map((error, idx) =>
            <li key={idx}>{error}</li>)}
      </ul>
      <label className='inputField'>
        <input
          className='input'
          type="text"
          value={credential}
          placeholder='Username or Email'
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label className='inputField'>
        <input
          className='input'
          type="password"
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit" className='button'>Log In</button>
    </form>
  );
}

export default LoginForm;
