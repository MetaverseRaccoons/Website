import { FormEvent, useState } from "react";
import { createToken } from "../backend";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { refresh, access } = await createToken({
      username,
      password,
    });
    window.localStorage.setItem("refresh", refresh);
    window.localStorage.setItem("access", access);
    // window.location.href = "/home";
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="h-1/2 w-2/3 rounded border-2 flex items-center justify-center">
        <form className="w-full max-w-lg" onSubmit={event => handleSubmit(event)}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Username
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
                id="grid-last-name"
                type="username"
                value={username}
                onChange={event => setUsername(event.target.value)}
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
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            </div>
          </div>
          <div className='flex justify-center'>
            <button type="submit" className="flex-shrink-0 w-1/2 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-normal font-bold border-4 text-white py-1 px-2 rounded">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
