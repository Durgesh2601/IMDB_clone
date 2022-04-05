import "./Navbar.css"
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
export const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
              <img id="logo" src={logo} alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
            </ul>
            <div className="d-flex">
            <Link to="/signin"><button className="btn btn-outline-success">Sign In</button></Link>
            <Link to="/signup"><button className="btn btn-outline-danger ms-3">Sign Up</button></Link>
            
            </div>
          </div>
        </div>
      </nav>
        </>
    )
}