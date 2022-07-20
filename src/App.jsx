import { useState } from 'react';
import styles from './styles/App.module.css';
import BeamData from './components/beamData/BeamData.jsx';
import BeamResults from './components/beamResults/BeamResults.jsx';

function App() {
  const [properties, setProperties] = useState({});

  console.log('desde app', properties);

  return (
    <>
      <div className={styles.header}>
        <h1>Welded Beam</h1>
        <a href='https://carlos-londono.dev/' target='_blank' rel='noreferrer'>
          by <span>carlos-londono.dev</span>
        </a>
      </div>
      <div className={styles.container}>
        <BeamData setProperties={setProperties} />
        <BeamResults properties={properties} />
      </div>
    </>
  );
}

export default App;
