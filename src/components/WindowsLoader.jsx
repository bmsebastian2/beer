import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "../elements/Spinner";
import TextUy from "../elements/groupTextBarUy/TextUy";
import TextShadown from "../elements/groupTextBarUy/TextShadown";
import TextGroupBarUy from "../elements/groupTextBarUy/TextGroupBarUy";

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
          <TextGroupBarUy/>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default WindowsLoader;
