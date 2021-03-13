import React from "react";
import { useHistory, NavLink } from "react-router-dom";

function NavbarAdmin() {
	let history = useHistory();

	const handleLogOut = () => {
		localStorage.removeItem("UserAdmin");
		localStorage.removeItem("exp");
		//chuyen huong ve trang auth
		history.push("/login");
	};

	return (
		<header>
			<nav className="navbar navbar-expand-sm navbar-light bg-light">
				<button
					className="navbar-toggler d-lg-none"
					type="button"
					data-toggle="collapse"
					data-target="#collapsibleNavId"
					aria-controls="collapsibleNavId"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="collapsibleNavId">
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/dashboard"
								activeClassName="active"
							>
								User
							</NavLink>
						</li>
						<li className="nav-item dropdown">
							<NavLink
								className="nav-link dropbtn"
								to="/dashboard/movie"
								activeClassName="active"
							>
								Movie
							</NavLink>
							<div className="dropdown-content">
								<NavLink
									className="nav-link dropbtn"
									to="/dashboard/movie/add"
									activeClassName="active"
								>
									Add New Movie
								</NavLink>
							</div>
						</li>
						<li className="nav-item">
							<button className="btn btn-info" onClick={() => handleLogOut()}>
								Logout
							</button>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default NavbarAdmin;
