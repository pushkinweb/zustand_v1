import create from 'zustand';

import { generateId } from '../helpers';
import {devtools, persist, subscribeWithSelector} from "zustand/middleware";

interface Task {
    id: string;
    title: string;
    createdAt?: number;
}
interface ToDoStore {
    tasks: Task[];
    tasksDone: Task[];
    createTask1: (title: string) => void;
    createTask2: (title: string) => void;
    updateTask: (id: string, title: string) => void;
    removeTask: (id: string) => void;
    createTaskDone: () => void;
    deleteEverything: () => void;
}

export const useTasksStore = create<ToDoStore>(devtools((set, get, api) => ({
    tasks: [
        { id: '1', title: 'Задача 1', createdAt: Date.now() },
        { id: '2', title: 'Задача 2', createdAt: Date.now() },
        { id: '3', title: 'Задача 3', createdAt: Date.now() },
    ],
    tasksDone: [],
    createTask1: (title) => set(state => {
        const newTask = {
            id: generateId(),
            title,
            createdAt: Date.now(),
        }
        return {tasks: [...state.tasks, newTask]}
    }),
    createTask2: (title) => {
        const { tasks } = get();
        /*console.log('api')
        console.log(api)*/
        const newTask = {
            id: generateId(),
            title,
            createdAt: Date.now(),
        }
        set({
            tasks: [...tasks, newTask],
        },false,'createTask2')
    },
    updateTask: (id: string, title: string) => {
        const { tasks } = get();
        set({
            tasks: tasks.map((task) => ({
                ...task,
                title: task.id === id ? title : task.title,
            }))
        });
    },
    removeTask: (id: string) => {
        const { tasks, tasksDone } = get();
        set({
            tasks: tasks.filter((task) => task.id !== id),
            tasksDone: [...tasksDone].concat(tasks.filter((task) => task.id === id)),
        });
    },
    createTaskDone: () => {
        const { tasksDone } = get();
        const newTask = {
            id: generateId(),
            title: 'Фейковая задача #___',
            createdAt: Date.now(),
        }

        set({
            tasksDone: [...tasksDone, newTask],
        })
    },
    deleteEverything: () => {
        console.log(10, api)
        //set({}, true)
    }
}),{
    name: 'useTasksStore',
    serialize: { options: true }
}));


//subscribeWithSelector

//persist

//devtools
/*{
    name: 'useTasksStore',
    serialize: { options: true }
}*/

