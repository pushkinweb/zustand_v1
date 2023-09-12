import React, {useEffect} from 'react';
import styles from './index.module.scss';
// import { useTasksStore } from '../../data/stores/useTasksStore';
import { ToDoList } from '../ToDoList';
import { ToDoListDone } from '../ToDoListDone';
import {ToDoListAsync} from "../ToDoListAsync";
import {useTasksStore} from "../../data/stores/useTasksStore";


//const subscribe1 = useTasksStore.subscribe((newStore, oldStore) => console.log(oldStore, newStore))
//subscribe1()
//useTasksStore.destroy()

const subscribe2 = useTasksStore.subscribe((state) => state.tasksDone, console.log)
//subscribe2()

export const App: React.FC = () => {

    return (
        <div>
            <div className="lists">
                <ToDoList />
                {/*<ToDoList mainTitle="Список Копия"/>*/}
            </div>
            <ToDoListDone />
            <ToDoListAsync />

        </div>
    );
}
