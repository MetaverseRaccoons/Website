import { FormEvent, useState } from "react";
import * as backend from "../backend";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const createTokenResponse = await backend.createToken({
        username,
        password,
      });

      if (
        createTokenResponse.access !== undefined &&
        !createTokenResponse.refresh !== undefined
      ) {
        window.localStorage.setItem("refresh", createTokenResponse.refresh);
        window.localStorage.setItem("access", createTokenResponse.access);

        const user = await backend.getPersonalUser(createTokenResponse.access);
        window.localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/";
      } else {
        setError("Invalid");
      }
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex w-1/2 shadow-lg border-2 flex items-center justify-center">
        <form className="w-full max-w-lg pt-12" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wider font-custom text-gray-700 text-sm font-bold mb-2">
                Naam
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
                id="naam"
                type="text"
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wider font-custom text-gray-700 text-sm font-bold mb-2">
                Paswoord
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
                id="password"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center mb-6">
            <button
              type="submit"
              className="flex-shrink-0 w-1/2 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-normal font-custom font-bold tracking-wider border-4 text-white py-1 px-2 rounded"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
      <h3>{error}</h3>
    </div>
  );
};

export default LoginPage;
