function Palettes(props) {
  const handlePalette = (ev) => {
    //utilizamos parseInt para que el estado que recoja no sea un string
    props.updatePalettes(parseInt(ev.target.value));
  };

  return (
    <div className="design__content">
      <input
        className="coloroption"
        type="radio"
        name="coloroption"
        id="pallete"
        value={props.value}
        onChange={handlePalette}
        checked={props.dataForm.palette === parseInt(props.value)}
      />
      <div className={"pallete" + props.value + " a"}></div>
      <div className={"pallete" + props.value + " b"}></div>
      <div className={"pallete" + props.value + " c"}></div>
    </div>
  );
}

export default Palettes;
