import React, { useState } from "react";
import Header from "./components/header";
import ImageGallery from "./components/imageGallery";

function DashboardScreen() {
  const [movieName, setMovieName] = useState("");

  const handleMovieName = (e) => {
    setMovieName(e.target.value);
  };
  return (
    <>
      <Header />
      <ImageGallery />
    </>
  );
}

export default DashboardScreen;
