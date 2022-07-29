const inertiaBeamIE = (fy, fexx, hw, tw, fw, ft) => {
  const areaFB = fw * ft;
  const areaWeb = hw * tw;
  const areaBeam = 2 * areaFB + areaWeb;
  const ybf = ft / 2;
  const yhw = hw / 2 + ft;
  const ytf = ft / 2 + ft + hw;
  const mbf = areaFB * ybf;
  const mw = areaWeb * yhw;
  const mbt = areaFB * ytf;
  const sumM = mbf + mw + mbt;
  const iybf = areaFB * Math.pow(ybf, 2);
  const iyw = areaWeb * Math.pow(yhw, 2);
  const iytf = areaFB * Math.pow(ytf, 2);
  const sumIy = iybf + iyw + iytf;
  const igbf = (fw * Math.pow(ft, 3)) / 12;
  const igw = (tw * Math.pow(hw, 3)) / 12;
  const igtf = (fw * Math.pow(ft, 3)) / 12;
  const sumIg = igbf + igw + igtf;
  const inertia = sumIy + sumIg - Math.pow(sumM, 2) / areaBeam;
  const n = sumM / areaBeam;
  const s = inertia / n;
  const fiVn = 0.9 * 0.6 * fy * (hw + 2 * ft) * tw;
  const distNytf = ytf - n;
  const qsv = (fiVn * areaFB * distNytf) / inertia;
  const e = qsv / (0.75 * 0.6 * fexx * 0.707 * 2);
  let emin = e;
  const tMax = Math.max(ft, tw);

  if (tMax <= 6.4) {
    emin = 3;
  } else if (tMax <= 12) {
    emin = 5;
  } else if (tMax <= 19) {
    emin = 6;
  } else {
    emin = 8;
  }
  const eDef = Math.max(Math.ceil(e), emin);

  return [inertia, n, s, eDef];
};
export default inertiaBeamIE;
