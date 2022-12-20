import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section1 from './components/Sections/Section1';
import Section2 from './components/Sections/Section2';
import Sectionimages from './components/Sections/Sectionimages';
import Section3 from './components/Sections/Section3';
import Input from './components/Sections/Input';
import Footer from './components/Sections/Footer';
import Navbarrr from './components/Sections/Navbarrr';

function App() {





  return (
 <div className='App'> 
 <Navbarrr/>
 <Section1/>
 <Section2/>
 <Sectionimages/>
 <Section3/>
 <Input/>
 <Footer/>
  
  </div>
   
  );
}

export default App;
