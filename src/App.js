import Card from './Card';
import './App.css';

const App = () => {
  const components = [];

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  const inc = 51;
  for (let i = 0; i < 256; i += inc) {
    for (let j = 0; j < 256; j += inc) {
      for (let k = 0; k < 256; k += inc) {
        const hexColor = rgbToHex(i, j, k);
        components.push(
          <Card key={`${i}${j}${k}`} color={hexColor.toUpperCase()} />
        );
      }
    }
  }
  return <div className='container'>{components}</div>;
};

export default App;
