import Card from './Card';
import './App.css';

const App = () => {
  const components = [];
  for (let i = 0; i < 256; i += 51) {
    for (let j = 0; j < 256; j += 51) {
      for (let k = 0; k < 256; k += 51) {
        components.push(<Card key={`${i}${j}${k}`} r={i} g={j} b={k} />);
      }
    }
  }
  return <div className='container'>{components}</div>;
};

export default App;
