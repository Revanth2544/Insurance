import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch, BrowserRouter } from 'react-router-dom';
import Insurance from './insurance';
import InsuranceNextPage from './insuranceNextPage';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Insurance />} />
          <Route path="/nextpage" element={<InsuranceNextPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
