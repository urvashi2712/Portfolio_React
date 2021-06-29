import './App.css';
import Aboutme from './components/Aboutme';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projectsection from './components/Projectsection';
import Blogsection from './components/Blogsection';
import Reccomendationsection from './components/Reccomendationsection';
import Title from './components/Title';
import Technologystack from './components/Technologystack';
import Recc from './components/Recc';
function App() {
  return (
    <div>
      <Navbar/>
      <Title name="Urvashi Sarda" leadtext="I am a freelancer from India."/>
      <Reccomendationsection/>
      <Technologystack/>
      <Projectsection/>
      <Aboutme/>
      <Blogsection/>
      <Footer/>
      <Recc/>
    </div>
  );
}

export default App;
