import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollPage from '../../pages/scroll-page/scroll-page';
import css from './styles.module.scss';
import PagePrimary from '../../pages/page-primary/page-primary';
import PageSecondary from '../../pages/page-secondary/page-secondary';
import PageThird from '../../pages/page-third/page-third';
import PageFourth from '../../pages/page-fourth/page-fourth';

function App() {


  return (
    <div className={css.app}>
      {/* <ScrollPage /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/*" element={<ScrollPage />}>
            {/* <Route path="/main" element={<PageSecondary />} />
            <Route path="/statistics" element={<PageSecondary />} />
            <Route path="/galery" element={<PageThird />} />
            <Route path="/steps" element={<PageFourth />} /> */}
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
