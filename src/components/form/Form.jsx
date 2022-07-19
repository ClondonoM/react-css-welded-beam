import { useEffect, useState } from 'react';
import './form.css';

const Form = () => {
  const [h, setH] = useState('');
  const [tw, setTw] = useState('');
  const [tfw, setTfw] = useState('');
  const [tft, setTft] = useState('');
  // useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('altura: ', h, 'espesor alma: ', tw, tfw, tft);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='h'>Beam heigth (mm) </label>
        <input
          type='number'
          value={h}
          onChange={(e) => setH(e.target.value * 1)}
        />
        <label htmlFor='tw'>Web thickness (mm) </label>
        <input
          type='number'
          value={tw}
          onChange={(e) => setTw(e.target.value * 1)}
        />
        <label htmlFor='tfw'>Top flange width (mm) </label>
        <input
          type='number'
          value={tfw}
          onChange={(e) => setTfw(e.target.value * 1)}
        />
        <label htmlFor='tfw'>Top flange thickness (mm) </label>
        <input
          type='number'
          value={tft}
          onChange={(e) => setTft(e.target.value * 1)}
        />
        <input type='submit' value='Calcular' />
      </form>
    </div>
  );
};

export default Form;
