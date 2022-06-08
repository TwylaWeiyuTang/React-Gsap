
import { Routes, Route } from 'react-router-dom';
import CircleAnimation from './components/CircleAnimation';
import Hero from './components/hero-section-animation/Hero';
import Home from './components/Home'
import ImageLoading from './components/image-loading/ImageLoading';
import SliderAnimation from './components/slider-animation/SliderAnimation';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path='*' element={<Home />} />
        <Route path='/circle-animation' element={<CircleAnimation />} />
        <Route path='/image-loading' element={<ImageLoading />} />
        <Route path='/slider-animation' element={<SliderAnimation /> } />
        <Route path='/hero-section-animation' element={<Hero /> } />
      </Routes>
    </div>
  );
}

export default App;
