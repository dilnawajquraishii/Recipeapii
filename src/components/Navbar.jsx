import React from 'react'
import { Link } from 'react-router-dom'
import { IoFastFood } from "react-icons/io5";


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  "style={{background:'white',backgroundColor:'orange'}}>
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">Home</Link> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <Link className=" nav-link active " aria-current="page" to={'/'} style={{ fontSize: '27px',color:'green', fontWeight: '900px', marginReght:'10px',textAlign: 'center' }}> < IoFastFood size={"38px"}style={{marginRight:'20px',color:'blue'}} />Recipe Website</Link>
              </li>
              {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/Signup'}>Signup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/login'}>login</Link>
        </li> */}

              {/* <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li> */}
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
