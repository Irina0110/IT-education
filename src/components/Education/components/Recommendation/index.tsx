import React from "react";
import './style.scss';
import ProgressBar from "../ProgressBar";

const Recommendation = () => {
    return (
        <div className='recommendation'>
            <h2 className='recommendation__title font2XL'>Рекомендуемые темы</h2>
            <div className='recommendation__card'>
                <ProgressBar progress={8} totalTasks={10}/>
                <div className='card__info'>
                    <h3 className='title font3XL'>Начало работы</h3>
                    <ul className='fontS'>
                        <li>Для новичка</li>
                        <li>Основы работы</li>
                    </ul>
                    <p className='fontM'>Познакомьтесь ближе с компанией и узнайте больше о том, что вы
                        делаете</p>
                    <div className='button_continue fontButton'>
                        Продолжить тему
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommendation;