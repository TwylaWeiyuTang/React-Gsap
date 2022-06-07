
import { Routes, Route } from 'react-router-dom';
import CircleAnimation from './components/CircleAnimation';
import Home from './components/Home'
import ImageLoading from './components/image-loading/ImageLoading';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path='*' element={<Home />} />
        <Route path='/circle-animation' element={<CircleAnimation />} />
        <Route path='/image-loading' element={<ImageLoading />} />
      </Routes>
    </div>
  );
}

export default App;
