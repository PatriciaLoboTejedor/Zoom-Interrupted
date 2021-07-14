function ErrorMessage(props) {
  let message = "";
  if (props.dataForm.name === "") {
    message = "Recuerda completar el campo 'Nombre completo'.";
  } else if (props.dataForm.job === "") {
    message = "Recuerda completar el campo 'Puesto'.";
  } else if (props.dataForm.photo === "") {
    message = "Recuerda subir una imagen de perfil.";
  } else if (props.dataForm.email === "") {
    message = "Recuerda completar el campo 'Email'.";
  } else if (props.dataForm.linkedin === "") {
    message = "Recuerda completar el campo 'Linkedin'.";
  } else if (props.dataForm.github === "") {
    message = "Recuerda completar el campo 'Github'.";
  }

  return (
    <div className="message">
      No se ha podido crear la tarjeta.
      <p className="message-error">{message}</p>
    </div>
  );
}

export default ErrorMessage;
