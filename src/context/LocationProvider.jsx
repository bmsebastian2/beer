import { createContext, useState } from "react";

export const PosicionProvider = createContext();

const LocationProvider = ({ children }) => {
  const [location, setLOcation] = useState("Pocitos");

  return (
    <PosicionProvider.Provider value={{ location }}>
      {children}
    </PosicionProvider.Provider>
  );
};

export default LocationProvider;
