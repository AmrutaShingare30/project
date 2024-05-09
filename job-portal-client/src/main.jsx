import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    <Auth0Provider
      domain="dev-y4ri0gopynkq0tch.us.auth0.com"
      clientId="Yldkp9cNEGNYGO7N258gblYD1IabLSFo"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    ></Auth0Provider>
    ,
  </>
);
