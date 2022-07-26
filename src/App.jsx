import { useState } from 'react';
import styles from './styles/App.module.css';
import BeamIEData from './components/beamData/BeamIEData.jsx';
import BeamIData from './components/beamData/BeamIData.jsx';
import BeamBData from './components/beamData/BeamBData.jsx';
import BeamIEResults from './components/beamResults/BeamIEResults.jsx';
import BeamIResults from './components/beamResults/BeamIResults.jsx';
import BeamBResults from './components/beamResults/BeamBResults.jsx';

function App() {
  const [beamIEProperties, setBeamIEProperties] = useState({});
  const [beamIProperties, setBeamIProperties] = useState({});
  const [beamBProperties, setBeamBProperties] = useState({});

  return (
    <>
      <div className={styles.header}>
        <h1>Equal Flanges Welded Plate Girder</h1>
      </div>
      <div className={styles.container}>
        <BeamIEData setBeamIEProperties={setBeamIEProperties} />
        <BeamIEResults beamIEProperties={beamIEProperties} />
      </div>
      <hr />
      <div className={styles.header}>
        <h1>Welded Plate Girder</h1>
      </div>
      <div className={styles.container}>
        <BeamIData setBeamIProperties={setBeamIProperties} />
        <BeamIResults beamIProperties={beamIProperties} />
      </div>
      <hr />
      <div className={styles.header}>
        <h1>Welded Box Girder</h1>
      </div>
      <div className={styles.container}>
        <BeamBData setBeamBProperties={setBeamBProperties} />
        <BeamBResults beamBProperties={beamBProperties} />
      </div>
      <div className={styles.footer}>
        <a href='https://carlos-londono.dev/' target='_blank' rel='noreferrer'>
          by <span>carlos-londono.dev</span>
        </a>
      </div>
    </>
  );
}

export default App;
