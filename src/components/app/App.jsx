import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollPage from '../../pages/scroll/index';
import css from './styles.module.scss';

function App() {
  return (
    <div className={css.app}>
      <BrowserRouter basename='/dream_house'>
        <Routes>
          <Route exact path='/*' element={<ScrollPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

