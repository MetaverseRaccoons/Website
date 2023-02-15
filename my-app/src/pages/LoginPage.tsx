import * as backend from "../apis/backend";

const testfunc = async () => {
  const account: backend.CreateAccountRequest = {
    username: "test123",
    password1: "geeninspiratie",
    password2: "geeninspiratie",
    email: "test123@test.be",
    national_registration_number: "02.02.03-21373",
    is_learner: false,
    is_instructor: false,
    has_drivers_license: false,
    is_shareable: false,
  };

  const createAccountResponse = await backend.createAccount(account);
};

/*
<label className="w-full text-xl font-bold mt-4 mb-4">
          Sign up
        </label>
*/
const LoginPage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="h-1/2 w-2/3 rounded border-2 flex items-center justify-center">
        <form className="w-full max-w-lg pt-12">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Naam
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
                id="naam"
                type="text"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email adres
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
                id="email"
                type="email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Paswoord
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
                id="password1"
                type="password"
              />
            </div>
            <div className="w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Paswoord (opnieuw)
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
                id="password2"
                type="password"
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Rijksregisternummer
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
              id="nationalregistrationnumber"
              type="text"
              placeholder="00.00.00-000.00"
            />
          </div>
          <div className="flex justify-center flex-wrap mb-2 ">
            <label className="w-1/3 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Leerling
            </label>
            <input
              id="leerling"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div className="flex justify-center flex-wrap mb-2 ">
            <label className="w-1/3 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Rijbewijs
            </label>
            <input
              id="rijbewijs"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div className="flex justify-center flex-wrap mb-6 ">
            <label className="w-1/3 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Deel gegevens
            </label>
            <input
              id="deelgegevens"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div className="flex justify-center mb-12">
            <button
              onClick={testfunc}
              className="flex-shrink-0 w-1/2 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-normal font-bold border-4 text-white py-1 px-2 rounded"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
