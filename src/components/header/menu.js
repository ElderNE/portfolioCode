import '../../css/components/header/header-menu.css';
import telegramLogo from '../../pictures/svg/telegram-brands-gray.svg';
import vkLogo from '../../pictures/svg/vk-brands-gray.svg'
import gitHubLogo from '../../pictures/svg/github-brands-gray.svg';

import ButtonClose from './buttonClose'
function Menu() {
    return (
      <div id="menu" className="header-menu">
        <ButtonClose />
        <nav className="header-navigation">
            <ul className="header-navigation__nonDecorate">
                <li>
                    <a className="header-navigationText" href="#header">home</a>
                </li>
                <li>
                    <a className="header-navigationText" href="#about">about</a>
                </li>
                <li>
                    <a className="header-navigationText" href="#portfolio">portfolio</a>
                </li>
                <li>
                    <a  className="header-navigationText" href="#contacts">contacts</a>
                </li>
            </ul>
        </nav>
        <div className="header-social">
            <a href="https://telegram.com" target="_blank" rel="noreferrer">
                <img src={telegramLogo} width={25} height={25} alt="telegram"></img>
            </a>
            <a href="https://vk.com" target="_blank" rel="noreferrer">
                <img src={vkLogo} width={25} height={25} alt="vk"></img>
            </a>
            <a href="https://github.com/ElderNE" target="_blank" rel="noreferrer">
                <img src={gitHubLogo} width={25} height={25} alt="vk"></img>
            </a>
        </div> 
      </div>
    );
  }
  
  export default Menu;