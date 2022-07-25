import FormIE from '../forms/FormIE';
import beam_I_E_W from '../../assets/beam_I_E_W.png';
import styles from './beamData.module.css';

const BeamIEData = ({ setBeamIEProperties }) => {
  return (
    <div className={styles.containerData}>
      <div>
        <h2>Data</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.beamData}>
          <FormIE setBeamIEProperties={setBeamIEProperties} />
        </div>
        <div className={styles.beamImage}>
          <img src={beam_I_E_W} alt='beam' />
        </div>
      </div>
    </div>
  );
};

export default BeamIEData;
