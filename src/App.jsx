import { useState } from 'react'
import './App.css'
import Gallary from './Gallary'
import About from './About'
import instagramIcon from './images/instagram.png'
import xIcon from './images/x.png'
import facebookIcon from './images/facebook.png'
function App() {
    const navItem = ["about", "gallary"]
    const sns = ["instagram", "x", "facebook"]

    const [menuItem, setMenuItem] = useState("gallary"); 

    const getMenuItemColor = (currentItem) => {
      if(currentItem == menuItem){
        return "selectedFontColor"
      }else{
        return "notSelectedFontColor"
      }
    }

    const aboutPage = () =>{
      setMenuItem("about")
    }

    const gallaryPage = () => {
      setMenuItem("gallary")
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    }

    const actions = {
      "about": aboutPage,
      "gallary": gallaryPage,
    };

    const snsIcons = { instagram: instagramIcon, x: xIcon, facebook: facebookIcon };

  return (
    <div id="home" className="home-container">
        <div id="header" className="header">
          <div id="name" className="name">
            AIKA OHNO
          </div>
          <div id="menu" className="menu">
            {navItem.map((item, index) => {
              let colorClassName = getMenuItemColor(item)
              return (
                <div 
                  key={index} className="menu-item" onClick={actions[item]}>
                  <p id="menu-label" className={colorClassName}>
                    {item.toUpperCase()}
                  </p>
                </div>
              )
            })}
          </div>
        </div>


        <div id="context" className="context">
            {menuItem === "gallary" && <Gallary />}
            {menuItem === "about" && <About />}
        </div>

          <hr className="hr-for-footer"/>

        <div id="footer" className="footer">
          <div id="footer-left" className="footer-left">
            <p>@2026 JINGUMAE</p>
          </div>
          <div id="SNS" className="SNS">
            {sns.map((item, index) => {
              return(
                <button key={index} id ={`${index}`} className="SNS-item">
                  <img src={snsIcons[item]} className="sns-logo"/>
                </button>
              )
            })}
          </div>
          <button id="slide-top-button" className="slide-top-button" onClick={scrollToTop}>
            TOP
          </button>
        </div>
    </div>
  )
}

export default App
