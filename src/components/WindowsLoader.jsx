import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "../elements/Spinner";
import Titulo from "../elements/TituloBarUy";

const WindowsLoader = () => {
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <Spinner />
          <Titulo name="Bares" />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default WindowsLoader;
