import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import './NavBar.css'

function NavBar({ currentPage, onNavigate }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const navItems = ["gallery", "about"]
    const paths = { gallery: "/", about: "/about" }

    const handleNavigate = (path) => {
        setMenuOpen(false)
        onNavigate(path)
    }

    return (
        <div id="header" className="header">
            <div className="name" onClick={() => handleNavigate("/")}>
                AIKA OHNO
            </div>

            {/* Desktop menu */}
            <div id="menu" className="menu">
                {navItems.map((item, index) => (
                    <div key={index} className="menu-item" onClick={() => handleNavigate(paths[item])}>
                        <p className={item === currentPage ? "selectedFontColor" : "notSelectedFontColor"}>
                            {item.toUpperCase()}
                        </p>
                    </div>
                ))}
            </div>

            {/* Mobile hamburger */}
            <button className="hamburger-btn" onClick={() => setMenuOpen(o => !o)}>
                <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
            </button>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div className="mobile-dropdown">
                    {navItems.map((item, index) => (
                        <div key={index} className="mobile-dropdown-item" onClick={() => handleNavigate(paths[item])}>
                            <p className={item === currentPage ? "selectedFontColor" : "notSelectedFontColor"}>
                                {item.toUpperCase()}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default NavBar
