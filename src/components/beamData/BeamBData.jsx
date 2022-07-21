import FormI from '../forms/FormB';
import beam_I_W from '../../assets/beam_I_W.png';
import styles from './beamData.module.css';

const BeamIData = ({ setBeamIProperties }) => {
  return (
    <div className={styles.containerData}>
      <div>
        <h2>Data</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.beamData}>
          <FormI setBeamIProperties={setBeamIProperties} />
        </div>
        <div className={styles.beamImage}>
          <img src={beam_I_W} alt='beam' />
        </div>
      </div>
    </div>
  );
};

export default BeamIData;
