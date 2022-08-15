// let la = "";
// let lo = "";

// const showPosition = (position) => {
//   la = position.coords.latitude;
//   lo = position.coords.longitude;
// };
// function gpsError(err) {
//   console.warn(`Error: ${err.code}, ${err.message}`);
//   showPosition();
// }
// const opciones = {
//   enableHighAccuracy: true,
//   maximumAge: 30000,
//   timeout: 27000,
// };

// const getLocation = () => {
//   navigator.geolocation.getCurrentPosition(showPosition, gpsError, opciones);
// };

// export default { la, lo };
import React from "react";
import searcherror from '../function/ErrorLocation'
export const apiStates = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export const locationPosition = () => {
  const [data, setData] = React.useState({
    state: apiStates.LOADING,
    error: "",
    district:''
  });
  const setPartData = (partialData) => setData({ ...data, ...partialData });
  React.useEffect(() => {
    setPartData({
      state: apiStates.LOADING,
    });
    const showPosition = (position) => {
      let la=0;
      let lo=0
      if (position)  {
        la = position.coords.latitude
        lo = position.coords.longitude
      };
      getUbicacion(la,lo,setPartData)

      
    };
    function gpsError(err) {
      setPartData({
        state: apiStates.ERROR,
        error: searcherror(err.code),
      });
      showPosition();
    }
    const opciones = {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000,
    };

    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(
        showPosition,
        gpsError,
        opciones
      );
    };
    getLocation();
  }, []);

  return data;
};

function getUbicacion(la,lo)  {
  
  if (la && lo) {
    fetch(
      `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${la},${lo}&lang=en-US&apikey=1W9Uzy8_P4PvjP1ZfO6NkAbCRyuuL0D3uXqMDvzLer8`
    )
      .then((resp) => resp.json())
      .then((data) => {
        const {
          label,
          houseNumber,
          postalCode,
          street,
          countryName,
          city,
          district,
        } = data.items[0].address;
       alert(district)
       setPartData({
        state: apiStates.SUCCESS,
        district
      });
      })
      .catch((err) => console.log("Solicitud fallida: " + err));
  } else alert("Debe llenat latitud y longitud");
};
