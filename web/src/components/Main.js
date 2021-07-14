import React, { useState, useEffect } from "react";
import Preview from "./Preview";
import Form from "./Form";
import ls from "../services/localStorage";

function Main() {
  const localStorageData = ls.get("userData") || {};

  const [dataForm, setdataForm] = useState(
    localStorageData.dataForm || {
      palette: 1,
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      photo: "",
    }
  );

  useEffect(() => {
    ls.set("userData", { dataForm });
  }, [dataForm]);

  // Photo
  const updateAvatar = (image) => {
    setdataForm({ ...dataForm, photo: image });
  };

  // Palettes
  const [ColorPreview, setColorPreview] = useState(
    `palette-preview${dataForm.palette}`
  );
  const updatePalettes = (radioButton) => {
    setdataForm({ ...dataForm, palette: radioButton });
    if (radioButton === 1) {
      setColorPreview("palette-preview1");
    } else if (radioButton === 2) {
      setColorPreview("palette-preview2");
    } else if (radioButton === 3) {
      setColorPreview("palette-preview3");
    } else if (radioButton === 4) {
      setColorPreview("palette-preview4");
    } else if (radioButton === 5) {
      setColorPreview("palette-preview5");
    }
    ls.set("userData", dataForm);
  };

  // Inputs
  const handleFormLifting = (inputValue, inputId) => {
    //1.- accedemos al objeto dataForm con los tres puntos (...) y el nombre del objeto (dataForm)
    //2.- con los corchetes de inputId accedemos a la propiedad del objeto que coincide con el Id del input sobre el que estamos trabajando
    //3.- con inputvalue agregamos el valor que el usuario introduce en el input del formulario
    setdataForm({ ...dataForm, [inputId]: inputValue });
    ls.set("userData", dataForm);
  };

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Reset
  const handleReset = () => {
    setdataForm({
      palette: 1,
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      photo: "",
    });
    setColorPreview("palette-preview1");
    ls.clear();
    setError("");
    setSuccess("");
  };

  return (
    <div className="wrapper">
      <section className="main__content">
        <Preview
          dataForm={dataForm}
          reset={handleReset}
          ColorPreview={ColorPreview}
        />
        <Form
          dataForm={dataForm}
          ColorPreview={ColorPreview}
          updateAvatar={updateAvatar}
          updatePalettes={updatePalettes}
          handleFormLifting={handleFormLifting}
          error={error}
          success={success}
          setError={setError}
          setSuccess={setSuccess}
        />
      </section>
    </div>
  );
}

export default Main;
