import './Card.css';

export default function Card(props) {
  return (
    <a
      href='javascript:void(0);'
      onClick={() => {
        navigator.clipboard.writeText(props.color);
      }}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
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
