import { useEffect, useState } from "react";
import { fetchTasks } from "../../../../api";
import { Theme } from "../../../../api/themes";

function ThemeList() {
    const [Themes, setThemes] = useState<Theme[]>([]);

    useEffect(() => {
        fetchTasks().then((data) => {
            setThemes(data);
        });
    }, []);

    // Рендеринг списка задач
    return (
        <div>
            {Themes.map((Theme) => (
                <div className='theme__card'>
                    <p>{Theme.title}</p>
                </div>
            ))}
        </div>
    );
}
export default ThemeList;