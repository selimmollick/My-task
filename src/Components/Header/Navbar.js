import React from 'react'
import Home from '../../Pages/Home/Home'

function Navbar() {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  WOMAN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  MAN
                </a>
              </li>


            </ul>
            <div className='buttons ms-2'>
              <a href='#'>Login</a>/
              <a href='#'>Register</a>
            </div>
            <div className='buttons ms-2'>
              <a href='#'>
                <i class="bi bi-search ms-4"></i>
              </a>
              <a href='#'>
                <i class="bi bi-calendar-heart ms-4"></i>
              </a>
              <a href='#'>
                <i class="bi bi-cart-dash ms-4"></i>
              </a>


            </div>

          </div>
        </div>
      </nav>
      <Home />

    </>
  )
}

export default Navbar