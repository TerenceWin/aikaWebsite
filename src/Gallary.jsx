import { useState } from 'react'
import './Gallary.css'

function Gallary(){
    const [gallaryItem, setGallaryItem] = useState(null);

    const gallaryItemClicked = (item) => {
      setGallaryItem(item)
    }

    const gallary = ["gallary1"] //"gallary2", "gallary3", "gallary4", "gallary5"
    const gallaryDiscription = ["gallary1 text description"] //, "gallary2 text description", "gallary3 text description", "gallary4 text description", "gallary5 textr description"
    
    return(
        <div id="gallary" className="gallary">
            {gallary.map((item, index) => {
              return(
                <div id="gallary-item" className="gallary-item" key={index}>
                  <img src={`/images/gallary${index + 1}_1.jpeg`} className={"gallary-item-img"}
                  onClick={() => gallaryItemClicked(item)}/>
                  <div id="gallary-item-description" className="gallary-item-description" >
                    <p>{gallaryDiscription[index]}</p>
                  </div>
                </div>
              )
            })}

            {gallaryItem && (
              <div className="popup-wrapper">
                <div id="gallary-item-container" className="gallary-item-container">
                  <h1>GallaryItem </h1>
                </div>
                <button className="close-btn" onClick={() => setGallaryItem(null)}>Close</button>
              </div>
            )}
        </div>
    )
}

export default Gallary;