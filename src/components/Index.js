"use client";
import { useEffect, useState } from "react";
import Header from "./Header";
import Login from "./login";
import Main from "./Main";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    // Check if we're running in the browser
    if (typeof window !== "undefined") {
      const loggedInStatus = sessionStorage.getItem("isLoggedIn");
      setIsLoggedIn(loggedInStatus);
    }
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <>
          <Header />
          <Main />
        </>
      ) : (
        <Login />
      )}
    </>
  );
};
export default Index;
