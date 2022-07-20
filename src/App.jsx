import { useState } from 'react';
import styles from './styles/App.module.css';
import BeamData from './components/beamData/BeamData.jsx';
import BeamResults from './components/beamResults/BeamResults.jsx';

function App() {
  const [beamproperties, setBeamProperties] = useState({});

  return (
    <>
      <div className={styles.header}>
        <h1>I Shape Welded Beam</h1>
      </div>
      <div className={styles.container}>
        <BeamData setBeamProperties={setBeamProperties} />
        <BeamResults beamproperties={beamproperties} />
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
