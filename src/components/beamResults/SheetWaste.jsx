const SheetWaste = ({ beamproperties }) => {
  const { botF, topF, web } = beamproperties;
  const botFW = topF === undefined ? 0 : botF.w;
  const topFW = botF === undefined ? 0 : topF.w;
  const webW = web === undefined ? 0 : web.w;
  return (
    <div>
      <p>
        Top Flange = {2440 % topFW} mm ={' '}
        {(((2440 % topFW) * 100) / 2440).toFixed(2)} %
      </p>
      <p>
        Web = {2440 % webW} mm = {(((2440 % webW) * 100) / 2440).toFixed(2)} %
      </p>
      <p>
        Bottom Flange = {2440 % botFW} mm ={' '}
        {(((2440 % botFW) * 100) / 2440).toFixed(2)} %
      </p>
    </div>
  );
};

export default SheetWaste;
