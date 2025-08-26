import React from 'react'
import profile_img from '../assets/Profile.png'
import ProfileCard from '../components/reactbits/profilecard/ProfileCard'

const Home = () => {
  return (
    <section id="home" className='section min-h-screen w-full grid lg:grid-cols-2 gap-2 pt-24'>
      <div className=' flex justify-center items-center'>
        <div className='flex flex-col xxs:text-center lg:text-start gap-4'>
          <p className='xs:text-md text-2xl font-medium'>Hi!</p>
          <h1 className='xs:text-2xl lg:text-5xl font-bold'>I am <span className='text-[rgb(0,189,148)]'>Lloyd Harold Argawanon</span></h1>
          <desc className='xs:text-md  lg:text-xl '>
            — an aspiring developer with a strong foundation in programming and hands-on experience in both <span className='text-[rgb(0,189,148)]'>web development and virtual assistance</span>. I’m passionate about building responsive, user-friendly, and efficient applications.
          </desc>
          <desc className='xs:text-md lg:text-3xl flex gap-4 justify-center lg:justify-start'>
            <i class="devicon-git-plain-wordmark colored"></i>
            <i class="devicon-github-original-wordmark"></i> 
          </desc>
          <desc className='xs:text-md  lg:text-3xl flex gap-4 justify-center lg:justify-start'>
            <i class="devicon-react-original-wordmark colored"></i>
            <i class="devicon-tailwindcss-plain-wordmark colored"></i>
            <i class="devicon-bootstrap-plain-wordmark colored"></i>
            <i class="devicon-nodejs-plain-wordmark colored"></i>
            <i class="devicon-express-original-wordmark"></i>
            <i class="devicon-codeigniter-plain-wordmark colored"></i>
  
          </desc>
          <desc className='xs:text-md  lg:text-3xl flex gap-4 justify-center lg:justify-start'>
            <i class="devicon-javascript-plain colored"></i>
            <i class="devicon-css3-plain-wordmark colored"></i>
            <i class="devicon-html5-plain-wordmark colored"></i>
            <i class="devicon-php-plain colored"></i>
            <i class="devicon-java-plain-wordmark colored"></i>
            <i class="devicon-csharp-plain-wordmark colored"></i>
          </desc>
          <desc className='xs:text-md  lg:text-3xl flex gap-4 justify-center lg:justify-start'>
            <i class="devicon-mysql-plain-wordmark colored"></i>
            <i class="devicon-mongodb-plain-wordmark colored"></i>
          </desc>



        </div>
      </div>
      <div className=' flex justify-center items-center '>
        <div className='relative '>
          <ProfileCard
            name="LLOYD HAROLD ARGAWANON"
            handle="lhpargawanon"
            status="Online"
            contactText="Contact Me"
            avatarUrl={profile_img}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
          />
        </div>

      </div>
      
      
    </section>
  )
}

export default Home
