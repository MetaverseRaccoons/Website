# P&O driving simulator frontend

## Testing

You can run a live development server with webpack by running `npm run start`. 

To test features that require the backend API, you can clone the [backend](https://github.com/MetaverseRaccoons/backend) repository by running `git clone git@github.com:MetaverseRaccoons/backend.git`, following the setup instructions in the `README` and then running `python manage.py runserver`.

The backend should run at `http://localhost:8000` while the frontend should run at `http://localhost:3000`. This creates a problem for Cross-Origin Resource Sharing (CORS), a security feature that prevents websites from creating requests to other domains or origins. This is why the webpack development server is configured to proxy requests to the backend. If the backend happens to be running on a different port or host than `localhost:8000`, you can change the `proxy` property in `package.json`.

## Production

To build the production version of the app, run `npm run build`. This will create a `build` folder with the static files that can be used to host the website. Note that the [Django backend](https://github.com/MetaverseRaccoons/backend) must be running for the app for most of the features to work.

We recommend running some kind of proxy or server that can serve the static files as well as proxy requests to the backend. If the backend has to be hosted on a different domain or port, you can change the `REACT_APP_BACKEND_BASE_URL` property in `package.json` to match the new location. This will change the base URL in `src/backend.ts` for all requests to the backend.
