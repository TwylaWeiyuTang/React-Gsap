
import { Routes, Route } from 'react-router-dom';
import CircleAnimation from './CircleAnimation';
import Home from './Home'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path='*' element={<Home />} />
        <Route path='/circle-animation' element={<CircleAnimation />} />
      </Routes>
    </div>
  );
}

export default App;
