import './App.css';
import Navbar from './Components/Navbar/Navbar';
import DisplayJobs from './Components/DisplayJobs/DisplayJobs';
import DisplayWorkers from './Components/DisplayWorkers/displayWorkers';
import PostJob from './Components/PostJob/PostJob';
import PostWorkers from './Components/PostWorkers/PostWorkers';
import UpdateJobs from './Components/UpdtaeJobs/UpdateJobs';
import Home from './Components/Home/Home';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<DisplayJobs />} />
        <Route path="/workers" element={<DisplayWorkers />} />
        <Route path="/postjob" element={<PostJob />} />
        <Route path="/postworkers" element={<PostWorkers />} />
        <Route path="/updatejobs/:id" element={<UpdateJobs />} />
      </Routes>
    </div>
  );
}

export default App;
