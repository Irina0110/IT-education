import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Theme } from "../../../../api/themes";
import ThemeCard from "../Theme";
import './style.scss';
import LeftArrowIcon  from "../../../../static/icons/arrowLeft.svg";
import RightArrowIcon  from "../../../../static/icons/arrowRight.svg";
interface SliderProps {
    themes: Theme[];
}

function SliderComponent({ themes }: SliderProps) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: (
            <img src={RightArrowIcon} className="slick-next" onClick={() => {}} alt='next card' />
        ),
        prevArrow: (
            <img src={LeftArrowIcon} className="slick-prev" onClick={() => {}} alt='prev card' />
        ),
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 2.6,
                },
            },
            {
                breakpoint: 1750,
                settings: {
                    slidesToShow: 2.5,
                },
            },
            {
                breakpoint: 1550,
                settings: {
                    slidesToShow: 2.4,
                },
            },
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2.3,
                },
            },
            {
                breakpoint: 1450,
                settings: {
                    slidesToShow: 2.2,
                },
            },
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 2.1,
                },
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 1.9,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1.8,
                },
            },
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 1.7,
                },
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 1.6,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1.5,
                },
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 1.4,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1.3,
                },
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1.2,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1.1,
                },
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {themes.map((theme) => (
                <div key={theme.title}>
                    <ThemeCard theme={theme} />
                </div>
            ))}
        </Slider>
    );
}

export default SliderComponent;
