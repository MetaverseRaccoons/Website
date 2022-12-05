const Navbar = () => {
  return (
    <nav className="px-2 sm:px-4 py-2.5 h-fit border-b-2 border-gray-200">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
          <span className="ml-2 text-2xl font-black whitespace-nowrap text-gray-800">
            P&O Rijsimulator
          </span>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
