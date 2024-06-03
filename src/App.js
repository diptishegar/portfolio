import BgVideo from './video/vid-bg.mp4';
import './App.css';

function App() {
  return (
    <>
      <video autoPlay loop muted className="bg-vid"> <source src={BgVideo} type="video/mp4" /> </video>
    </>
  );
}

export default App;
