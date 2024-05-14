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
  height: "500px", // Ensure the map container fits well within your design
};

const defaultCenter: Position = {
  lat: 33.888630,
  lng: 35.495480,
};

const BusinessLocation: React.FC = () => {
return(
    <div></div>
)
}

export default BusinessLocation;
