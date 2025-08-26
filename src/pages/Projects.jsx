import GlitchText from '../components/reactbits/glitchtext/GlitchText';
import SpotlightCard from '../components/reactbits/SpotlightCard';
import project1_img from '../assets/slsu-procurement-prmonitor.png'
import project2_img from '../assets/mandaluyong-spso-dashboard.png'
  

const Projects = () => {
  return (
    <section id='projects' className='section relative w-full grid grid-cols-[auto_1fr] gap-2 pt-24'>
      <div className='h-full w-1 bg-[rgba(15,92,80,0.2)] rounded-xs'></div>
      <div className='grid grid-cols-1 grid-rows-[auto_1fr_1fr] lg:grid-cols-2 lg:grid-rows-[auto_1fr] gap-2'>
        <div className='col-span-2 w-full mx-3'>
          <GlitchText
            speed={2}
            enableShadows={true}
            enableOnHover={true}
            className='custom-class'
          >
            Featured Projects
          </GlitchText>
        </div>
        {/* project cards here */}
        {/* Project 1 Card */}
        <div className='flex item-center justify-start col-span-2 lg:col-span-1 xs:p-10 md:p-20 '>
          <SpotlightCard className="section-cards custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className='flex flex-col gap-2'>
              <img src={project1_img} alt="" className='rounded-lg w-full h-full'/>
              <div className='flex flex-col gap-2 p-2'>
                <div className='flex flex-wrap gap-2 text-3xl items-center'>
                  <i class="devicon-mongodb-plain-wordmark colored"></i>
                  <i class="devicon-express-original-wordmark"></i>
                  <i class="devicon-react-original-wordmark colored "></i>
                  <i class="devicon-nodejs-plain-wordmark colored"></i>
                  <i class="devicon-tailwindcss-plain-wordmark colored"></i>
                  <i className='xs:collapse lg:visible'>-</i>
                  <i class="devicon-html5-plain-wordmark colored"></i>
                  <i class="devicon-css3-plain-wordmark colored"></i>
                  <i class="devicon-javascript-plain colored"></i>
                </div>
                <h4 className='xs:text-xl lg:text-2xl'>| 💻 SLSU Procurement Monitoring System</h4>
                <desc>
                  ➤ 📝 - Web-based system to streamline procurement tracking and approval processes for Southern Luzon State University.
                </desc>
              </div>
            </div>
          </SpotlightCard>
        </div>
        {/* Project 2 Card */}
        <div className='flex item-center justify-start col-span-2 lg:col-span-1 xs:p-10 md:p-20 lg:p-24 '>
          <SpotlightCard className="section-cards2 custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className='flex flex-col gap-2'>
              <img src={project2_img} alt="" className='rounded-lg w-full h-full'/>
              <div className='flex flex-col gap-2 p-2'>
                <div className='flex flex-wrap gap-2 text-3xl items-center'>
                  <i class="devicon-mysql-plain-wordmark colored"></i>
                  <i class="devicon-codeigniter-plain-wordmark colored"></i>
                  <i class="devicon-bootstrap-plain-wordmark colored"></i>
                  <i>-</i>
                  <i class="devicon-php-plain colored"></i>
                  <i class="devicon-html5-plain-wordmark colored"></i>
                  <i class="devicon-css3-plain-wordmark colored"></i>
                  <i class="devicon-javascript-plain colored"></i>
                </div>
                <h4 className='xs:text-xl lg:text-2xl'>| 💻 Mandaluyong LMIS (Local Management Information System)</h4>
                <desc>
                  ➤ 📝 - Centralized platform for managing local government records and improving data accessibility.
                </desc>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  )
}

export default Projects
