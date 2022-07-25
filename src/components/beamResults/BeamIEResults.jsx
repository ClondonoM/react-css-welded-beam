import styles from './beamResults.module.css';
import SheetWasteIE from './SheetWasteIE';

const BeamIEResults = ({ beamIEProperties }) => {
  const steel = 7850;
  const { flange, web } = beamIEProperties;
  const areaFlange = flange === undefined ? 0 : 2 * flange.w * flange.t;
  const areaWeb = web === undefined ? 0 : 2 * web.w * web.t;
  const areaBeam = areaFlange + areaWeb;
  const totalWeight = ((areaBeam / 1000000) * steel).toFixed(2);
  const flangeWeight = ((areaFlange / 1000000) * steel).toFixed(2);
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
