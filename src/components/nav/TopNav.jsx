import christLogo from "../../assets/christ-logo.png";

function TopNav() {
  return (
    <>
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={christLogo} className="image" />
          </a>
          <div
            className="navbar-burger js-burger"
            data-target="navbarExampleTransparentExample"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Home
            </a>
            <a className="navbar-item" href="/speakers">
              Speakers
            </a>
            <a className="navbar-item" href="/contact">
              Contact
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="bd-tw-button button" href="/schedules">
                    <span className="icon">
                      <i className="fa-solid fa-calendar-days"></i>
                    </span>
                    <span> Schedules </span>
                  </a>
                </p>
                <p className="control">
                  <a
                    className="button has-text-white is-primary"
                    href="/register"
                  >
                    <span className="icon">
                      <i className="fas fa-right-to-bracket"></i>
                    </span>
                    <span className=""> Register Now! </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default TopNav;
