import styles from './beamResults.module.css';
import SheetWasteI from './SheetWasteI';

const BeamIResults = ({ beamIProperties }) => {
  const steel = 7850;
  const { botF, topF, web } = beamIProperties;
  const areaTopF = topF === undefined ? 0 : topF.w * topF.t;
  const areaBotF = botF === undefined ? 0 : botF.w * botF.t;
  const areaWeb = web === undefined ? 0 : web.w * web.t;
  const areaBeam = areaTopF + areaBotF + areaWeb;
  const totalWeight = ((areaBeam / 1000000) * steel).toFixed(2);
  const topFWeight = ((areaTopF / 1000000) * steel).toFixed(2);
  const webWeight = ((areaWeb / 1000000) * steel).toFixed(2);
  const botFWeight = ((areaBotF / 1000000) * steel).toFixed(2);

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
          Top Flange Weight (kg/m) = {topFWeight}
          {' = '}
          {topF === undefined
            ? 0
            : ((topFWeight / totalWeight) * 100).toFixed(2)}
          %
        </p>
        <p>
          Web Weight (kg/m) = {webWeight}
          {' = '}
          {web === undefined ? 0 : ((webWeight / totalWeight) * 100).toFixed(2)}
          %{' '}
        </p>
        <p>
          Bottom Flange Weight (kg/m) = {botFWeight}
          {' = '}
          {botF === undefined
            ? 0
            : ((botFWeight / totalWeight) * 100).toFixed(2)}
          %
        </p>
        <h2>Sheet 2440mm Waste</h2>

        {topF === undefined ? (
          ''
        ) : (
          <SheetWasteI beamIProperties={beamIProperties} />
        )}
      </div>
    </div>
  );
};

export default BeamIResults;
