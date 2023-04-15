import React from "react";
import './style.scss';
import {useLocation} from 'react-router-dom';
import {dataFormat} from "../index";

const Branch = () => {
    const location = useLocation();
    const data = location.state?.branches?.suggestions;
    const index = location.state?.index;

    if (!data || !data.length) {
        return <div className='branch font2XL'>Данные не доступны. Пожалуйста, повторите запрос!</div>;
    }

    return <div className='branch'>
        <div className='branch__info'>
            <span>Название</span>
            <span className='info__result'>{data[index]?.data.name?.full_with_opf}</span>
        </div>

        <div className='branch__info'>
            <span>ИНН</span>
            <span className='info__result'>{data[index]?.data.inn}</span>
        </div>

        <div className='branch__info'>
            <span>Статус</span>
            <span className='info__result'>
                {data[index]?.data?.state.status === "ACTIVE" && 'Действующая организация'}
                {data[index]?.data?.state.status === "LIQUIDATED" && 'Ликвидирована'}
                {data[index]?.data?.state.status === "LIQUIDATING" && 'Ликвидируется'}
                {data[index]?.data?.state.status === "BANKRUPT" && 'Банкротство'}
                {data[index]?.data?.state.status === "REORGANIZING" && 'В процессе присоединения к другому юрлицу, с последующей ликвидацией'}
            </span>
        </div>

        <div className='branch__info'>
            <span>Дата основания</span>
            <span className='info__result'>{dataFormat(data[index]?.data.state.registration_date)}</span>
        </div>

        {data[index]?.data?.state.status === "LIQUIDATED" ?
            <div className='branch__info'>
                <span>Дата ликвидации</span>
                <span className='info__result'> {dataFormat(data[index]?.data?.state.liquidation_date)}</span>
            </div> : ''
        }

        {data[index]?.data?.management && (
            <div className='branch__info'>
                <span>{data[index]?.data?.management.post}</span>
                <span className='info__result'>{data[index]?.data?.management.name}</span>
            </div>
        )}

    </div>;
}
export default Branch;