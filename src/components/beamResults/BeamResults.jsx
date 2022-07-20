import styles from './beamResults.module.css';

const BeamResults = () => {
  return (
    <div className={styles.containerResults}>
      <div>
        <h2>Results</h2>
      </div>
      <div className={styles.container}>
        <p>Total Area (mm2)</p>
        <p>Inertia x-x</p>
      </div>
    </div>
  );
};

export default BeamResults;
