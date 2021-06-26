function App() {
  const components = [];
  for (let i = 0; i < 256; i += 51) {
    for (let j = 0; j < 256; j += 51) {
      for (let k = 0; k < 256; k += 51) {
        components.push(<Card key={`${i}${j}${k}`} r={i} g={j} b={k} />);
      }
    }
  }
  const container = {
    display: 'grid',
    backgroundColor: '#e0e0e0',
    padding: '50px 50px 0px 50px',
    gridTemplateColumns: 'repeat(auto-fill, 150px)',
    gridGap: '50px',
  };
  return <div style={container}>{components}</div>;
}

function Square(props) {
  const squareStyle = {
    height: '65%',
    borderRadius: '8px 8px 0 0',
    backgroundColor: props.color,
  };
  return <div style={squareStyle}></div>;
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

  const labelStyle = {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    paddingLeft: '13px',
  };

  const hexColor = rgbToHex(props.r, props.g, props.b);
  return (
    <p style={labelStyle}>
      {ntc.name(hexColor)[1]}
      <br />
      {hexColor.toUpperCase()}
    </p>
  );
}

function Card(props) {
  const cardStyle = {
    height: '220px',
    width: '150px',
    borderRadius: '8px',
    backgroundColor: '#e0e0e0',
    boxShadow: '15px 15px 30px #bebebe, -15px -15px 30px #ffffff',
  };
  return (
    <div style={cardStyle}>
      <Square color={`rgb(${props.r}, ${props.g}, ${props.b})`} />
      <Label r={props.r} g={props.g} b={props.b} />
    </div>
  );
}

export default App;
