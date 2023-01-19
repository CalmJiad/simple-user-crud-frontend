import { useEffect, useState } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const [theme, setTheme] = useState("garden");

  useEffect(() => {
    const html = document.querySelector("html");
    html.attributes["data-theme"].value = theme;
  }, [theme]);

  return (
    <div className="bg-primary text-primary">
      <div className="navbar container mx-auto text-secondary">
        <div className="navbar-start">
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            UserManager
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/adduser"}>Add user</Link>
            </li>

            <li>
              <Link to={"/users"}>User list</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button
            onClick={() => {
              setTheme(theme === "luxury" ? "garden" : "luxury");
            }}
            className="btn btn-ghost text-2xl"
          >
            {theme === "garden" ? <BiMoon /> : <BiSun />}
          </button>
        </div>
        <div className="navbar-end">
          <button className="btn btn-primary">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
