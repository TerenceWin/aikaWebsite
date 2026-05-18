import './Gallary.css'
import { galleryItems } from './galleryData'

function Gallary({ onNavigate }) {
    return (
        <div id="gallary" className="gallary">
            {galleryItems.map((item) => (
                <div key={item.slug} className="gallary-item" onClick={() => onNavigate(`/gallery/${item.slug}`)}>
                    <img src={item.images[0]} className="gallary-item-img" />
                    <div className="gallary-item-description">
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Gallary
