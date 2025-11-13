import './App.css';
import Navbar from './Components/Navbar/Navbar';
import DisplayJobs from './Components/DisplayJobs/DisplayJobs';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>hi</h1>} />
        <Route path="/jobs" element={<DisplayJobs />} />
      </Routes>
    </div>
  );
}

export default App;
