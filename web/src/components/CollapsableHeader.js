function CollapsableHeader(props) {
  const handleClick = (event) => {
    props.handleCollapsable(props.title);
  };

  return (
    <div className="form__title collapsable--close" onClick={handleClick}>
      <h2 className="form__text">
        <i className={props.icon}></i>
        {props.title}
      </h2>
      <i className="fas fa-angle-up form__iconR"></i>
    </div>
  );
}
export default CollapsableHeader;
