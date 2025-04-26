import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';
import 'tachyons';

// const particlesOptions = {
//     particles: {
//         line_linked: {
//             shadow: {
//                 enable: true,
//                 color: '#3CA9D1',
//                 blur: 5
//             }
//         }
//     }
// }


function App() {
  return (
    <div className="App">
        <ParticlesBg type="cobweb" bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
        {/*<FaceRecognition />*/}
    </div>
  );
}

export default App;
