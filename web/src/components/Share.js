import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";

function Share(props) {
  const handleCreate = () => {
    fetch("/card/", {
      method: "POST",
      body: JSON.stringify(props.dataForm),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === false) {
          props.setError(data.error);
          props.setSuccess("");
        } else if (data.success === true) {
          props.setSuccess(data.cardURL);
          props.setError("");
        }
      });
  };
  return (
    <div className="share__content hidden__container">
      <div onClick={handleCreate} className="button">
        <i className="far fa-address-card button__icon"></i>
        <div className="button__text">Crear tarjeta</div>
      </div>
      {props.error !== "" && <ErrorMessage dataForm={props.dataForm} />}
      {props.success !== "" && <SuccessMessage cardURL={props.success} />}
    </div>
  );
}

export default Share;
