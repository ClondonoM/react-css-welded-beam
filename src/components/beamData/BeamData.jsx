import Form from '../form/Form';
import beam_I_W from '../../assets/beam_I_W.png';
import styles from './beamData.module.css';

const BeamData = ({ setBeamProperties }) => {
  return (
    <div className={styles.containerData}>
      <div>
        <h2>Data</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.beamData}>
          <Form setBeamProperties={setBeamProperties} />
        </div>
        <div className={styles.beamImage}>
          <img src={beam_I_W} alt='beam' />
        </div>
      </div>
    </div>
  );
};

export default BeamData;
