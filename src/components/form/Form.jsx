import { useEffect, useState } from 'react';
import './form.css';

const Form = () => {
  const [h, setH] = useState(400);
  const [tw, setTw] = useState(9);
  const [tfw, setTfw] = useState(150);
  const [tft, setTft] = useState(12);
  const [bfw, setBfw] = useState(170);
  const [bft, setBft] = useState(15);
  // useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      'h: ',
      h,
      'tw: ',
      'tw: ',
      tw,
      'tfw: ',
      tfw,
      'tft: ',
      tft,
      'bfw: ',
      bfw,
      'bft: ',
      bft
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-input'>
          <label htmlFor='h'>Beam heigth (h) (mm) </label>
          <input
            type='number'
            value={h}
            onChange={(e) => setH(e.target.value * 1)}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='tw'>Web thickness (tw) (mm) </label>
          <input
            type='number'
            value={tw}
            onChange={(e) => setTw(e.target.value * 1)}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='tfw'>Top flange width (tfw) (mm) </label>
          <input
            type='number'
            value={tfw}
            onChange={(e) => setTfw(e.target.value * 1)}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='tft'>Top flange thickness (tft) (mm) </label>
          <input
            type='number'
            value={tft}
            onChange={(e) => setTft(e.target.value * 1)}
          />
        </div>

        <div className='form-input'>
          <label htmlFor='bfw'>Bottom flange width (bfw) (mm) </label>
          <input
            type='number'
            value={bfw}
            onChange={(e) => setBfw(e.target.value * 1)}
          />
        </div>

        <div className='form-input'>
          <label htmlFor='bft'>Bottom flange thickness (bft) (mm) </label>
          <input
            type='number'
            value={bft}
            onChange={(e) => setTft(e.target.value * 1)}
          />
        </div>
        <input className='form-button' type='submit' value='Calculate' />
      </form>
    </div>
  );
};

export default Form;
