import React, {FC} from 'react';

import styles from './index.module.scss';
import {CounterList} from "../components/CounterList";
import shallow from "zustand/shallow";
import {useAsyncTodoStore} from "../../data/stores/useAsyncTodoStore";

export const ToDoListAsync: FC = () => {

    const [
        todos,
        loading,
        error,
        fetchTodos,
    ] = useAsyncTodoStore(state => [
        state.todos,
        state.loading,
        state.error,
        state.fetchTodos
    ], shallow);

    console.log(4, `Асинхронный список render`)

    return (
        <article className={styles.article}>
            <h1 className={styles.articleTitle}>Асинхронный список</h1>
            <section className={styles.articleSection}>
                {!loading ? todos.map((todo, index) => (
                    <p
                        key={todo.id}
                        className={styles.articleTextLeft}
                    >{index + 1}. {todo.title}</p>
                )) : 'Загрузка'}
            </section>
            <h1>Всего записей: {todos.length}</h1>

            <button
                className={styles.articleButton}
                onClick={fetchTodos}
            >Получить список</button>
        </article>
    );
}
