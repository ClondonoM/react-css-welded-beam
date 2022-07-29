import styles from './beamResults.module.css';
import SheetWasteIE from './SheetWasteIE';
import inertiaBeamIE from '../inertia/inertiaBeamIE';

const BeamIEResults = ({ beamIEProperties }) => {
  const steel = 7850;
  const { fy, fexx, flange, web } = beamIEProperties;
  const yiedlS = flange === undefined ? 0 : fy;
  const fyElectrode = flange === undefined ? 0 : fexx;
  const wbf = flange === undefined ? 0 : flange.w;
  const tbf = flange === undefined ? 0 : flange.t;
  const hw = web === undefined ? 0 : web.w;
  const tw = web === undefined ? 0 : web.t;
  const [ixx, n, s, e] = inertiaBeamIE(yiedlS, fyElectrode, hw, tw, wbf, tbf);
  const areaFB = wbf * tbf;
  const areaWeb = hw * tw;
  const areaBeam = 2 * areaFB + areaWeb;
  const totalWeight = ((areaBeam / 1000000) * steel).toFixed(2);
  const flangeWeight = (((2 * areaFB) / 1000000) * steel).toFixed(2);
  const webWeight = ((areaWeb / 1000000) * steel).toFixed(2);

  return (
    <div className={styles.containerResults}>
      <div>
        <h2>Results</h2>
      </div>
      <div className={styles.containerResults}>
        <p>Cross-Section Area = {areaBeam.toFixed(0)} mm2</p>
        <p>Cross-Section Area = {(areaBeam / 100).toFixed(2)} cm2</p>
        {flange ? <p>Ix = {ixx.toFixed(0)} mm4</p> : <p>Ix = 0 mm4</p>}
        {flange ? (
          <p>Ix = {(ixx / 10000).toFixed(0)} cm4</p>
        ) : (
          <p>Ix = 0 cm4</p>
        )}
        {flange ? <p>ny = {n.toFixed(0)} mm</p> : <p>ny = 0 mm</p>}
        {flange ? <p>Sx = {(s / 1000).toFixed(0)} cm3</p> : <p>S = 0 cm3</p>}
        {flange ? <p>E = {e.toFixed(0)} mm</p> : <p>E = 0 mm</p>}

        <p>Total Weight = {totalWeight} kg/m</p>
        <p>
          Flange Weight = {flangeWeight} kg/m
          {' = '}
          {flange === undefined
            ? 0
            : ((flangeWeight / totalWeight) * 100).toFixed(2)}
          %
        </p>
        <p>
          Web Weight = {webWeight} kg/m
          {' = '}
          {web === undefined ? 0 : ((webWeight / totalWeight) * 100).toFixed(2)}
          %{' '}
        </p>
        <h2>Sheet 2440mm Waste</h2>
        {flange === undefined ? (
          ''
        ) : (
          <SheetWasteIE beamIEProperties={beamIEProperties} />
        )}
      </div>
    </div>
  );
};

export default BeamIEResults;
