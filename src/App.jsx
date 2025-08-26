//partials
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx';

//components
import DarkVeil from './components/reactbits/DarkVeil.jsx';
import LightRays from './components/reactbits/LightRays.jsx';

//pages
import Home from './pages/Home.jsx'
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx'
import Experiences from './pages/Experiences.jsx';
import Contacts from './pages/Contacts.jsx';



const App = () => {
  return (
    <>
      <div className='grid grid-rows-[auto_1fr] min-h-screen bg-[#171C22] w-full'>
        {/* Background components */}
        <div className='h-full w-full fixed z-0 opacity-10'>
          <DarkVeil />
        </div>
        <div className='h-full w-full fixed z-0 '>
          <LightRays
            raysOrigin="right"
            raysColor="#ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>

        {/* Header Section */}
        <div className={`w-full`}>
          <Header/>
        </div>

        {/* Main content */}
        <div className='grid gap-10 w-full py-4 xxs:px-4 lg:px-24 transition-all duration-300'>
          <Home/> 
          <Skills/> 
          <Projects/>
          <Experiences/>
          {/* <Contacts/> */}
        </div>
        <div id='contacts' className={`w-full z-20`}>
          <Footer/>
        </div>
        
          
        
        

      </div>
     
    </>
      

  )
}

export default App
