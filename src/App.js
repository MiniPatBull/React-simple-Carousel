import SlidesShow from './components/SlidesShow';
import { UnsplashImg } from './components/UnsplashArray';
import './css/App.css';

function App() {
  return <SlidesShow slides={UnsplashImg} />;
}

export default App;
