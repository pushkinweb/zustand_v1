import React, {useRef, useEffect, FC} from 'react';

import styles from './index.module.scss';
import {useTasksStore} from "../../../data/stores/useTasksStore";

export const CounterList: FC = () => {
    console.log(2, 'Render Count')

    const {count} = useTasksStore(state => ({ count: state.tasks.length }));

    return (
        <section className={styles.statusSection}>
            <h3 className={styles.title}>Всего задач: {count || 0}</h3>
        </section>
    );
}
