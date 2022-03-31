import React, { useState } from 'react';
import './App.css';
import { Text } from 'react-font'
import { SHA1 } from './Utilities';
import { animated, useSpring } from 'react-spring';

function App() {
  const params = new URLSearchParams(window.location.search);
  let name = (params.get("name") || "hello").toLocaleLowerCase()!;
  name = name[0].toLocaleUpperCase() + name.substring(1);
  let hash = (params.get("hash") || "hello")?.toLocaleLowerCase()!;

  const [flip, set] = useState(false);
  const props2 = useSpring({
    to: { width: '30%' },
    from: { width: '80%' },
    reverse: flip,
    onRest: () => set(!flip),
    config: {tension: 100, friction: 50}
  });

  if (hash !== SHA1(name))
    return <div className='Container' id='container'><h1>Incorrect URL</h1></div>;

  return (
    <div className='Container' id='container'>
      <div className="Card">
        <div className='TextBox'>
          <Text family='Indie Flower' className='Text'>{`Happy Birthday`}</Text>
        </div>
        <div className='TextBox'>
          <Text family='Indie Flower' className='Text Name'>{`${name}`}</Text>
        </div>
        <animated.div style={props2}>
          <hr />
        </animated.div>
        <div style={{padding: '1vh 0 1vh 0'}}>
          <div className='TextBox'>
            <Text family='Indie Flower' className='Text Name'>{`Many many`}</Text>
          </div>
          <div className='TextBox'>
            <Text family='Indie Flower' className='Text Name'>{`happy returns`}</Text>
          </div>
          <div className='TextBox'>
            <Text family='Indie Flower' className='Text Name'>{`of the day`}</Text>
          </div>
        </div>
        <animated.div style={props2}>
          <hr />
        </animated.div>
        <img src="./cake.svg" alt="cake" width='30%' height='30%' />
      </div>
    </div>
  );
}
export default App;