import styles from './beamResults.module.css';
import SheetWasteIE from './SheetWasteIE';
import inertiaBeamIE from '../inertia/inertiaBeamIE';

const BeamIEResults = ({ beamIEProperties }) => {
  const steel = 7850;
  const { flange, web } = beamIEProperties;

  // if (flange) {
  // }
  const wbf = flange === undefined ? 0 : flange.w;
  const tbf = flange === undefined ? 0 : flange.t;
  const hw = flange === undefined ? 0 : web.w;
  const tw = flange === undefined ? 0 : web.t;

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
        <p>Cross-Section Area (mm2) = {areaBeam.toFixed(0)}</p>
        <p>Cross-Section Area (m2) = {(areaBeam / 1000000).toFixed(8)}</p>
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
          <SheetWasteIE beamIEProperties={beamIEProperties} />
        )}
      </div>
    </div>
  );
};

export default BeamIEResults;
