import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <header>
                <h1>Chalk Talk</h1>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </header>
           
            <div>
                <h2>(About the App)</h2>

                <p>About the page</p> 
            </div>
          
        </div>
    )
}

export default Home
