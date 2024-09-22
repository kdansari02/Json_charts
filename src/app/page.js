"use client";

// import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
// import Loader from "../components/Loader";

export default function Home() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="home flex flex-col min-h-screen">
      <Header />
      <Main />
      {/* {loading ? (
        <Loader />
      ) : (
        <>
         
        </>
      )} */}
    </div>
  );
}
