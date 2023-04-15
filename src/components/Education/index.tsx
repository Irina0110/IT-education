import React, {useState} from "react";
import './style.scss';
import Recommendation from "./components/Recommendation";
import IconDown from '../../static/icons/IconDown.svg';
import IconUp from '../../static/icons/IconUp.svg';
import FrontendWay from "./components/FrontendWay";
import CatalogThemes from "./components/CatalogThemes";

const Education = () => {
    const [showButton, setStateButton] = useState(true);

    const handleSetState = () => {
        const hiddenContent = document.getElementById('hiddenContent');
        if (hiddenContent) {
            if(showButton){
                hiddenContent.style.display = 'none';
                setStateButton(false)
            } else {
                hiddenContent.style.display = 'block';
                setStateButton(true)
            }
        }
    }

    return (
        <React.Fragment>
            <div className='education'>
                <div className='education__content'>
                    <Recommendation/>
                    <div className='education__show-more'>
                        <h4>
                            <button className='show-more' onClick={handleSetState}>
                                {!showButton && (
                                    <div>
                                        <span>Показать еще</span>
                                        <img src={IconDown} alt='IconDown'/>
                                    </div>
                                )}
                                {showButton && (
                                    <div>
                                        Скрыть
                                        <img src={IconUp} alt='IconUp'/>
                                    </div>
                                )}
                            </button>
                        </h4>
                    </div>
                    <div id='hiddenContent'>
                        <FrontendWay/>
                        <CatalogThemes/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Education;