import * as backend from '../apis/backend';

const testfunc = async () => {

  const account: backend.CreateAccountRequest = {
    username: 'test',
    password1: 'test',
    password2: 'test',
    email: 'test@test.be',
    national_registration_number: '02.02.03-21373',
    is_learner: false,
    is_instructor: false,
    has_drivers_license: false,
    is_shareable: false
  }

  const createAccountResponse = await backend.createAccount(account)
  

}

const LoginPage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="h-1/2 w-2/3 rounded border-2 flex items-center justify-center">
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Naam
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
                id="grid-first-name"
                type="text"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email adres
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
                id="grid-last-name"
                type="email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
                id="grid-password"
                type="password"
              />
            </div>
          </div>
        </form>
        <div className='flex justify-center'>
            <button onClick={testfunc} className="flex-shrink-0 w-1/2 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-normal font-bold border-4 text-white py-1 px-2 rounded">
              Login
            </button>
          </div>
      </div>
    </div>
  );
};

export default LoginPage;
