import React, {useEffect, useState} from "react";
import './style.scss';
import {Theme} from "../../../../api/themes";
import {fetchThemes} from "../../../../api";
import SliderComponent from "../Slider";

const FrontendWay = () => {
    const [Themes, setThemes] = useState<Theme[]>([]);
    const [showOnlyCompleted, setShowOnlyCompleted] = useState(false);
    const handleFilterToggle = () => {
        setShowOnlyCompleted((prev) => !prev);
    };
    useEffect(() => {
        fetchThemes().then((data) => {
            setThemes(data);
        });
    }, []);
    return (
        <div className='frontend-way'>
            <div className='content__title font2XL'>Путь Front End Developer
                <div className='button_hide' onClick={handleFilterToggle}>
                    {showOnlyCompleted ? "Показать все" : "Скрыть пройденные"}
                </div>
            </div>
            <SliderComponent themes={Themes} filter={showOnlyCompleted}/>
        </div>
    )
};
export default FrontendWay;