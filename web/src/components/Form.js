import React, { useState } from "react";
import CollapsableHeader from "./CollapsableHeader";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";

function Form(props) {
  const [collapsableDesign, setCollapsableDesign] = useState("");
  const [collapsableFill, setCollapsableFill] = useState("collapsable--close");
  const [collapsableShare, setCollapsableShare] =
    useState("collapsable--close");

  const handleCollapsable = (title) => {
    if (title === "Diseña") {
      if (collapsableDesign === "") {
        // Se esta mostrando el colapsable
        setCollapsableDesign("collapsable--close");
        setCollapsableFill("collapsable--close");
        setCollapsableShare("collapsable--close");
      } else {
        setCollapsableDesign("");
        setCollapsableFill("collapsable--close");
        setCollapsableShare("collapsable--close");
      }
    }
    if (title === "Rellena") {
      if (collapsableFill === "") {
        // Se esta mostrando el colapsable
        setCollapsableDesign("collapsable--close");
        setCollapsableFill("collapsable--close");
        setCollapsableShare("collapsable--close");
      } else {
        setCollapsableDesign("collapsable--close");
        setCollapsableFill("");
        setCollapsableShare("collapsable--close");
      }
    }

    if (title === "Comparte") {
      if (collapsableShare === "") {
        // Se esta mostrando el colapsable
        setCollapsableDesign("collapsable--close");
        setCollapsableFill("collapsable--close");
        setCollapsableShare("collapsable--close");
      } else {
        setCollapsableDesign("collapsable--close");
        setCollapsableFill("collapsable--close");
        setCollapsableShare("");
      }
    }
  };

  return (
    <form className="content__form" action="">
      <section className={collapsableDesign}>
        <CollapsableHeader
          title="Diseña"
          icon="far fa-object-ungroup form__iconL"
          handleCollapsable={handleCollapsable}
        />
        <Design
          updatePalettes={props.updatePalettes}
          dataForm={props.dataForm}
        />
      </section>

      <section className={`fill ${collapsableFill}`}>
        <CollapsableHeader
          title="Rellena"
          icon="far fa-keyboard form__iconL"
          handleCollapsable={handleCollapsable}
        />
        <Fill
          updateAvatar={props.updateAvatar}
          dataForm={props.dataForm}
          image={props.image}
          handleFormLifting={props.handleFormLifting}
        />
      </section>
      <div className="form__border"></div>

      <section className={`sharecards ${collapsableShare}`}>
        <CollapsableHeader
          title="Comparte"
          icon="fas fa-share-alt form__iconL"
          handleCollapsable={handleCollapsable}
        />
        <Share
          dataForm={props.dataForm}
          error={props.error}
          success={props.success}
          setError={props.setError}
          setSuccess={props.setSuccess}
        />
      </section>
      <div className="form__border--share"></div>
    </form>
  );
}
export default Form;
