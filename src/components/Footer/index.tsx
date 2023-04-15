import React, {useState, useEffect} from "react";
import axios from "axios";
import {useGeolocated} from "react-geolocated";
import './style.scss';

const Footer: React.FC = () => {
    const [city, setCity] = useState("");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const {
        coords,
        isGeolocationEnabled,
        isGeolocationAvailable,
    } = useGeolocated({
        positionOptions: {
            enableHighAccuracy: true,
        },
        userDecisionTimeout: 5000,
    });

    useEffect(() => {
        if (coords) {
            const {latitude, longitude} = coords;
            axios
                .post(
                    "https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address",
                    {
                        lat: latitude,
                        lon: longitude,
                        radius_meters: 1000,
                        count: 1,
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Token " + "8958872a89ed33718f1af6923c159609cc7240fc",
                            "X-Secret": "6199bf4581be4183008c0dc4dca6f25fa98bbfe2",
                        },
                    }
                )
                .then((response) => {
                    console.log(response)
                    const city = response.data.suggestions[0].data.city;
                    setCity(city);
                    setLatitude(latitude);
                    setLongitude(longitude);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [coords]);

    if (!isGeolocationEnabled || !isGeolocationAvailable) {
        return <div className='footer footer__text-main fontM'>Геолокация не доступна</div>;
    }

    if (!coords) {
        return <div className='footer footer__text-main fontM'>Определение геолокации...</div>;
    }

    return (
        <div className='footer'>
            <div className='footer__text-main fontM'>Ваша геолокация: {city}</div>
            <div className='footer__text-secondary fontS'>Широта: {latitude.toFixed(4)}</div>
            <div className='footer__text-secondary fontS'>Долгота: {longitude.toFixed(4)}</div>
        </div>
    );
};

export default Footer;
