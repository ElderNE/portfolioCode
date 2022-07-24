import '../../css/components/header/picture.css';
import mguLogo from '../../pictures/background/mgu.png';
import { useState } from 'react';

function Picture() {

     //blur effect for header
     const [ blur , setBlur ] = useState(true);

     function focus(focus){
      setBlur(focus);
     }
   
     let enter = "leave";
   
     if (blur) {
       enter = "Leave";
     }
     else {
       enter = "Enter";
     }
  
    return (
      <div className={"header-picture header-blur"+enter} style={{"height": window.innerHeight+"px"}}>
        <img className={"header-logoMgu header-logoMgu"+enter} src={mguLogo} width={330} height={415} alt="mgu" onMouseEnter={()=>{focus(false);}} onMouseLeave={()=>focus(true)}></img>
        <div className="header-pictureItem">
          <div className="header-pictureBackground"></div>
          <div className="header-pictureText">
            <h2 className="header-pictureItem__textColor">Nuretdinov Eldar</h2>
            <h1 className="header-pictureItem__textColor">Web developer</h1>
            <p className="header-pictureItem__textColor">disign <code>&</code> create</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Picture;