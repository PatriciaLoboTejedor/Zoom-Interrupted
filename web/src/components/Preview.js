import defaultAvatar from "../images/preview2.png";

function Preview(props) {
  const avatar =
    props.dataForm.photo === "" ? defaultAvatar : props.dataForm.photo;

  return (
    <section className="main__preview">
      <button className="preview__resetbutton" onClick={props.reset}>
        <i className="far fa-trash-alt"></i> reset
      </button>
      <div className={`preview__card ${props.ColorPreview}`}>
        <div className="card__line card__line--color">
          <h2 className="card__name card__name--color">
            {props.dataForm.name === ""
              ? "Nombre apellido"
              : props.dataForm.name}
          </h2>
          <h3 className="card__job">
            {props.dataForm.job === ""
              ? "Front-end developer"
              : props.dataForm.job}
          </h3>
        </div>

        <div
          className="card__pic pic_background"
          style={{ backgroundImage: `url(${avatar})` }}></div>

        <ul className="card__contact">
          <li className="contact__icon">
            <a
              href={`tel:${props.dataForm.phone}`}
              target="_blank"
              rel="noreferrer">
              <i className="icon icon--color fas fa-mobile-alt"></i>
            </a>
          </li>
          <li className="contact__icon">
            <a
              href={`mailto:${props.dataForm.email}`}
              target="_blank"
              rel="noreferrer">
              <i className="icon icon--color far fa-envelope"></i>
            </a>
          </li>
          <li className="contact__icon">
            <a
              href={`https://linkedin.com/in/${props.dataForm.linkedin}`}
              title="Linkedin contact"
              target="_blank"
              rel="noreferrer">
              <i className="icon icon--color fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="contact__icon">
            <a
              href={`https://github.com/${props.dataForm.github}`}
              target="_blank"
              rel="noreferrer">
              <i className="icon icon--color fab fa-github-alt"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Preview;
