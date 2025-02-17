import React, { useState } from 'react';
import '../../stylesheets/form/_collapsable.scss';

function Collapsable(props) {
  const [isOpen, setIsOpen] = useState(
    !!props.open
  ); /* double negation transforms from undefined(falsy) to false */
  const [rotate, setRotate] = useState('animate__rotateIn');
  const [rotateUp, setRotateUp] = useState('');

  const handleClick = () => {
    setIsOpen(!isOpen);
    rotate === 'animate__rotateIn'
      ? setRotate('')
      : setRotate('animate__rotateIn');

    rotateUp === '' ? setRotateUp('animate__rotateInUpLeft') : setRotateUp('');
  };

  return (
    <>
      {/* header */}
      <div className="section-title" onClick={handleClick}>
        <div className="title-icon">
          <span className={`article__list--icon fas fa ${props.icon}`}></span>
          <span className="title">{props.title}</span>
        </div>
        <i
          className={`fa fa-leaf animate__animated ${rotate} ${rotateUp}`}
          aria-hidden="true"
        ></i>
      </div>
      {/* content */}
      <div
        className={`hidden__content ${
          isOpen === true ? '' : 'collapsable--close'
        }`}
        /*    ${isOpen === false ? "" : "collapsable--close"}`} */
      >
        {props.children}
      </div>
    </>
  );
}

export default Collapsable;
