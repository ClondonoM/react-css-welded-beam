import { useState } from 'react';
import styles from './form.module.css';

const FormI = ({ setBeamIProperties }) => {
  const [h, setH] = useState(400);
  const [tw, setTw] = useState(9);
  const [tfw, setTfw] = useState(150);
  const [tft, setTft] = useState(12);
  const [bfw, setBfw] = useState(170);
  const [bft, setBft] = useState(15);

  const handleSubmit = (e) => {
    e.preventDefault();
    const beam = {
      topF: { w: tfw, t: tft },
      web: { w: h - tft - bft, t: tw },
      botF: { w: bfw, t: bft },
    };

    setBeamIProperties(beam);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formInput}>
          <label htmlFor='h'>Beam heigth (h) (mm) </label>
          <input
            type='number'
            value={h}
            onChange={(e) => setH(e.target.value * 1)}
          />{' '}
        </div>
        <div className={styles.formInput}>
          <label htmlFor='tw'>Web thickness (tw) (mm) </label>
          <input
            type='number'
            value={tw}
            onChange={(e) => setTw(e.target.value * 1)}
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor='tfw'>Top flange width (tfw) (mm) </label>
          <input
            type='number'
            value={tfw}
            onChange={(e) => setTfw(e.target.value * 1)}
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor='tft'>Top flange thickness (tft) (mm) </label>
          <input
            type='number'
            value={tft}
            onChange={(e) => setTft(e.target.value * 1)}
          />
        </div>

        <div className={styles.formInput}>
          <label htmlFor='bfw'>Bottom flange width (bfw) (mm) </label>
          <input
            type='number'
            value={bfw}
            onChange={(e) => setBfw(e.target.value * 1)}
          />
        </div>

        <div className={styles.formInput}>
          <label htmlFor='bft'>Bottom flange thickness (bft) (mm) </label>
          <input
            type='number'
            value={bft}
            onChange={(e) => setBft(e.target.value * 1)}
          />
        </div>
        <input className={styles.formButton} type='submit' value='Calculate' />
      </form>
    </div>
  );
};

export default FormI;
