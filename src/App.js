import Card from './Card';
import './App.css';

const App = () => {
  const cards = [];
  const names = {};
  const ntc = window.ntc;

  const componentToHex = (c) => {
    var hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  const rgbToHex = (r, g, b) => {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  };

  const inc = 51; // Divisible by 255
  for (let i = 0; i < 256; i += inc) {
    for (let j = 0; j < 256; j += inc) {
      for (let k = 0; k < 256; k += inc) {
        const hexColor = rgbToHex(i, j, k);

        // Handle duplicate names
        let name = ntc.name(hexColor)[1];
        if (name in names) {
          names[name] += 1;
          name = name + ' ' + names[name];
        } else {
          names[name] = 1;
        }

        cards.push(
          <Card
            key={`${i}${j}${k}`}
            color={hexColor.toUpperCase()}
            name={name}
          />
        );
      }
    }
  }

  return <div className='container'>{cards}</div>;
};

export default App;
