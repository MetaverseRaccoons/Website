import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-gray-200 sm:px-4 py-2.5 border-b-2 shadow-lg">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <span className="self-center text-2xl tracking-wider font-bold whitespace-nowrap font-custom">
          P&O Rijsimulator
        </span>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        ></button>
        <div
          className="hidden w-full font-custom font-bold tracking-widest text-sm md:block md:w-auto"
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 md:flex-row md:mt-0 md:border-0">
            <li className="mx-5 hover:shadow-lg">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-5 hover:shadow-lg">
              <Link
                to={
                  window.localStorage.getItem("refresh") === null
                    ? "/login"
                    : "/profile"
                }
              >
                Profile
              </Link>
            </li>
            <li className="mx-5 hover:shadow-lg">
              <Link to="/login">Login</Link>
            </li>
            <li className="mx-5 hover:shadow-lg">
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
