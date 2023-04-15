// api.ts
import {Theme, Themes} from "./themes";

export function fetchThemes(): Promise<Theme[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Themes);
        }, 100);
    });
}

export function filteredTheme(filter: string): Promise<Theme[]> {
    return new Promise(resolve => {
        setTimeout(() => {
            fetchThemes().then((themes) => {
                let filteredThemes = themes;
                if (filter !== "all") {
                    filteredThemes = themes.filter((theme) => {
                        if (filter === "done") {
                            return theme.status === "done";
                        }
                        if (filter === 'undone') {
                            return theme.status !== 'done';
                        }
                        if (filter === 'libraries') {
                            return theme.category.includes('Библиотеки');
                        }
                        if (filter === 'workspace') {
                            return theme.category.includes('Рабочая среда');
                        }
                    });
                }
                resolve(filteredThemes);
            });
        }, 100);
    });
}

