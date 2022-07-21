import { useState } from 'react';
import styles from './styles/App.module.css';
import BeamIData from './components/beamData/BeamIData.jsx';
import BeamIResults from './components/beamResults/BeamIResults.jsx';

function App() {
  const [beamIProperties, setBeamIProperties] = useState({});
  const [beamBProperties, setBeamBProperties] = useState({});

  return (
    <>
      <div className={styles.header}>
        <h1>I Shape Welded Beam</h1>
      </div>
      <div className={styles.container}>
        <BeamIData setBeamIProperties={setBeamIProperties} />
        <BeamIResults beamIProperties={beamIProperties} />
      </div>
      <div className={styles.header}>
        <h1>Box Shape Welded Beam</h1>
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
