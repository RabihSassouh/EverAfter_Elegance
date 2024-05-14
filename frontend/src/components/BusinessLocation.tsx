import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import { Library } from '@googlemaps/js-api-loader';
import { MdLocationPin } from "react-icons/md";
import { setData, setStep } from "../store/signUpSlice";
import { useDispatch } from "react-redux";

interface Position {
  lat: number;
  lng: number;
}

const libraries: Library[] = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const defaultCenter: Position = {
  lat: 33.888630,
  lng: 35.495480,
};

const BusinessLocation: React.FC = () => {
  const dispatch = useDispatch();
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [position, setPosition] = useState<Position>(defaultCenter);
  const [loading, setLoading] = useState<boolean>(true);
  const searchBoxRef = useRef<google.maps.places.SearchBox | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos: Position = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setPosition(pos);
          setMapCenter(pos);
        },
        () => {
          console.error("Error: The Geolocation service failed.");
        }
      );
    } else {
      console.error("Error: Your browser doesn't support geolocation.");
    }
  }, []);

  const setMapCenter = (center: Position) => {
    if (map) {
      map.setCenter(center);
    }
  };

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    setMap(map);
    setLoading(false);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  const onPlacesChanged = () => {
    const places = searchBoxRef.current?.getPlaces() || [];
    if (places.length === 0 || !places[0]?.geometry?.location) {
      return;
    }
    const newPosition: Position = {
      lat: places[0].geometry.location.lat(),
      lng: places[0].geometry.location.lng(),
    };
    const viewport = places[0]?.geometry.viewport;

    if (!viewport) {
      return;
    }

    map?.fitBounds(viewport);

    setPosition(newPosition);
  };

  const handleNext = () => {
    const data = {
      position,
    };
    dispatch(setData(data));
    dispatch(setStep(5));
  };

  return (
    <div className="h-screen w-full flex flex-col gap-8 justify-center items-center my-10 md:my-0 px-12">
      <h1 className="text-4xl font-medium font-poppins text-[#000000CC] text-center">
        Your business address?
      </h1>
      <div
        className="max-w-4xl border-[1px] border-primary w-full rounded-xl overflow-hidden relative"
        style={{ height: "500px" }}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center flex-col gap-2 bg-white opacity-75">
            <div className="lds-ripple text-primary">
              <div></div>
              <div></div>
            </div>
            <span className="font-poppins text-primary font-semibold text-md animate-ping">
              Loading...
            </span>
          </div>
        )}
        <LoadScript
          googleMapsApiKey={`AIzaSyCG5o30-DUuFTU4O0mruQ3MJZOMSfuAORE`}
          libraries={libraries}
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={position}
            zoom={14}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
              streetViewControl: false, // hide the street view control
              zoomControl: false, // hide zoom controls
              mapTypeControl: false, // hide map type control
              fullscreenControl: false, // hide the fullscreen control
            }}
          >
            <Marker position={position} />
          </GoogleMap>
          {!loading && (
            <StandaloneSearchBox
              onLoad={(ref) => (searchBoxRef.current = ref)}
              onPlacesChanged={onPlacesChanged}
            >
              <div className="absolute w-full px-5 top-5 font-poppins flex items-center justify-center text-[#000000B0]">
                <div className="flex gap-3 items-center justify-start w-full max-w-xl px-4 py-2 z-10 rounded-xl bg-white">
                  <MdLocationPin className="z-20 left-5" />
                  <input
                    type="text"
                    placeholder="Search places..."
                    className="w-full h-full outline-none"
                  />
                </div>
              </div>
            </StandaloneSearchBox>
          )}
        </LoadScript>
      </div>
      <div className="flex max-w-4xl w-full items-end justify-end">
        <button
          className="bg-primary text-[#FFFFFFEB] font-poppins font-semibold px-6 py-2 rounded-full hover:bg-secondary hover:shadow-md transition-colors"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BusinessLocation;
