import styles from './beamResults.module.css';
import SheetWasteI from './SheetWasteI';
import inertiaBeamI from '../../helpers/inertiaBeamI';

const BeamIResults = ({ beamIProperties }) => {
  const steel = 7850;
  const { fy, fexx, botF, topF, web } = beamIProperties;
  const yiedlS = botF === undefined ? 0 : fy;
  const fyElectrode = botF === undefined ? 0 : fexx;
  const wbf = botF === undefined ? 0 : botF.w;
  const tbf = botF === undefined ? 0 : botF.t;
  const hw = web === undefined ? 0 : web.w;
  const tw = web === undefined ? 0 : web.t;
  const wtf = topF === undefined ? 0 : topF.w;
  const ttf = topF === undefined ? 0 : topF.t;

  const [areaBotF, areaWeb, areaTopF, areaBeam, ixx, n, s, qsv, e] =
    inertiaBeamI(yiedlS, fyElectrode, wbf, tbf, hw, tw, wtf, ttf);

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
        <p>Cross-Section Area = {areaBeam.toFixed(0)} mm²</p>
        <p>Cross-Section Area = {(areaBeam / 100).toFixed(2)} cm²</p>
        {topF ? <p>Ix = {ixx.toFixed(0)} mm⁴</p> : <p>Ix = 0 mm⁴</p>}
        {topF ? <p>Ix = {(ixx / 10000).toFixed(0)} cm⁴</p> : <p>Ix = 0 cm⁴</p>}
        {topF ? <p>ny = {n.toFixed(0)} mm</p> : <p>ny = 0 mm</p>}
        {topF ? <p>Sx = {(s / 1000).toFixed(0)} cm³</p> : <p>S = 0 cm³</p>}

        <p>Total Weight = {totalWeight} kg/m</p>
        <p>
          Top Flange Weight = {topFWeight} kg/m
          {' = '}
          {topF === undefined
            ? 0
            : ((topFWeight / totalWeight) * 100).toFixed(2)}
          %
        </p>
        <p>
          Web Weight = {webWeight} kg/m
          {' = '}
          {web === undefined ? 0 : ((webWeight / totalWeight) * 100).toFixed(2)}
          %{' '}
        </p>
        <p>
          Bottom Flange Weight = {botFWeight} kg/m
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
