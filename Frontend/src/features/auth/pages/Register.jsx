import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
   <main>
            <div className="form-container">
                <h1>Register</h1>
                <form>
                    <input type="text" name='username' placeholder='enter username' />
                    <input type="email" name='email' placeholder='enter email'/>
                    <input type="password" name='password' placeholder='enter password' />
                    <button>Register</button>
                </form>
                <p>Already have an account? <Link className='toggleAuthForm' to="/login">Login</Link></p>
            </div>
        </main>
  )
}

export default Register