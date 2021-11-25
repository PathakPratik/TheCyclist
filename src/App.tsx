import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navigation from './components/AppBar';
import MyTrips from './components/MyTrips';
 
const App = () => {
  return (      
      <BrowserRouter>
      <div className="App">
        <Navigation />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/trips" element={<MyTrips/>}/>
          </Routes>
      </div> 
    </BrowserRouter>
  );
}
 
export default App;