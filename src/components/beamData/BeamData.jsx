import Form from '../form/Form';
import beam_I_W from '../../assets/beam_I_W.png';
import styles from './beamData.module.css';

const BeamData = () => {
  return (
    <div className={styles.containerData}>
      <div>
        <h2>Data</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.beamData}>
          <Form />
        </div>
        <div className={styles.beamImage}>
          <img src={beam_I_W} alt='beam-image' />
        </div>
      </div>
    </div>
  );
};

export default BeamData;
