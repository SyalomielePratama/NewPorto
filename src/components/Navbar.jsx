import '../assets/css/Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark py-3">
      <div className="container">
        <a className="navbar-brand text-white" href="#">Syalomiele Pratama</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#hero">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#portofolio">Portofolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
