import "./Navbar.css"
import logo from "../Images/logo.png"
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
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Link</a> */}
              </li>
            </ul>
            <div className="d-flex">
            <button className="btn btn-outline-success">Sign In</button>
            <button className="btn btn-outline-danger ms-3">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>
        </>
    )
}