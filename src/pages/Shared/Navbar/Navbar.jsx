import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import logo from "../../../assets/002-lightbulb.png";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then(toast.success("Log Out successful!")).catch();
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    isActive ? "btn btn-info" : "default"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/blog">My Toys</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Add A Toy</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blogs</NavLink>
              </li>
            </ul>
          </div>
          <Link className="normal-case text-xl flex items-center ">
            <div className="lg:bg-pink-400 lg:p-3 rounded-full gap-1">
              <img className="pl-2 lg:pl-0 lg:w-7" src={logo} alt="" />
            </div>
            <span className="text-4xl text-slate-700 font-mono font-bold">Learn<span className="text-yellow-400">IQ</span></span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4 font-semibold text-lg">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
                <NavLink
                  to="/alltoys"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  All Toys
                </NavLink>
              </li>
            {user && (
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  My Toys
                </NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Add A Toy
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-6 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <button onClick={handleLogOut} className="btn btn-info">
                log Out
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-info">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
