import { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './App.css'
import './GallaryItem.css'
import NavBar from './NavBar'
import { galleryItems } from './galleryData'

const PrevSVG = () => (
    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="8,1 1,8 8,15" stroke="#313131" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
)

const NextSVG = () => (
    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="1,1 8,8 1,15" stroke="#313131" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
)

function GallaryItemPage() {
    const { slug } = useParams()
    const item = galleryItems.find(g => g.slug === slug)
    const images = item?.images
    const description = item?.description

    const [currentIndex, setCurrentIndex] = useState(0)
    const [outgoingIndex, setOutgoingIndex] = useState(null)
    const [outgoingClass, setOutgoingClass] = useState('')
    const [incomingClass, setIncomingClass] = useState('')
    const [contentVisible, setContentVisible] = useState(false)
    const touchStartX = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        setContentVisible(true)
    }, [])

    const navigateWithFade = (path) => {
        setContentVisible(false)
        setTimeout(() => navigate(path), 250)
    }

    const isTransitioning = outgoingIndex !== null

    const startTransition = (newIndex, outClass, inClass) => {
        if (isTransitioning) return
        setOutgoingIndex(currentIndex)
        setOutgoingClass(outClass)
        setIncomingClass(inClass)
        setCurrentIndex(newIndex)
    }

    const prev = () => {
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
        startTransition(newIndex, 'slide-out-to-right', 'slide-in-from-left')
    }

    const next = () => {
        const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1
        startTransition(newIndex, 'slide-out-to-left', 'slide-in-from-right')
    }

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return
        const diff = touchStartX.current - e.changedTouches[0].clientX
        if (diff > 50) next()
        else if (diff < -50) prev()
        touchStartX.current = null
    }

    const handleOutgoingAnimationEnd = () => {
        setOutgoingIndex(null)
        setOutgoingClass('')
        setIncomingClass('')
    }

    if (!images) return null

    return (
        <div id="home" className="home-container">
            <NavBar currentPage="gallery" onNavigate={navigateWithFade} />

            <div className={`context ${contentVisible ? "content-visible" : "content-hidden"}`}>
                <div className="gallery-item-page">
                    <div className="gallery-item-viewer">
                        <button className="gallery-nav-btn" onClick={prev}>
                            <PrevSVG />
                        </button>

                        <div
                            className="gallery-item-img-wrapper"
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >
                            {isTransitioning && (
                                <img
                                    key={`out-${outgoingIndex}`}
                                    src={images[outgoingIndex]}
                                    className={`gallery-item-main-img img-absolute ${outgoingClass}`}
                                    onAnimationEnd={handleOutgoingAnimationEnd}
                                />
                            )}
                            <img
                                key={`in-${currentIndex}`}
                                src={images[currentIndex]}
                                className={`gallery-item-main-img ${isTransitioning ? `img-absolute ${incomingClass}` : ''}`}
                            />
                        </div>

                        <button className="gallery-nav-btn" onClick={next}>
                            <NextSVG />
                        </button>
                    </div>
                    <p className="gallery-item-title">{description}</p>
                </div>
            </div>

            <div id="footer" className="footer">
                <p>@2026 JINGUMAE</p>
            </div>
        </div>
    )
}

export default GallaryItemPage
