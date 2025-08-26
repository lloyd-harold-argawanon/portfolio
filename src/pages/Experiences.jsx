import GlitchText from '../components/reactbits/glitchtext/GlitchText';
import SpotlightCard from '../components/reactbits/SpotlightCard';

const Experiences = () => {
  return (
    <section id='experiences' className='section relative min-h-[100vh] w-full grid grid-cols-[auto_1fr] gap-2 pt-24'>
      <div className='h-full w-1 bg-[rgb(15,92,81)] rounded-xs'></div>
      <div className='grid grid-rows-[auto_1fr] gap-2'>
        <div className='w-full mx-3'>
          <GlitchText
            speed={2}
            enableShadows={true}
            enableOnHover={true}
            className='custom-class'
          >
            Work Experiences
          </GlitchText>
        </div>
        <div className='grid grid-rows-3 gap-4 xs:p-10 md:p-20 lg:p-24'>
          <div className='grid xs:grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 w-full px-10 bg-gradient-to-r from-[rgb(15,92,81)]/50 via-transparent to-transparent rounded-lg text-white'>
            <h4 className='text-2xl flex items-center justify-start'>Virtual Assistant / Technical Support / Web Management – Outsource</h4>
            <SpotlightCard className="custom-spotlight-card flex items-center justify-center text-center" spotlightColor="rgba(0, 229, 255, 0.2)">
              <desc>Managed client websites, handled technical troubleshooting, and provided administrative support.</desc>
            </SpotlightCard>
          </div>
          <div className='grid xs:grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 w-full  px-10 bg-gradient-to-l from-[rgb(15,92,81)]/50 via-transparent to-transparent rounded-lg text-white'>
            <h4 className='flex items-center justify-end text-2xl lg:hidden'>Freelance Developer – School Projects</h4>
            <SpotlightCard className="custom-spotlight-card flex items-center justify-center text-center" spotlightColor="rgba(0, 229, 255, 0.2)">
              <desc >Created console projects and functional web applications for academic requirements, focusing on usability and performance.</desc>
            </SpotlightCard>
             <h4 className='lg:flex items-center justify-end text-2xl hidden'>Freelance Developer – School Projects</h4>
          </div>
          <div className='grid xs:grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 w-full px-10 bg-gradient-to-r from-[rgb(15,92,81)]/50 via-transparent to-transparent rounded-lg text-white'>
            <h4 className='text-2xl flex items-center justify-start'>Intern – Mandaluyong City Government IT Department</h4>
            <SpotlightCard className="custom-spotlight-card flex items-center justify-center text-center" spotlightColor="rgba(0, 229, 255, 0.2)">
              <desc> Assisted in system maintenance, data management, and development tasks for internal government platforms.</desc>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences
