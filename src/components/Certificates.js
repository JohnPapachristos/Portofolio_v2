import React from 'react'
import SQL from '../assets/SQLcertificate.png'
import JAVA from '../assets/Javacertificate.png'
import JS from '../assets/JScertificate.png'
import SPRING from '../assets/Springcertificate.png'
import DOCKER from '../assets/Dockercertificate.png'
import COMMUNICATION from '../assets/Communicationcertificate.png'

export const Certificates = () => {
  return (
    <div class="three sm md lg xl 2xl static font-serif antialiased "><br /><br />
      <div class="text-5xl font-extrabold text-center ">
        <span class="bg-clip-textalign-baseline font-extralight text-white shadow">
          Certificates
        </span><br></br><br /><br /><br /><br />
      </div>
      <p class="text-yellow-500  text-4xl text-center">Relational Databases and SQL</p> <br/>
      <img src={SQL} alt="Sql certificate text-center" class="cert " /><br /><br /><br />
      <p class="text-yellow-500  text-4xl text-center">Java Programming Masterclass covering Java 11 Java 17</p> <br/>
      <img src={JAVA} alt="Java certificate text-center" class="cert " /><br /><br /><br />
      <p class="text-yellow-500  text-4xl text-center">Javascript for Beginners</p> <br/>
      <img src={JS} alt="Js certificate text-center" class="cert " /><br /><br /><br />
      <p class="text-yellow-500  text-4xl text-center">Spring & Hibernate for Beginners</p> <br/>
      <img src={SPRING} alt="Spring boot certificate " class="cert " /><br /><br /><br />
      <p class="text-yellow-500  text-4xl text-center">Docker for Java Developers</p> <br/>
      <img src={DOCKER} alt="Docker certificate" class="cert " /><br /><br /><br />
      <p class="text-yellow-500  text-4xl text-center">The Complete Communication Skills</p> <br/>
      <img src={COMMUNICATION} alt="Communication certificate" class="cert " /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      </div>
  )
}

export default Certificates;