const SheetWasteIE = ({ beamIEProperties }) => {
  const { flange, web } = beamIEProperties;
  const flangeIE = flange === undefined ? 0 : flange.w;
  const webIE = web === undefined ? 0 : web.w;
  return (
    <div>
      <p>
        Flange = {2440 % flangeIE} mm ={' '}
        {(((2440 % flangeIE) * 100) / 2440).toFixed(2)} %
      </p>
      <p>
        Web = {2440 % webIE} mm = {(((2440 % webIE) * 100) / 2440).toFixed(2)} %
      </p>
    </div>
  );
};

export default SheetWasteIE;
