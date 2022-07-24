import '../../css/components/about/about.css';
import photo from '../../pictures/photo.jpg'

function About() {
    return (
      <section id="about" className="about">
        <h2 className="about-font__colorBlack">Eldar Nuretdinov</h2>
        <div className="about-photo">
          <img className="about-photo__border" src={photo} alt="myphoto" height={300} width={300}></img>
        </div>
        <div className="about-text">
          <div className="about-text__center">
            <h3 className="about-font__colorBlack">My work</h3>
            <div className="about-lineElement"></div>
            <p className="about-font__colorGray">I am an engineer, so for me the</p>
            <p className="about-font__colorGray">application is a mechanism</p>
            <p className="about-font__colorGray">where all parts work clearly.</p>
          </div>
          <div className="about-text__center">
            <h3 className="about-font__colorBlack">My experience</h3>
            <div className="about-lineElement"></div>
            <p className="about-font__colorGray">I always have modern knowledge</p>
            <p className="about-font__colorGray">because i am everytime learning and</p>
            <p className="about-font__colorGray">learning new thinks.</p>
          </div>
          <div className="about-text__center">
            <h3 className="about-font__colorBlack">My target</h3>
            <div className="about-lineElement"></div>
            <p className="about-font__colorGray">I want to be part of a team that</p>
            <p className="about-font__colorGray">will create big projects.</p>
            <p className="about-font__colorGray"></p>
          </div>
        </div>
        <div className="about-education about-text__center">
          <h3 className="about-font__colorBlack">Education</h3>
          <div className="about-lineElement"></div>
          <h4 className="about-font__colorGray">Web developer</h4>
          <p className="about-font__colorGray">ITMO UNIVERSITY, 2021, Saint Petersburg, Russia</p>
          <h4 className="about-font__colorGray">Electronics engineer</h4>
          <p className="about-font__colorGray">PERM STATE TECHNICAL UNIVESITY, 2009, Perm, Russia</p>
        </div>
      </section>
    );
  }
  
  export default About;