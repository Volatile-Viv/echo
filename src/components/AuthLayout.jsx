import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { status } from "../store/authSlice";

export default function Protected({ children }, path) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector(status);

  useEffect(() => {
    if (authStatus === true) {
      navigate("/profile");
    } else {
      navigate(path);
    }

    // Assuming the navigation will trigger a rerender,
    // you might want to remove the loader after navigation.
    // If not, set it to false here.
    // setLoader(false);
  }, [authStatus, navigate, path]);

  // Assuming loader is not required after navigation
  // return loader ? <h1>Loading...</h1> : <>{children}</>;

  // If loader is required even after navigation
  return <>{children}</>;
}
