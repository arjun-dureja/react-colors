import { useState } from 'react';
import './Card.css';

const Card = (props) => {
  const [didClick, setDidClick] = useState(false);

  return (
    <a
      href='/#'
      onClick={(e) => {
        e.preventDefault();
        navigator.clipboard.writeText(props.color);
        setDidClick(true);
        setTimeout(() => {
          setDidClick(false);
        }, 1000);
      }}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      {didClick && <CopyPopup />}
      <div className='card'>
        <Square color={props.color} />
        <Label color={props.color} name={props.name} />
      </div>
    </a>
  );
};

const Square = (props) => {
  return (
    <div style={{ backgroundColor: props.color }} className='square'></div>
  );
};

const Label = (props) => {
  return (
    <p className='label'>
      {props.name}
      <br />
      {props.color}
    </p>
  );
};

const CopyPopup = () => {
  return (
    <div className='copyPopup'>
      <p className='copyText'>Copied!</p>
      <div className='triangle'></div>
    </div>
  );
};

export default Card;
