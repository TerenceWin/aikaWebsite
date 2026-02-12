import { useState } from 'react'
import './Gallary.css'
import gallary1_1 from '../public/images/gallary1_1.jpeg'
import gallary1_2 from '../public/images/gallary1_2.jpeg'
import gallary1_3 from '../public/images/gallary1_3.jpeg'
import gallary1_4 from '../public/images/gallary1_4.jpeg'
import gallary1_5 from '../public/images/gallary1_5.jpeg'

function Gallary(){
    const [gallaryItem, setGallaryItem] = useState(null);
    const [currentDisplayIndex, setCurrentDisplayIndex] = useState(0);

    const gallary = ["gallary1"] //"gallary2", "gallary3", "gallary4", "gallary5"
    const gallaryDiscription = ["gallary1 text description"] //, "gallary2 text description", "gallary3 text description", "gallary4 text description", "gallary5 textr description"
    const gallaryArr1 = [gallary1_1, gallary1_2, gallary1_3, gallary1_4, gallary1_5]

    const previous = "<<"
    const next = ">>"

    const gallaryItemClicked = (item) => {
      setGallaryItem(item)
      setCurrentDisplayIndex(0)
    }

    const previousGallaryItem = () => {
      if(currentDisplayIndex == 0){
        setCurrentDisplayIndex(gallaryArr1.length - 1)
      }else{
        setCurrentDisplayIndex(currentDisplayIndex - 1)
      }
    }

    const nextGallaryItem = () => {
      if(currentDisplayIndex == (gallaryArr1.length - 1)){
        setCurrentDisplayIndex(0)
      }else{
        setCurrentDisplayIndex(currentDisplayIndex + 1)
      }
    }

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
                    <button className="close-btn" onClick={() => setGallaryItem(null)}>X</button>
                    
                    <div className="gallary-context">
                      <button className="previous-button" onClick={() => previousGallaryItem()}>{previous}</button>
                      <div id="gallary-library" className="gallary-library">
                        <img className="current-gallary-img" src={gallaryArr1[currentDisplayIndex]} />
                      </div>
                      <button className="next-button" onClick={() => nextGallaryItem()}>{next}</button>
                    </div>
                    
                </div>
              </div>
            )}
        </div>
    )
}

export default Gallary;