import { useState } from 'react';
import Form from './components/form/Form.jsx';
import beam_I_W from './assets/beam_I_W.png';
import styles from './styles/App.module.css';

function App() {
  const [properties, setProperties] = useState([]);

  return (
    <div>
      <div className={styles.header}>
        <h1>Welded Beam</h1>
        <a href='https://carlos-londono.dev/' target='_blank' rel='noreferrer'>
          by <span>carlos-londono.dev</span>
        </a>
        <h2>Beam data</h2>
      </div>
      <div className={styles.beamLayout}>
        <div className={styles.beamImage}>
          <img src={beam_I_W} alt='beam-image' />
        </div>
        <div className={styles.beamData}>
          <Form setProperties={setProperties} />
        </div>
      </div>
    </div>
  );
}

export default App;
