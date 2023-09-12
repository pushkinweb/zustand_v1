import React, {useRef, useEffect} from 'react';
import shallow from 'zustand/shallow'

import { useTasksStore } from '../../data/stores/useTasksStore';

import styles from './index.module.scss';

export const ToDoListDone: React.FC = () => {
    console.log(3, 'Render Done')

    const [
        tasksDone,
        createTaskDone,
        deleteEverything
    ] = useTasksStore(state => [
        state.tasksDone,
        state.createTaskDone,
        state.deleteEverything,
    ]);

    return (
        <article className={styles.article}>
            <h1 className={styles.articleTitle}>Список выполненных задач</h1>
            {!tasksDone.length && (
                <p className={styles.articleText}>Нет ни одной выполненной задачи.</p>
            )}
            {tasksDone.map((task, index) => (
                <p
                    key={task.id}
                    className={styles.articleTextLeft}
                >{index + 1}. {task.title}</p>
            ))}
            <br />
            <button
                className={styles.articleButton}
                onClick={createTaskDone}
            >Добавить фейковую задачу</button>
            <br />

             {/*<button
                onClick={deleteEverything}
            >Delete everything</button>*/}
            <br />
        </article>
    );
}
