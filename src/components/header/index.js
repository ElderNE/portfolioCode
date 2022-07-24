import '../../css/components/header/header.css';
import Menu from './menu';
import Button from './button';
import ButtonUp from './buttonUp';
import Picture from './picture';
import { useState } from 'react';

function Header() {

  //parralax effect for header
  const [ style , setStyle ] = useState({
    "backgroundPosition": "50% 50%"
  });

  function parralax(e) {
    let w = window.innerWidth/2;
    let h = window.innerHeight/2;
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    let depth = `${50 - (mouseX - w) * 0.02}% ${50 - (mouseY - h) * 0.02}%`;
    setStyle({
      "backgroundPosition": depth
    });
  }

  return (
    <>
        <header className="header header_backgroundImg" id="header" onMouseMove={(e)=>parralax(e)} style={style}>
            <Menu />
            <Button />
            <Picture /> 
            <ButtonUp />
        </header>
    </>
  );
}

export default Header;