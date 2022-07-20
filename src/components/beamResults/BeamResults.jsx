import styles from './beamResults.module.css';

const BeamResults = ({ properties }) => {
  console.log('desde results', properties);
  const area = () => {
    let prop = '';
    let a = 0;
    for (prop in properties) {
      a += properties[prop].t * properties[prop].w;
    }
    return a;
  };
  const steel = 7850;
  console.log(area());
  return (
    <div className={styles.containerResults}>
      <div>
        <h2>Results</h2>
      </div>
      <div className={styles.container}>
        <p>Total Area (mm2) = {area()}</p>
        <p>Total Area (m2) = {area() / 1000000}</p>
        <p>Inertia x-x</p>
      </div>
    </div>
  );
};

export default BeamResults;
