import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import axios from 'axios';

const URL = "http://localhost:5000/jobs";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data) ;
} 
function App() {
const [jobs, setJobs] = useState();

useEffect(() =>{
  fetchHandler().then((data) => setJobs(data.jobs));
},[])
  return (
    <div className="App">
  <Navbar />
  <h1>hi</h1>
    </div>
  );
}

export default App;
