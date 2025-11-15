import './App.css';
import Navbar from './Components/Navbar/Navbar';
import DisplayJobs from './Components/DisplayJobs/DisplayJobs';
import PostJob from './Components/PostJob/PostJob';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>hi</h1>} />
        <Route path="/jobs" element={<DisplayJobs />} />
        <Route path="/postjob" element={<PostJob />} />
      </Routes>
    </div>
  );
}

export default App;
