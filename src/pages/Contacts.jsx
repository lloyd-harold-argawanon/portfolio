import GlitchText from '../components/reactbits/glitchtext/GlitchText';
const Contacts = () => {
  return (
    <section id='contacts' className='section min-h-[100vh] w-full grid grid-cols-2 grid-rows-[100px_1fr] gap-2  pt-24'>
        <div className='col-span-3 bg-gray-400 w-full flex justify-center items-center text-2xl font-bold'>
          <GlitchText
              speed={10}
              enableShadows={false}
              enableOnHover={false}
              className='custom-class'
            >
              Contacts
          </GlitchText>
        </div>
        <div className='bg-gray-400 w-full h-full'>
            Container 1
        </div>
        <div className='bg-gray-400 w-full h-full'>
            Container 2
        </div>
    </section>
  )
}

export default Contacts
