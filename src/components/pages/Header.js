import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  const [isBlog, setBlog] = useState(false);
  useEffect(() => {
    if (window.location.href.includes("/blog")) {
      setBlog(true);
    }
  }, [window.location.href]);
  return (
    <>
      <header className="site-header">
        <div className="container">
          <Link to="/" className="logo"></Link>
          <nav className={"nav"}>
            <ul>
              <li>
                <Link to={isBlog ? "/add-blog" : "/blog"} className="link">
                  {isBlog ? "Add Blog" : "See Blogs"}
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
