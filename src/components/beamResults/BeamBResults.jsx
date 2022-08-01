import inertiaBeamB from '../inertia/inertiaBeamB';
import styles from './beamResults.module.css';
import SheetWasteB from './SheetWasteB';

const BeamBResults = ({ beamBProperties }) => {
  const steel = 7850;
  const { fy, fexx, flange, web } = beamBProperties;
  const yiedlS = flange === undefined ? 0 : fy;
  const fyElectrode = flange === undefined ? 0 : fexx;
  const wbf = flange === undefined ? 0 : flange.w;
  const tbf = flange === undefined ? 0 : flange.t;
  const hw = web === undefined ? 0 : web.w;
  const tw = web === undefined ? 0 : web.t;

  // const areaFlange = flange === undefined ? 0 : 2 * flange.w * flange.t;
  // const areaWeb = web === undefined ? 0 : 2 * web.w * web.t;
  const [areaFlange, areaWeb, areaBeam, ixx, n, s, qsv, e] = inertiaBeamB(
    yiedlS,
    fyElectrode,
    hw,
    tw,
    wbf,
    tbf
  );

  // const areaBeam = areaFlange + areaWeb;
  const totalWeight = ((areaBeam / 1000000) * steel).toFixed(2);
  const flangeWeight = ((areaFlange / 1000000) * steel).toFixed(2);
  const webWeight = ((areaWeb / 1000000) * steel).toFixed(2);

  return (
    <div className={styles.containerResults}>
      <div>
        <h2>Results</h2>
      </div>
      <div className={styles.containerResults}>
        <p>Cross-Section Area = {areaBeam.toFixed(0)} mm²</p>
        <p>Cross-Section Area = {(areaBeam / 100).toFixed(2)} cm²</p>
        {flange ? <p>Ix = {ixx.toFixed(0)} mm⁴</p> : <p>Ix = 0 mm⁴</p>}
        {flange ? (
          <p>Ix = {(ixx / 10000).toFixed(0)} cm⁴</p>
        ) : (
          <p>Ix = 0 cm⁴</p>
        )}
        {flange ? <p>ny = {n.toFixed(0)} mm</p> : <p>ny = 0 mm</p>}
        {flange ? <p>Sx = {(s / 1000).toFixed(0)} cm³</p> : <p>S = 0 cm³</p>}
        {flange ? <p>qsv = {qsv.toFixed(0)} kN/m</p> : <p>qsv = 0 kN/m</p>}
        {flange ? <p>E = {e.toFixed(0)} mm</p> : <p>E = 0 mm</p>}
        <p>Total Weight (kg/m) = {totalWeight}</p>
        <p>
          Flange Weight (kg/m) = {flangeWeight}
          {' = '}
          {flange === undefined
            ? 0
            : ((flangeWeight / totalWeight) * 100).toFixed(2)}
          %
        </p>
        <p>
          Web Weight (kg/m) = {webWeight}
          {' = '}
          {web === undefined ? 0 : ((webWeight / totalWeight) * 100).toFixed(2)}
          %{' '}
        </p>

        <h2>Sheet 2440mm Waste</h2>

        {flange === undefined ? (
          ''
        ) : (
          <SheetWasteB beamBProperties={beamBProperties} />
        )}
      </div>
    </div>
  );
};

export default BeamBResults;
