export interface Theme {
    id: string;
    title: string;
    category: string;
    description: string;
    completedCount: number;
    totalCount: number;
    status: string;
}

export const Themes: Theme[] = [
    {
        id: '1',
        title: "Добро пожаловать!",
        category: "Для новичка, Основы работы",
        description: "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
        completedCount: 10,
        totalCount: 10,
        status: "done",
    },
    {
        id: '2',
        title: "Начало работы",
        category: "Для новичка, Основы работы",
        description: "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
        completedCount: 8,
        totalCount: 10,
        status: "continue",
    },
    {
        id: '3',
        title: "Начало работы",
        category: "Для новичка, Основы работы",
        description: "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
        completedCount: 3,
        totalCount: 10,
        status: "continue",
    },
    {
        id: '4',
        title: "Введение в рабочую среду",
        category: "Профессионалу, Библиотеки",
        description: "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
        completedCount: 0,
        totalCount: 10,
        status: "begin",
    },
    {
        id: '5',
        title: "Введение в рабочую среду",
        category: "Профессионалу, Рабочая среда",
        description: "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
        completedCount: 7,
        totalCount: 10,
        status: "continue",
    },
    {
        id: '6',
        title: "Работа с библиотеками GPN",
        category: "Профессионалу, Библиотеки",
        description: "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
        completedCount: 0,
        totalCount: 255,
        status: "begin",
    },

];
