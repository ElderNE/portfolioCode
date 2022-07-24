import '../../css/components/contacts/contacts.css';
import telegramLogo from '../../pictures/svg/telegram-brands-black.svg';
import vkLogo from '../../pictures/svg/vk-brands-black.svg';
import gitHubLogo from '../../pictures/svg/github-brands-black.svg';

function Contacts() {
    return (
      <section id="contacts" className="contacts">
        <a href="mailto:random24@yandex.ru" className="contacts-email"> </a>
        <div className="contacts-social">
          <a href="https://t.me/ElderNv" target="_blank" rel="noreferrer">
            <img className="contacts-img" src={telegramLogo} width={25} height={25} alt="telegram"></img>
          </a>
          <a href="https://vk.com" target="_blank" rel="noreferrer">
            <img className="contacts-img" src={vkLogo} width={25} height={25} alt="vk"></img>
          </a>
          <a href="https://github.com/ElderNE" target="_blank" rel="noreferrer">
            <img className="contacts-img" src={gitHubLogo} width={25} height={25} alt="vk"></img>
          </a>
        </div>
      </section>
    );
  }
  
  export default Contacts;