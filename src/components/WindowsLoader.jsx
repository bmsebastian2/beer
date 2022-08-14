import React from "react";
import { useState } from "react";
import Spinner from "../elements/Spinner";
import Titulo from "../elements/TituloBarUy";

const WindowsLoader = ({ WindowOpen }) => {
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <Spinner />
          <Titulo name="Bares" />
        </div>
      ) : (
        WindowOpen
      )}
    </>
  );
};

export default WindowsLoader;
