import { useState } from 'react';
import styles from './form.module.css';

const FormB = ({ setBeamBProperties }) => {
  const [fy, setFy] = useState(345);
  const [fexx, setFexx] = useState(490);
  const [h, setH] = useState(500);
  const [tw, setTw] = useState(9);
  const [fw, setFw] = useState(300);
  const [ft, setFt] = useState(15);

  const handleSubmit = (e) => {
    e.preventDefault();

    const beam = {
      fy: fy,
      fexx: fexx,
      flange: { w: fw, t: ft },
      web: { w: h - 2 * ft, t: tw },
    };

    setBeamBProperties(beam);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formInput}>
          <label htmlFor='fy'>Yield Stress Fy (N/mm²)</label>
          <input
            type='number'
            value={fy}
            onChange={(e) => setFy(e.target.value * 1)}
          />{' '}
        </div>
        <div className={styles.formInput}>
          <label htmlFor='fexx'>Electrode Stress Fexx (N/mm²)</label>
          <input
            type='number'
            value={fexx}
            onChange={(e) => setFexx(e.target.value * 1)}
          />{' '}
        </div>
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

export default FormB;
