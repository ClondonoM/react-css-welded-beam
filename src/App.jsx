import { useState } from 'react';
import Form from './components/form/Form.jsx';
import beam_I_W from './assets/beam_I_W.png';

function App() {
  const [properties, setProperties] = useState([]);

  return (
    <div className='App'>
      <div className='header'>
        <h1>Welded Beam</h1>
        <a
          className='text-lg'
          href='https://carlos-londono.dev/'
          target='_blank'
          rel='noreferrer'
        >
          by <span>carlos-londono.dev</span>
        </a>
        <h2>Beam data</h2>
      </div>
      <div className='beam-layout'>
        <div className='beam-image'>
          <img src={beam_I_W} alt='beam-image' />
        </div>
        <div className='beam-data'>
          <Form setProperties={setProperties} />
        </div>
      </div>
    </div>
  );
}

export default App;
