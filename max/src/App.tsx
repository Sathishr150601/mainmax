import { useState, useRef } from "react";
import "./App.css";
import Paths from "./paths/Paths";
import React, { Component, useEffect } from "react";
import { LoadingScreen } from "./pages";
import { useOnLoadImages } from "./hooks/useOnLoadImages";
import { spinner } from "./assets";

export default function App() {
  const [loading, setLoading] = useState(true);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imagesLoaded = useOnLoadImages(wrapperRef);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div className="App">
          <Paths />
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
