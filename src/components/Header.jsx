import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <Link to={"/signIn"}>SignIn Page</Link>
                <Link to={"/signUp"}>SignUp Page</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header