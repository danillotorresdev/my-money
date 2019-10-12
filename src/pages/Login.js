import React, { useEffect, useState } from 'react'
import { usePost } from '../utils/rest'
import { Redirect } from 'react-router-dom'

const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBlFtV3-JZX30CLm_twN96jd0pItbM-W-k'

const Login = () => {
  const [postData, signin] = usePost(url)
  const [logado, setLogado] = useState(false)
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  useEffect(() => {
    if (Object.keys(postData.data).length > 0) {
      localStorage.setItem('token', postData.data.idToken)
      window.location.reload()
    }
  }, [postData])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setLogado(true)
    }
  })
  const login = async () => {
    await signin({
      email,
      password: senha,
      returnSecureToken: true
    })
  }
  const onChangeEmail = evt => {
    setEmail(evt.target.value)
  }
  const onChangeSenha = evt => {
    setSenha(evt.target.value)
  }

  if (logado) {
    return <Redirect to='/' />
  }

  return (
    <div>
      <h1>Login</h1>
      {postData.error && postData.error.length > 0 && (
        <p>Email e/ou senha invalidos</p>
      )
      }
      <input type='email' value={email} onChange={onChangeEmail} placeholder='Seu e-mail' />
      <input type='password' value={senha} onChange={onChangeSenha} placeholder='Sua senha' />
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login;
