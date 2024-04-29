import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import AuthLayout from "./components/AuthLayout.jsx";
import Profile from "./components/Profile.jsx";
import About from "./components/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <AuthLayout path="/">
            <Home />
          </AuthLayout>
        ),
      },
      {
        path: "/profile",
        element: (
          <AuthLayout path="/">
            <Profile />
          </AuthLayout>
        ),
      },
      {
        path: "/login",
        element: (
          <AuthLayout path="/login">
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout path="/signup">
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
