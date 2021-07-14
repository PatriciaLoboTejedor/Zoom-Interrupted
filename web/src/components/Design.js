import Palettes from "./Palettes";

function Design(props) {
  return (
    <>
      <div className="colorselection hidden__container">
        <legend className="radioTitle">Colores</legend>
        <Palettes
          value={1}
          updatePalettes={props.updatePalettes}
          dataForm={props.dataForm}
        />
        <Palettes
          value={2}
          updatePalettes={props.updatePalettes}
          dataForm={props.dataForm}
        />
        <Palettes
          value={3}
          updatePalettes={props.updatePalettes}
          dataForm={props.dataForm}
        />
        <Palettes
          value={4}
          updatePalettes={props.updatePalettes}
          dataForm={props.dataForm}
        />
        <Palettes
          value={5}
          updatePalettes={props.updatePalettes}
          dataForm={props.dataForm}
        />
      </div>
      <div className="form__border"></div>
    </>
  );
}

export default Design;
