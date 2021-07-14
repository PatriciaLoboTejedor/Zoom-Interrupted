function Input(props) {
  const handleInput = (ev) => {
    props.handleFormLifting(ev.target.value, ev.target.id);
  };

  return (
    <>
      <label htmlFor={props.id} className="form__fill__label">
        {props.label}
      </label>
      <input
        type={props.type}
        value={props.value}
        name={props.name}
        id={props.id}
        className={"form__fill__input " + props.className}
        placeholder={props.placeholder}
        onChange={handleInput}
      />
    </>
  );
}

export default Input;
