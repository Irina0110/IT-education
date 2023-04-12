import React, {useEffect, useState} from "react";
import './style.scss';
import {Theme} from "../../../../api/themes";
import {fetchThemes} from "../../../../api";
import SliderComponent from "../Slider";

const FrontendWay = () => {
    const [Themes, setThemes] = useState<Theme[]>([]);
    useEffect(() => {
        fetchThemes().then((data) => {
            setThemes(data);
        });
    }, []);
    return (
        <div className='frontend-way'>
            <h2 className='content__title font2XL'>Путь Front End Developer</h2>
            <SliderComponent themes={Themes}/>
        </div>
    )
};
export default FrontendWay;