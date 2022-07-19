import { useState } from 'react';
import Form from './components/form/Form.jsx';
import beam_I_W from './assets/beam_I_W.png';

function App() {
  const [properties, setProperties] = useState([]);

  return (
    <div className='App'>
      <h1>Welded Beam</h1>
      <h2>Beam data</h2>
      <div className='beam-data'>
        <Form setProperties={setProperties} />
        <div className='beam-image'>
          <img src={beam_I_W} alt='beam-image' />
        </div>
      </div>
    </div>
  );
}

export default App;
