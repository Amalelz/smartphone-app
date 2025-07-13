import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">
                        <img src="https://docs.spring.io/spring-security/reference/_/img/spring-logo.svg" alt="Bootstrap" width="90" height="44"></img>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            
                            <li class="nav-item">
                                <Link class="nav-link" to="/view">View</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/add">Add</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/search">Search</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/delete">Delete</Link>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default Navbar