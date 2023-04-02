import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <Link to="/" className="logo">
            {/* <img src={OlibrLogo} alt="Olibr logo" /> */}
          </Link>
          <nav className={"nav"}>
            <ul>
              <li>
                <Link to="/blog" className="link">
                  See Blogs
                  {/* <img src={LoginIcon} alt="Login" /> */}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default HomeHeader;
