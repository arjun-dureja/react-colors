import './Card.css';

export default function Card(props) {
  return (
    <div className='card'>
      <Square color={`rgb(${props.r}, ${props.g}, ${props.b})`} />
      <Label r={props.r} g={props.g} b={props.b} />
    </div>
  );
}

function Square(props) {
  return (
    <div style={{ backgroundColor: props.color }} className='square'></div>
  );
}

function Label(props) {
  const ntc = window.ntc;
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  const hexColor = rgbToHex(props.r, props.g, props.b);
  return (
    <p className='label'>
      {ntc.name(hexColor)[1]}
      <br />
      {hexColor.toUpperCase()}
    </p>
  );
}
