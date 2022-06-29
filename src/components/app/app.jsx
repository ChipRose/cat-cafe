import starsData from '../../mocks/stars-data.js';
import CatInfoContext from '../../util/context.js';
import PageWrapper from '../layout/page-wrapper/page-wrapper';

import './style.css';

function App() {
  return (
    <CatInfoContext.Provider value={{starsData}}>
      <PageWrapper />
    </CatInfoContext.Provider>
  );
}

export default App;
