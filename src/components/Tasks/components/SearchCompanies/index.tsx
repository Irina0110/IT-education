import {DaDataParty, DaDataSuggestion, PartySuggestions} from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import {useEffect, useState} from "react";
import './style.scss'
import {Link} from "react-router-dom";

const Token = '8958872a89ed33718f1af6923c159609cc7240fc';

interface Branch {
    data: {
        name: {
            full_with_opf: string;
        };
        hid: string;
    };
}

interface BranchesData {
    suggestions: Branch[];
}

interface ValueData {
    type: string;
    inn: string;
    branch_count: number;

    management: {
        post: string;
        name: string;
    };
    name: {
        full_with_opf: string;
    };
    state: {
        status: string;
        registration_date: number;
        liquidation_date: number;
    };
    address: {
        data: {
            source: string;
        }
    }

}
type Nullable<T> = T | null | undefined;

export const dataFormat = (data: Nullable<number> | undefined) => {
    if (data === null) {
        return null
    } else if (data === undefined) {
        return undefined
    } else {
        const date = new Date(data);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();
        return `${day}/${month}/${year}`;
    }
}
const SearchCompanies = () => {
    const [value, setValue] = useState<DaDataSuggestion<DaDataParty> | undefined>(undefined);
    console.log(value)
    const [branches, setBranches] = useState<BranchesData>({suggestions: []});


    useEffect(() => {
        if (value?.data?.type === 'LEGAL') {
            setBranches({suggestions: []});
        }
    }, [value])

    const fetchBranchData = async (inn: string) => {
        if (inn) {
            try {
                const response = await fetch("https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party", {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": `Token ` + `${Token}`,
                    },
                    body: JSON.stringify({
                        "query": `${inn}`,
                        "branch_type": "BRANCH",
                        "count": '100'
                    })
                });
                const data = await response.json();
                //console.log(data)
                //setBranches(data.suggestions);
                console.log(branches);
                setBranches({suggestions: data.suggestions});
            } catch (error) {
                console.error(error);
            }
        }
    };

    console.log(branches);
    console.log(value)
    return (<div className='search'>
            <div className='search__title font2XL'>Частичный поиск организации</div>
            <PartySuggestions token={`${Token}`} value={value} onChange={(value?: DaDataSuggestion<DaDataParty>) => setValue(value)}/>
            {value && (
                <div className='search__info'>
                    <div className='info__block'>
                        <span>Название</span>
                        <span className='info__result'>
                            {value?.data?.name.full_with_opf}
                        </span>
                    </div>

                    <div className='info__block'>
                        <span>ИНН</span>
                        <span className='info__result'>{value?.data?.inn}</span>
                    </div>

                    <div className='info__block'>
                        <span>Адрес</span>
                        <span className='info__result'>{value?.data?.address.data.source}</span>
                    </div>

                    <div className='info__block'>
                        <span>Статус</span>
                        <span className='info__result'>
                            {value?.data?.state.status === "ACTIVE" && 'Действующая организация'}
                            {value?.data?.state.status === "LIQUIDATED" && 'Ликвидирована'}
                            {value?.data?.state.status === "LIQUIDATING" && 'Ликвидируется'}
                            {value?.data?.state.status === "BANKRUPT" && 'Банкротство'}
                            {value?.data?.state.status === "REORGANIZING" && 'В процессе присоединения к другому юрлицу, с последующей ликвидацией'}
                        </span>
                    </div>

                    {value?.data?.state.registration_date && (
                        <div className='info__block'>
                            <span>Дата основания </span>
                            <span className='info__result'>{dataFormat(value?.data?.state.registration_date)}</span>
                        </div>
                    )}


                    {value?.data?.state.status === "LIQUIDATED" ?
                        <div className='info__block'>
                            <span>Дата ликвидации </span>
                            <span className='info__result'> {dataFormat(value?.data?.state.liquidation_date)}</span>
                        </div> : ''
                    }
                    {value?.data?.management && (
                        <div className='info__block'>
                            <span>{value?.data?.management.post}</span>
                            <span className='info__result'>{value?.data?.management.name}</span>
                        </div>
                    )}

                    {value?.data?.branch_count !== 0 && value?.data?.type === 'LEGAL' && (
                        <button className='search__button fontS'
                                onClick={() => fetchBranchData(value?.data?.inn || 'null')}>Показать филиалы</button>
                    )}

                    {branches.suggestions.length === 0 && value?.data?.branch_count === 0 && value.data.type === 'LEGAL' && (
                        <div className='info__block'>Филиалы не найдены</div>
                    )}

                    {branches.suggestions.length > 0 && value?.data?.branch_count !== 0 && value?.data?.type === 'LEGAL' && (
                        <div className='info__block'>
                            <span>Филиалы</span>{
                            branches.suggestions.map((branch: Branch, index) => (
                                <Link to={`/IT_Education/branches/${branch.data.hid}`} key={index}
                                      state={{branches, index}}>{branch.data.name.full_with_opf}</Link>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>

    )
}

export default SearchCompanies;
