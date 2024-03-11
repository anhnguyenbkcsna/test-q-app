import './App.css';
// import Header from './components/Header';
// import NavBar from './components/NavBar';
import KD from './pages/KD';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* localhost:3000/ */}
          <Route path="/KD" element={<KD />} />
          {/* <Route path="/VCNV" element={<VCNV />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <NavBar />
      <Header /> */}
    </div>
  );
}

export default App;
