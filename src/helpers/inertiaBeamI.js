const inertiaBeamI = (fy, fexx, wbf, tbf, hw, tw, wtf, ttf) => {
  const arrAreaBeam = [wbf * tbf, hw * tw, wtf * ttf];
  const areaBeam = arrAreaBeam.reduce((a, b) => a + b, 0);
  const arrY = [tbf / 2, hw / 2 + tbf, ttf / 2 + tbf + hw];
  const arrM = arrAreaBeam.map((item, i) => item * arrY[i]);
  const sumM = arrM.reduce((a, b) => a + b, 0);
  const arrIy = arrAreaBeam.map((item, i) => item * Math.pow(arrY[i], 2));
  const sumIy = arrIy.reduce((a, b) => a + b, 0);
  const arrIg = [
    (wbf * Math.pow(tbf, 3)) / 12,
    (tw * Math.pow(hw, 3)) / 12,
    (wtf * Math.pow(ttf, 3)) / 12,
  ];
  const sumIg = arrIg.reduce((a, b) => a + b, 0);
  const inertia = sumIy + sumIg - Math.pow(sumM, 2) / areaBeam;
  const n = sumM / areaBeam;
  const s = inertia / n;
  const fiVn = 0.9 * 0.6 * fy * (hw + tbf + ttf) * tw;
  const distNytf = arrY[2] - n;
  const qBsv = (fiVn * arrAreaBeam[0] * distNytf) / inertia;
  const eB = qBsv / (0.75 * 0.6 * fexx * 0.707 * 2);
  let eBmin = eB;
  let eTmin = eB;
  const tBMax = Math.max(tbf, tw);
  const tTMax = Math.max(ttf, tw);

  if (tBMax <= 6.4) {
    eBmin = 3;
  } else if (tBMax <= 12) {
    eBmin = 5;
  } else if (tBMax <= 19) {
    eBmin = 6;
  } else {
    eBmin = 8;
  }
  const eDef = Math.max(Math.ceil(eB), eBmin);

  return [
    arrAreaBeam[0],
    arrAreaBeam[1],
    arrAreaBeam[2],
    areaBeam,
    inertia,
    n,
    s,
    qBsv,
    eDef,
  ];
};
export default inertiaBeamI;
