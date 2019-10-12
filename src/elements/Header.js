import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

const Header = () => {
  const [logado, setLogado] = useState(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setLogado(true)
    } else {
      setLogado(false)
    }
  })
  const logout = () => {
    localStorage.removeItem('token')
    setLogado(false)
    window.location.reload()
  }
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to='/' className="navbar-brand">My money</Link>
        {logado &&
          <ul className='navbar-nav mr-auto'>
            <li className="nav-item">
              <button type="button" onClick={logout} className="btn nav-link">Sair</button>
            </li>
          </ul>
        }
      </div>
    </nav>
  )
}

export default Header