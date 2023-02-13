import React, { useState } from 'react';
function CreateTask(props) {
    const [name, setName] = useState("");
    const [date, setDate] = useState("")

    function onSubmit(e) {
        e.preventDefault();
        props.addTask(name, date);
        setName("")
    }

    function handleChange(e) {
        console.log("2");
        setName(e.target.value);
    }

    function handleDateSubmit(e) {
        setDate(e.target.value);
    }

    return (
        <div>
            <h1>Create task:</h1>
            <form onSubmit={onSubmit}>
                <label>Task:</label>
                <br/>
                <input
                    type="text"
                    id="new-todo-input"
                    className="input input__lg"
                    name="text"
                    autoComplete="off"
                    value={name}
                    onChange={handleChange}
                />
                <br/>
                <label>Deadline:</label>
                <br/>
                <input
                    type="datetime-local" value={date} onChange={handleDateSubmit}
                />
                <br/>
                <button type="submit">
                    Add Task
                </button>
            </form>
        </div>
    );
}

export default CreateTask;