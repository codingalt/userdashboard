import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TopFolderMenu from './components/TopFolderMenu';

function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Home />} />
      </Routes>
    
    </>
  );
}

export default App;
