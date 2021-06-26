import { useState } from 'react';
import './Card.css';

export default function Card(props) {
  const [didCopy, setDidCopy] = useState(false);

  return (
    <a
      href='#'
      onClick={(e) => {
        e.preventDefault();
        navigator.clipboard.writeText(props.color);
        setDidCopy(true);
        setTimeout(() => {
          setDidCopy(false);
        }, 1000);
      }}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      {didCopy && <Copy />}
      <div className='card'>
        <Square color={props.color} />
        <Label color={props.color} />
      </div>
    </a>
  );
}

function Square(props) {
  return (
    <div style={{ backgroundColor: props.color }} className='square'></div>
  );
}

function Label(props) {
  const ntc = window.ntc;

  return (
    <p className='label'>
      {ntc.name(props.color)[1]}
      <br />
      {props.color}
    </p>
  );
}

function Copy() {
  return (
    <div className='copy'>
      <p
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: '12px',
          textAlign: 'center',
          marginTop: 5,
        }}
      >
        Copied!
      </p>
      <div className='triangle'></div>
    </div>
  );
}
