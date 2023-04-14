import {Theme} from "../../../../api/themes";
import './style.scss';
import AgainButton from '../../../../static/icons/AgainButton.svg';
import IconSuccess from '../../../../static/icons/IconSuccess.svg';
import ProgressBar from "../ProgressBar";

interface ThemeCardProps {
    theme: Theme;
    id?: number;
}

function ThemeCard({theme, id}: ThemeCardProps) {
    const categories = theme.category.split(", ");

    return (
        <div className='theme__card' key={id}>
            <h4 className='font2XL'>{theme.title}</h4>
            <ul className='fontS'>
                {categories.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ul>
            <p className='fontS card__description'>{theme.description}</p>
            {theme.status === "done" ? (
                <div className='card__status'>
                    <div className='button_done fontButton'>
                        <img src={AgainButton} alt='again button'/>
                        <p>Пройти заново</p>
                    </div>
                    <img src={IconSuccess} alt='success icon'/>
                </div>
            ) : theme.status === "begin" ? (
                <div className='card__status'>
                    <div className='button_begin fontButton'>
                        <p>Начать</p>
                    </div>
                    <p className='fontS'>
                        {theme.totalCount}
                        <span>
                            &#160;заданий
                        </span>
                    </p>
                </div>
            ) : (
                <div className='card__status'>
                    <div className='button_begin fontButton'>
                        <p>Продолжить тему</p>
                    </div>
                    <p className='fontS button_progress'>
                        {theme.completedCount}/{theme.totalCount}
                        <span>
                            &#160;заданий
                        </span>
                        <ProgressBar progress={theme.completedCount} totalTasks={theme.totalCount}/>
                    </p>
                </div>
            )}
        </div>
    );
}

export default ThemeCard;