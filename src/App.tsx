import { Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './components';

function App() {
  return (
    
    <div className="App">
      <Routes >
        <Route path="/" element={<Content />}/>
      </Routes>
    </div>
    
  );
}

export default App;
