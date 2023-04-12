// api.ts
import { Theme, Themes } from "./themes";

export function fetchTasks(): Promise<Theme[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Themes);
        }, 100);
    });
}
