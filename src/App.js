import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Work1 from './pages/Work1';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />}></Route>
        <Route path="/work1" element={<Work1 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
