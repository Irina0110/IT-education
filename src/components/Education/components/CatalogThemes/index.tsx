import React, {useEffect, useState} from "react";
import './style.scss';
import ThemeCard from "../Theme";
import {Theme} from "../../../../api/themes";
import {fetchThemes, filteredTheme} from "../../../../api";

type Filter = 'all' | 'workspace' | 'libraries' | 'done' | 'undone';

const CatalogThemes = () => {
    const [Themes, setThemes] = useState<Theme[]>([]);
    const [filter, setFilter] = useState<Filter>('all');
    const [filteredThemes, setFilteredThemes] = useState<Theme[]>(Themes);

    const handleFilter = (selectedFilter: Filter) => {
        setFilter(selectedFilter);
    };

    useEffect(() => {
        fetchThemes().then((data) => {
            setThemes(data);
        });
    }, []);

    useEffect(() => {
        filteredTheme(filter).then((themes) => {
            setFilteredThemes([]);
            setFilteredThemes(themes);
        });
    }, [filter]);


    return (
        <div className='catalog'>
            <div className='content__title font2XL'>Каталог тем</div>
            <div className='catalog__filter'>
                <button className={`filter__button ${filter === 'all' ? 'filter_active' : ''}`}
                        onClick={() => handleFilter('all')}>
                    Все
                </button>
                <hr/>
                <button className={`filter__button ${filter === 'workspace' ? 'filter_active' : ''}`}
                        onClick={() => handleFilter('workspace')}>
                    Рабочая среда
                </button>
                <hr/>
                <button className={`filter__button ${filter === 'libraries' ? 'filter_active' : ''}`}
                        onClick={() => handleFilter('libraries')}>
                    Библиотеки
                </button>
                <hr/>
                <button className={`filter__button ${filter === 'done' ? 'filter_active' : ''}`}
                        onClick={() => handleFilter('done')}>
                    Пройденные
                </button>
                <hr/>
                <button className={`filter__button ${filter === 'undone' ? 'filter_active' : ''}`}
                        onClick={() => handleFilter('undone')}>
                    Не пройденные
                </button>
            </div>
            <div className='catalog__cards'>
                {filteredThemes.map((theme) => (
                    <ThemeCard theme={theme} key={theme.id}/>
                ))}
            </div>
        </div>
    );
};
export default CatalogThemes;