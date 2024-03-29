import { FormEvent, useState } from "react";
import * as backend from "../backend";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [national_registration_number, setNatRegNum] = useState("");
  const [learner_or_instructor, setLearnerOrInstructor] = useState(false);
  const [has_license, setHasLicense] = useState(false);
  const [shareable, setShareable] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (
        username === "" ||
        password === "" ||
        password !== password2 ||
        email === "" ||
        national_registration_number === ""
      ) {
        setError("Incomplete information");
        return;
      }

      const account: backend.CreateAccountRequest = {
        username: username,
        password1: password,
        password2: password2,
        email: email,
        national_registration_number: national_registration_number,
        is_learner: learner_or_instructor === true ? true : false,
        is_instructor: learner_or_instructor === false ? true : false,
        has_drivers_license: has_license,
        is_shareable: shareable,
      };

      const { user, refresh, access } = await backend.createAccount(account);

      if (user === undefined) {
        setError("Invalid log in information.");
        return;
      }

      window.localStorage.setItem("user", JSON.stringify(user));
      window.localStorage.setItem("refresh", refresh);
      window.localStorage.setItem("access", access);
      window.location.href = "/";
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex-shrink w-1/2 shadow-lg border-2 flex items-center justify-center">
        <form className="w-full max-w-lg pt-12" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wider font-custom text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 font-custom text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
                id="naam"
                type="text"
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wider font-custom text-gray-700 text-sm font-bold mb-2">
                Email adress
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 font-custom text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
                id="email"
                type="email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-1/2 px-3">
              <label className="block uppercase tracking-wider text-gray-700 text-sm font-bold font-custom mb-2">
                Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
                id="password1"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="w-1/2 px-3">
              <label className="block uppercase tracking-wider font-custom text-gray-700 text-sm font-bold mb-2">
                Password (again)
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
                id="password2"
                type="password"
                onChange={(event) => setPassword2(event.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-6">
            <label className="block uppercase tracking-wider font-custom text-gray-700 text-sm font-bold mb-2">
              Social Security Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
              id="nationalregistrationnumber"
              type="text"
              placeholder="00.00.00-000.00"
              onChange={(event) => setNatRegNum(event.target.value)}
            />
          </div>
          <div className="flex justify-center flex-wrap mb-2 ">
            <label className="w-1/3 uppercase tracking-wider font-custom text-gray-700 text-sm font-bold mb-2">
              Driving pupil
            </label>
            <input
              id="leerling"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={(event) => setLearnerOrInstructor(event.target.checked)}
            />
          </div>
          <div className="flex justify-center flex-wrap mb-2 ">
            <label className="w-1/3 uppercase tracking-wider font-bold text-gray-700 text-sm font-custom mb-2">
              Drivers license
            </label>
            <input
              id="rijbewijs"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={(event) => setHasLicense(event.target.checked)}
            />
          </div>
          <div className="flex justify-center flex-wrap mb-6 ">
            <label className="w-1/3 uppercase tracking-wider font-custom text-gray-700 text-sm font-bold mb-2">
              Share personal data
            </label>
            <input
              id="deelgegevens"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={(event) => setShareable(event.target.checked)}
            />
          </div>
          <div className="flex flex-wrap justify-center mb-6">
            <button
              type="submit"
              className="flex-shrink-0 w-1/2 font-custom tracking-wide bg-primary hover:shadow-md hover:shadow-primary text-normal font-bold text-white py-1 px-2 rounded"
            >
              Signup
            </button>
          </div>
          {error && (
            <div className="w-full flex justify-center h-auto items-center">
              <p className="text-center pt-1 px-5 bg-error shadow-md shadow-errorlight font-custom font-bold text-white rounded w-auto pb-1 mb-5">
                {error}
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
