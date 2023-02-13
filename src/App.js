import React, {lazy, Suspense, useState} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Frontpage from './Frontpage';
import Task from "./Task";

const CreateTask = lazy(() => import("./CreateTask"));

function App(props) {

    const [tasks, setTasks] = useState(props.tasks);

    const taskList = tasks.map((task) => (
        <Task
            id={task.id}
            name={task.name}
            completed={task.completed}
            date={task.date}
            key={task.id}
            deleteTask={deleteTask}
        />
    ));

    function addTask(name, date) {
        const newTask = { id: tasks.length, name, completed: false, date};
        console.log(newTask.id);
        setTasks([...tasks, newTask]);
    }

    function deleteTask(id) {
         const remainingTasks = tasks.filter((task) => id !== task.id);
         setTasks(remainingTasks);
    }

    return (
        <div className="todoapp stack-large">
            <BrowserRouter>
                <Suspense fallback="Loading...">
                    <Link to={"/"}>Home</Link> | <Link to={"create"}>Create</Link>
                    <Routes>
                        <Route index element={<Frontpage taskList={taskList}/>} />
                        <Route path={"/create"} element={<CreateTask addTask={addTask} />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    );
}


export default App;
