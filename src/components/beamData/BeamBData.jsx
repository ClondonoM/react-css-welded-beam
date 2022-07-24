import FormB from '../forms/FormB';
import beam_B_W from '../../assets/beam_B_W.png';
import styles from './beamData.module.css';

const BeamBData = ({ setBeamBProperties }) => {
  return (
    <div className={styles.containerData}>
      <div>
        <h2>Data</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.beamData}>
          <FormB setBeamBProperties={setBeamBProperties} />
        </div>
        <div className={styles.beamImage}>
          <img src={beam_B_W} alt='beam' />
        </div>
      </div>
    </div>
  );
};

export default BeamBData;
