import React from 'react'

function NavbarAdmin() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Dashboard <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Add User</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Delete User</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">User Detail</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default NavbarAdmin;
