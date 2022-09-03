import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar/Navbar';
import Feedback from './component/Feedback/Fedback';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Feature from "./component/Feature/Feature"
import Slider from './component/Slider/Slider';
import Experience from './component/Experience/Experience';
import Footer from './component/Footer/Footer';
import Project from './component/Project/Project';
import ProjectSlide from "./component/Project/ProjectSlide"
import Home from './component/Home/Home';
function App() {
  return (
    <div className="App">
      <Navbar />

      <Slider />
      <Feature />
      {/* <Experience/> */}
      <ProjectSlide />
      {/* <Project/> */}
      {/* <Feedback /> */}
      <Footer />
    </div>
  );
}

export default App;
