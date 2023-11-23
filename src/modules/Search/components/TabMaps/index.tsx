"use client";

import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import classes from "./styles.module.scss";

const TabMaps = () => {
  return (
    <MapContainer
      className={classes.map_container}
      center={[40.505, -100.09]}
      zoom={13}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors 123'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default TabMaps;
