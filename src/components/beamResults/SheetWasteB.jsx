const SheetWasteB = ({ beamBProperties }) => {
  const { flange, web } = beamBProperties;
  const flangeB = flange === undefined ? 0 : flange.w;
  const webB = web === undefined ? 0 : web.w;
  return (
    <div>
      <p>
        Flange = {2440 % flangeB} mm ={' '}
        {(((2440 % flangeB) * 100) / 2440).toFixed(2)} %
      </p>
      <p>
        Web = {2440 % webB} mm = {(((2440 % webB) * 100) / 2440).toFixed(2)} %
      </p>
    </div>
  );
};

export default SheetWasteB;
