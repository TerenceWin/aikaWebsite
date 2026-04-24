import { useState } from 'react'
import './App.css'
import Gallary from './Gallary'
import About from './About'
import instagramIcon from './images/instagram.png'
import xIcon from './images/x.png'
import facebookIcon from './images/facebook.png'

function App() {
    const navItem = ["gallery", "about"]
    const sns = ["instagram", "x", "facebook"]

    const [menuItem, setMenuItem] = useState("gallery"); 
    const [isAbout, setIsAbout] = useState(false); 

    const getMenuItemColor = (currentItem) => {
      if(currentItem == menuItem){
        return "selectedFontColor"
      }else{
        return "notSelectedFontColor"
      }
    }

    const aboutPage = () =>{
      setMenuItem("about")
      setIsAbout(true)
    }

    const galleryPage = () => {
      setMenuItem("gallery")
      setIsAbout(false)
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    }

    const actions = {
      "about": aboutPage,
      "gallery": galleryPage,
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
            {menuItem === "gallery" && <Gallary />}
            {menuItem === "about" && <About />}
        </div>

        <div id="footer" className={isAbout ? `footerHidden` : `footer`}>
          <div id="footer-left" className="footer-left">
            <p>@2026 JINGUMAE</p>
          </div>
          <button id="slide-top-button" className="topButton" onClick={scrollToTop}>
            TOP
          </button>
        </div>
    </div>
  )
}

export default App
