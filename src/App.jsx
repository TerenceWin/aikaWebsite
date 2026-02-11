import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const navItem = ["about", "gallary"]
    const sns = ["instagram", "x", "facebook"]

    const gallary = ["gallary1", "gallary2", "gallary3", "gallary4", "gallary5"]
    const gallaryDiscription = ["gallary1 text description", "gallary2 text description", 
      "gallary3 text description", "gallary4 text description", "gallary5 textr description"]

    const aboutPage = () =>{
      console.log("About me page")
    }

    const gallaryPage = () => {
      console.log("gallary me page")
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

  return (
    <div id="home" className="home-container">
        <div id="header" className="header">
          <div id="name" className="name">
            NAME
          </div>
          <div id="menu" className="menu">
            {navItem.map((item, index) => {
              return (
                <div 
                  key={index} className="menu-item" onClick={actions[item]}>
                  {item.toUpperCase()}
                </div>
              )
            })}
          </div>
        </div>


        <div id="context" className="context">
            {gallary.map((item, index) => {
              return(
                <div id="gallary-item" className="gallary-item">
                  <img src={`/images/gallary1_${index + 1}.jpeg`} className="gallary-item-img"/>
                  <p>{gallaryDiscription[index]}</p>
                </div>
              )
            })}
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
                  <img src={`/images/${item}.png`} className="sns-logo"/>
                </button>
              )
            })

            }
          </div>
          <button id="slide-top-button" className="slide-top-button" onClick={scrollToTop}>
            TOP
          </button>
        </div>
    </div>
  )
}

export default App
