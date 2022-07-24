import '../../css/components/portfolio/portfolio.css';
import game15Logo from '../../pictures/portfolio/Game15.jpg';
import weatherLogo from '../../pictures/portfolio/weather.jpg';
import faindBookLogo from '../../pictures/portfolio/faindBook.jpg';
import schoolLogo from '../../pictures/portfolio/school.jpg';
import landingLogo from '../../pictures/portfolio/landing.jpg';


function Portfolio() {
    return (
      <section id="portfolio">
        <h2 className="portfolio-h2">Portfolio</h2>
        <div className="portfolio">
          <div className="portfolio-items">
            <a href="https://elderne.github.io/weatherApp/" target="_blank" rel="noreferrer">
              <div className="portfolio-itemsScaleContainer">
                <img src={weatherLogo} width={300} height={300} alt="portfolio img 1" className="portfolio-items__border"></img>
              </div>
            </a>
            <a className="portfolio-a__decoration" href="https://elderne.github.io/weatherApp/" target="_blank" rel="noreferrer">
              <h3 className="portfolio__textColor">Weather app</h3>
            </a>  
            <p className="portfolio__textColor">HTML5, CSS, Canvas, API, Flexbox, ReactJS</p>
            <div className="portfolio-urls">
              <a className="portfolio-a__decoration" href="https://github.com/ElderNE/weatherAppCode" target="_blank" rel="noreferrer">
                <h4 className="portfolio__textColor">Check the code</h4>
              </a>
              <code>&nbsp;&&nbsp;</code>
              <a className="portfolio-a__decoration" href="https://elderne.github.io/weatherApp/" target="_blank" rel="noreferrer">
                <h4 className="portfolio__textColor">try the App</h4>
              </a>
            </div>
          </div>
          <div className="portfolio-items">
            <a href="https://elderne.github.io/faindBooks/" target="_blank" rel="noreferrer">
              <div className="portfolio-itemsScaleContainer">
                <img src={faindBookLogo} width={300} height={300} alt="portfolio img 2" className="portfolio-items__border"></img>
              </div>  
            </a>
            <a className="portfolio-a__decoration" href="https://elderne.github.io/faindBooks/" target="_blank" rel="noreferrer">
              <h3 className="portfolio__textColor">Books fainder app</h3>
            </a>
            <p className="portfolio__textColor">HTML5, CSS, API, Flexbox, ReactJS, Redux</p>
            <div className="portfolio-urls">
              <a className="portfolio-a__decoration" href="https://github.com/ElderNE/faindBooksCode" target="_blank" rel="noreferrer">
                <h4 className="portfolio__textColor">Check the code</h4>
              </a>
              <code>&nbsp;&&nbsp;</code>
              <a className="portfolio-a__decoration" href="https://elderne.github.io/faindBooks/" target="_blank" rel="noreferrer">
                <h4 className="portfolio__textColor">try the App</h4>
              </a>
            </div>
          </div>
          <div className="portfolio-items">
            <a href="https://elderne.github.io/15-Game/" target="_blank" rel="noreferrer">
              <div className="portfolio-itemsScaleContainer">
                <img src={game15Logo} width={300} height={300} alt="portfolio game15" className="portfolio-items__border"></img>
              </div>  
            </a>
            <a className="portfolio-a__decoration" href="https://elderne.github.io/15-Game/" target="_blank" rel="noreferrer">
              <h3 className="portfolio__textColor">Game-15 app</h3>
            </a>
            <p className="portfolio__textColor">HTML5, CSS, Bootstrap, JavaScrips</p>
            <div className="portfolio-urls">
              <a className="portfolio-a__decoration" href="https://github.com/ElderNE/15-Game" target="_blank" rel="noreferrer">
                <h4 className="portfolio__textColor">Check the code</h4>
              </a>
              <code>&nbsp;&&nbsp;</code>
              <a className="portfolio-a__decoration" href="https://elderne.github.io/15-Game/" target="_blank" rel="noreferrer">
                <h4 className="portfolio__textColor">try the App</h4>
              </a>
            </div>
          </div>
          <div className="portfolio-items">
            <a href="http://194.87.101.81/" target="_blank" rel="noreferrer">
              <div className="portfolio-itemsScaleContainer">
                <img src={schoolLogo} width={300} height={300} alt="portfolio game15" className="portfolio-items__border"></img>
              </div>  
            </a>
            <a className="portfolio-a__decoration" href="http://194.87.101.81/" target="_blank" rel="noreferrer">
              <h3 className="portfolio__textColor">School test app</h3>
            </a>
            <p className="portfolio__textColor">HTML5, CSS, Node.JS, NextJs, Sequelize, MySql</p>
            <div className="portfolio-urls">
              <a className="portfolio-a__decoration" href="http://194.87.101.81/" target="_blank" rel="noreferrer">
                <h4 className="portfolio__textColor">Check the code</h4>
              </a>
              <code>&nbsp;&&nbsp;</code>
              <a className="portfolio-a__decoration" href="http://194.87.101.81/" target="_blank" rel="noreferrer">
                <h4 className="portfolio__textColor">try the App</h4>
              </a>
            </div>
          </div>
          <div className="portfolio-items">
            <a href="https://elderne.github.io/portfolio/" target="_blank" rel="noreferrer">
              <div className="portfolio-itemsScaleContainer">
                <img src={landingLogo} width={300} height={300} alt="portfolio game15" className="portfolio-items__border"></img>
              </div>  
            </a>
            <a className="portfolio-a__decoration" href="https://elderne.github.io/portfolio/" target="_blank" rel="noreferrer">
              <h3 className="portfolio__textColor">Landing</h3>
            </a>
            <p className="portfolio__textColor">HTML5, CSS, ReactJS</p>
            <div className="portfolio-urls">
              <a className="portfolio-a__decoration" href="https://github.com/ElderNE/portfolioCode" target="_blank" rel="noreferrer">
                <h4 className="portfolio__textColor">Check the code</h4>
              </a>
              <code>&nbsp;&&nbsp;</code>
              <a className="portfolio-a__decoration" href="https://elderne.github.io/portfolio/" target="_blank" rel="noreferrer">
                <h4 className="portfolio__textColor">try the App</h4>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Portfolio;