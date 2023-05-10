// import React, { useEffect, useState } from "react";

// function useGeoLocation() {
//   const [location, setLocation] = useState({
//     loaded: false,
//     coordinates: { lat: "", lng: "" },
//   });

//   const onSuccess = (location) => {
//     setLocation({
//       loaded: true,
//       coordinates: {
//         lat: location.coords.latitude,
//         lng: location.coords.longitude,
//       },
//     });
//   };

//   const onError = (error) => {
//     setLocation({
//       loaded: true,
//       error,
//     });
//   };

//   useEffect(() => {
//     if (!("geolocation" in navigator)) {
//       onError({
//         code: 0,
//         message: "GeoLocation not supported"
//       })
//     }

//     navigator.geolocation.getCurrentPosition(onSuccess, onError);
//   }, []);
//   return location
// }

// export default useGeoLocation;



import { useState, useEffect } from "react";
import axios from "axios";

function useGeoLocation() {
  const [location, setLocation] = useState({
    loaded: false,
    address: null,
  });

  const onSuccess = async (position) => {
    try {
      const { latitude, longitude } = position.coords;
      const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
      const { road, town } = response.data.address;
      setLocation({
        loaded: true,
        address: {
          street: road,
          city: town,
        },
      });
    } catch (error) {
      onError(error);
    }
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      error,
    });
  };

  const updateLocation = () => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "GeoLocation not supported"
      })
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  };

  useEffect(() => {
    updateLocation();
  }, []);

  return [location, updateLocation];
}

export default useGeoLocation;