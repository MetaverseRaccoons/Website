import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 sm:px-4 py-2.5 border-b-2">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <span className="self-center text-2xl font-extrabold whitespace-nowrap">
            P&O Rijsimulator
          </span>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <Link
                to='/'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/profile'
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to='/login'
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to='/signup'
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
