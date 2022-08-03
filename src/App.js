import React from "react";
import "./App.css";
// * Utils
import axios from "axios";
import { Routes, Route } from "react-router-dom";
// * Components
import { Gallery } from "./components/Gallery";
import { Form } from "./components/Form";

function App() {
  // State
  const [gallery, setGallery] = React.useState([]);

  const getImages = async () => {
    // Interactuar con nuestra API
    const resp = await axios.get(`${process.env.REACT_APP_API}photo`);

    if (resp.data.detail) {
      setGallery(resp.data.detail);
    }
    return null;
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await axios.post(`${process.env.REACT_APP_API}photo`, formData);
    getImages();
  };

  React.useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Home c:</h1>
        <Routes>
          <Route path="/gallery" element={<Gallery images={gallery} />} />
          <Route
            path="/form"
            element={<Form handleOnSubmit={handleOnSubmit} />}
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
