import { useState } from 'react'
import './Gallary.css'
import gallary1_1 from './images/gallary1_1.jpeg'
import gallary1_2 from './images/gallary1_2.jpeg'
import gallary1_3 from './images/gallary1_3.jpeg'
import gallary1_4 from './images/gallary1_4.jpeg'
import gallary1_5 from './images/gallary1_5.jpeg'
import gallary2_1 from "./images/gallary2_1.jpg"
import gallary2_2 from "./images/gallary2_2.jpg"
import gallary2_3 from "./images/gallary2_3.jpg"
import gallary2_4 from "./images/gallary2_4.jpg"
import gallary2_5 from "./images/gallary2_5.jpg"


function Gallary(){
    const [gallaryItem, setGallaryItem] = useState(null);
    const [activeGallaryIndex, setActiveGallaryIndex] = useState(0);
    const [currentDisplayIndex, setCurrentDisplayIndex] = useState(0);
    const [previewSizes, setPreviewSizes] = useState({});
    const [popupImgSize, setPopupImgSize] = useState(null);
    const [popupImgReady, setPopupImgReady] = useState(false);

    const handlePopupImageLoad = (e) => {
        const { naturalWidth, naturalHeight } = e.target;
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        if (naturalWidth >= vw || naturalHeight >= vh) {
            const scale = Math.min((vw * 0.75) / naturalWidth, (vh * 0.75) / naturalHeight);
            setPopupImgSize({ width: naturalWidth * scale, height: naturalHeight * scale });
        } else {
            setPopupImgSize({ width: naturalWidth, height: naturalHeight });
        }
        setPopupImgReady(true);
    };

    const handlePreviewLoad = (e, index) => {
        if (window.innerWidth <= 768) return;
        const { naturalWidth, naturalHeight } = e.target;
        setPreviewSizes(prev => ({
            ...prev,
            [index]: { width: naturalWidth * 0.3, height: naturalHeight * 0.3 }
        }));
    };

    const gallary = ["gallary1", "gallary2"]
    const gallaryDiscription = ["gallery1 text description", "gallery2 text description"]
    const gallaryArr1 = [gallary1_1, gallary1_2, gallary1_3, gallary1_4, gallary1_5]
    const gallaryArr2 = [gallary2_1, gallary2_2, gallary2_3, gallary2_4, gallary2_5]
    const gallaryArrays = [gallaryArr1, gallaryArr2]

    const CloseSVG = () => (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1" y1="1" x2="15" y2="15" stroke="#313131" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="15" y1="1" x2="1" y2="15" stroke="#313131" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    )

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

    const gallaryItemClicked = (item, index) => {
      setGallaryItem(item)
      setActiveGallaryIndex(index)
      setCurrentDisplayIndex(0)
      setPopupImgSize(null)
      setPopupImgReady(false)
    }

    const previousGallaryItem = () => {
      const activeArr = gallaryArrays[activeGallaryIndex]
      setPopupImgSize(null)
      setPopupImgReady(false)
      if(currentDisplayIndex == 0){
        setCurrentDisplayIndex(activeArr.length - 1)
      }else{
        setCurrentDisplayIndex(currentDisplayIndex - 1)
      }
    }

    const nextGallaryItem = () => {
      const activeArr = gallaryArrays[activeGallaryIndex]
      setPopupImgSize(null)
      setPopupImgReady(false)
      if(currentDisplayIndex == (activeArr.length - 1)){
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
                  <img
                    src={gallaryArrays[index][0]}
                    className={"gallary-item-img"}
                    style={previewSizes[index] ? { width: previewSizes[index].width, height: previewSizes[index].height } : {}}
                    onLoad={(e) => handlePreviewLoad(e, index)}
                    onClick={() => gallaryItemClicked(item, index)}
                  />
                  <div id="gallary-item-description" className="gallary-item-description" >
                    <p>{gallaryDiscription[index]}</p>
                  </div>
                </div>
              )
            })}

            {gallaryItem && (
              <div className="popup-wrapper">
                <div id="gallary-item-container" className="gallary-item-container">
                    <button className="close-btn" onClick={() => setGallaryItem(null)}>
                        <CloseSVG />
                    </button>

                    <div className="gallary-context">
                      <button className="previous-button" onClick={() => previousGallaryItem()}>
                          <PrevSVG />
                      </button>
                      <div id="gallary-library" className="gallary-library">
                        <img
                          className="current-gallary-img"
                          src={gallaryArrays[activeGallaryIndex][currentDisplayIndex]}
                          style={popupImgSize
                            ? { width: popupImgSize.width, height: popupImgSize.height, visibility: popupImgReady ? 'visible' : 'hidden' }
                            : { visibility: 'hidden' }}
                          onLoad={handlePopupImageLoad}
                        />
                      </div>
                      <button className="next-button" onClick={() => nextGallaryItem()}>
                          <NextSVG />
                      </button>
                    </div>

                </div>
              </div>
            )}
        </div>
    )
}

export default Gallary;
