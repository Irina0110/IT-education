import {Theme} from "../../../../api/themes";
import './style.scss'
interface ThemeCardProps {
    theme: Theme;
    key?: number;
}

function ThemeCard({theme, key}: ThemeCardProps) {
    const categories = theme.category.split(", ");

    return (
        <div className='theme__card' key={key}>
            <h4 className='font2XL'>{theme.title}</h4>
            <ul className='fontS'>
                {categories.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ul>
            <p>{theme.description}</p>
        </div>
    );
}

export default ThemeCard;