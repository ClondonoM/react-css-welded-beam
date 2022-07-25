import { useState } from 'react';
import styles from './form.module.css';

const FormIE = ({ setBeamIEProperties }) => {
  const [h, setH] = useState(400);
  const [tw, setTw] = useState(9);
  const [fw, setFw] = useState(150);
  const [ft, setFt] = useState(12);

  const handleSubmit = (e) => {
    e.preventDefault();
    const beam = {
      flange: { w: fw, t: ft },
      web: { w: h - 2 * ft, t: tw },
    };

    setBeamIEProperties(beam);
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
          <label htmlFor='fw'>Flange width (fw) (mm) </label>
          <input
            type='number'
            value={fw}
            onChange={(e) => setFw(e.target.value * 1)}
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor='ft'>Flange thickness (ft) (mm) </label>
          <input
            type='number'
            value={ft}
            onChange={(e) => setFt(e.target.value * 1)}
          />
        </div>

        <input className={styles.formButton} type='submit' value='Calculate' />
      </form>
    </div>
  );
};

export default FormIE;
