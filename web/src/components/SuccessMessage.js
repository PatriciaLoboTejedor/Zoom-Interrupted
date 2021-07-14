function SuccessMessage(props) {
  return (
    <div className="shared">
      <h3 className="shared__text">La tarjeta ha sido creada:</h3>
      <div className="shared__link">
        <a href={props.cardURL} target="_blank" rel="noreferrer">
          {props.cardURL}
        </a>
      </div>
      <div className="shared__button ">
        <button className="shared__button--twitter">
          <i className="fab fa-twitter" title="Comparte en Twitter"></i>
          <a
            href={`https://twitter.com/intent/tweet?url=${props.cardURL}`}
            className="share__result--twitterlink"
            data-show-count="false"
            target="_blank"
            rel="noreferrer">
            Compartir en twitter
          </a>
        </button>
      </div>
    </div>
  );
}

export default SuccessMessage;
