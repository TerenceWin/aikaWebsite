import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import Gallary from './Gallary'
import NavBar from './NavBar'

function App() {
    const [contentVisible, setContentVisible] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        setContentVisible(true)
    }, [])

    const navigateWithFade = (path) => {
        if (path === "/") return
        setContentVisible(false)
        setTimeout(() => navigate(path), 250)
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div id="home" className="home-container">
            <NavBar currentPage="gallery" onNavigate={navigateWithFade} />

            <div className={`context ${contentVisible ? "content-visible" : "content-hidden"}`}>
                <Gallary onNavigate={navigateWithFade} />
            </div>

            <div id="footer" className="footer">
                <p>@2026 JINGUMAE</p>
                <button id="slide-top-button" className="topButton" onClick={scrollToTop}>
                    TOP
                </button>
            </div>
        </div>
    )
}

export default App
