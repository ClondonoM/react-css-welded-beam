import styles from './beamResults.module.css';
import SheetWaste from './SheetWaste';

const BeamResults = ({ beamproperties }) => {
  // const area = () => {
  //   let prop = '';
  //   let a = 0;
  //   for (prop in beamproperties) {
  //     a += beamproperties[prop].t * beamproperties[prop].w;
  //   }
  //   return a;
  // };

  const steel = 7850;
  const { botF, topF, web } = beamproperties;
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
        <p>Total Area (mm2) = {areaBeam.toFixed(0)}</p>
        <p>Total Area (m2) = {(areaBeam / 1000000).toFixed(8)}</p>
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
          <SheetWaste beamproperties={beamproperties} />
        )}
      </div>
    </div>
  );
};

export default BeamResults;
