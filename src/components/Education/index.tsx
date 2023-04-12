import React from "react";
import './style.scss';
import Recommendation from "./components/Recommendation";
import IconDown from '../../static/icons/IconDown.svg';
import FrontendWay from "./components/FrontendWay";

const Education = () => {

    return (
        <React.Fragment>
            <div className='education'>
                <div className='education__content'>
                    <Recommendation/>
                    <div className='education__show-more'>
                        <h4>
                            <button className='show-more'>Показать еще
                            <img src={IconDown} alt='IconDown'/>
                            </button>
                        </h4>
                    </div>
                    <FrontendWay/>

                </div>
            </div>
        </React.Fragment>
    )
}
export default Education;