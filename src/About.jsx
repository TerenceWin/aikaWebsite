import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import './About.css'
import NavBar from './NavBar'

function About() {
    const [contentVisible, setContentVisible] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        setContentVisible(true)
    }, [])

    const navigateWithFade = (path) => {
        if (path === "/about") return
        setContentVisible(false)
        setTimeout(() => navigate(path), 250)
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div id="home" className="home-container">
            <NavBar currentPage="about" onNavigate={navigateWithFade} />

            <div className={`context ${contentVisible ? "content-visible" : "content-hidden"}`}>
                <div className="aboutWrapper">
                    <h2 className="aboutTitle">ABOUT</h2>
                    <div className="aboutContent">
                        <p className="aboutDescription">
                            Aika Ohno is a spatial designer working across interior and experiential design.<br />
                            Her work explores the relationship between concept and space — shaped by a life between London and Tokyo.<br />
                            She studied Marketing in Tokyo and Interior Design in London.
                        </p>
                        <div className="contactSection">
                            <p>Mail: aikaohno.work@gmail.com</p>
                            <p>Instagram: <a className="igLink" href="https://www.instagram.com/aikaohno/">@aikaohno</a></p>
                            <div className="placeholder"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="footer" className="footer">
                <p>@2026 JINGUMAE</p>
                <button className="topButton" onClick={scrollToTop}>
                    TOP
                </button>
            </div>
        </div>
    )
}

export default About
