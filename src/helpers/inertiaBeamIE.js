const inertiaBeamIE = (fy, fexx, hw, tw, fw, ft) => {
  const arrAreaBeam = [fw * ft, hw * tw, fw * ft];
  const areaBeam = arrAreaBeam.reduce((a, b) => a + b, 0);
  const arrY = [ft / 2, hw / 2 + ft, ft / 2 + ft + hw];
  const arrM = arrAreaBeam.map((item, i) => item * arrY[i]);
  const sumM = arrM.reduce((a, b) => a + b, 0);
  const arrIy = arrAreaBeam.map((item, i) => item * Math.pow(arrY[i], 2));
  const sumIy = arrIy.reduce((a, b) => a + b, 0);
  const arrIg = [
    (fw * Math.pow(ft, 3)) / 12,
    (tw * Math.pow(hw, 3)) / 12,
    (fw * Math.pow(ft, 3)) / 12,
  ];
  const sumIg = arrIg.reduce((a, b) => a + b, 0);
  const inertia = sumIy + sumIg - Math.pow(sumM, 2) / areaBeam;
  const n = sumM / areaBeam;
  const s = inertia / n;
  const fiVn = 0.9 * 0.6 * fy * (hw + 2 * ft) * tw;
  const distNytf = arrY[2] - n;
  const qsv = (fiVn * arrAreaBeam[0] * distNytf) / inertia;
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

  return [arrAreaBeam[0], arrAreaBeam[1], areaBeam, inertia, n, s, qsv, eDef];
};
export default inertiaBeamIE;
