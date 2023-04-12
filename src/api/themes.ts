export interface Theme {
    title: string;
    category: string;
    description: string;
    completedCount: number;
    totalCount: number;
    status: boolean;
}

export const Themes: Theme[] = [
    {
        title: "Добро пожаловать!",
        category: "Для новичка, Основы работы",
        description: "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
        completedCount: 10,
        totalCount: 10,
        status: true,
    },
    {
        title: "Начало работы",
        category: "Для новичка, Основы работы",
        description: "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
        completedCount: 8,
        totalCount: 10,
        status: false,
    },
    {
        title: "Введение в рабочую среду",
        category: "Профессионалу, Библиотеки",
        description: "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
        completedCount: 0,
        totalCount: 10,
        status: false,
    },
    {
        title: "Работа с библиотеками GPN",
        category: "Профессионалу, Библиотеки",
        description: "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
        completedCount: 0,
        totalCount: 255,
        status: false,
    },
];
