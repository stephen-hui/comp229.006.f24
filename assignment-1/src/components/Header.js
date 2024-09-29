import { Outlet, NavLink } from "react-router-dom";
import image_logo from "../assets/LTH.png";
export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm background-primary shadow">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={image_logo} alt="logo" style={{ width: 70 }} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <i className="fas fa-home"></i> Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/projects">
                  <i className="fas fa-project-diagram"></i> Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  <i className="fa-regular fa-user"></i> About Me
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  <i className="fa-regular fa-folder-open"></i> Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  <i className="fa-solid fa-address-book"></i> Contact Me
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
