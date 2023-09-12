import React, {useRef, useEffect} from 'react';

import {useTasksStore} from '../../data/stores/useTasksStore';
import { InputPlus } from '../components/InputPlus';
import { InputTask } from '../components/InputTask';

import styles from './index.module.scss';
import {CounterList} from "../components/CounterList";
import shallow from "zustand/shallow";

interface ToDoListProps {
    mainTitle?: string;
}

export const ToDoList: React.FC<ToDoListProps> = ({
    mainTitle = 'Список Оригинал'
}) => {



    const [
        tasks,
        createTask,
        updateTask,
        removeTask
    ] = useTasksStore(state => [
        state.tasks,
        state.createTask2,
        state.updateTask,
        state.removeTask,
    ]);

    //shallow
    //(oldState, newState) => JSON.stringify(oldState) === JSON.stringify(newState)


    console.log(1, `${mainTitle} render`)

    return (
        <article className={styles.article}>
            <h1 className={styles.articleTitle}>{mainTitle}</h1>
            <section className={styles.articleSection}>
                <InputPlus
                    onAdd={(title) => {
                       if (title) {
                            createTask(title)
                       }
                    }}
                />
            </section>
            <section className={styles.articleSection}>
                {!tasks.length && (
                    <p className={styles.articleText}>Нет одной задачи.</p>
                )}
                {tasks.map((task) => (
                    <InputTask
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        onDone={removeTask}
                        onEdited={updateTask}
                        onRemoved={removeTask}
                    />
                ))}
            </section>
            <CounterList />
        </article>
    );
}
