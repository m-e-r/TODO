import React from "react";

export default function Task(props) {
    return (
        <li>
            <div>
                <input type="checkbox" defaultChecked={props.completed}/>
                <label>{props.name}</label>
            </div>
            <div>
                <label>Deadline: </label>
                <label>{props.date}</label>
            </div>
            <div>
                <button type="button" onClick={() => props.deleteTask(props.id)}>
                    Delete
                </button>
            </div>
        </li>
    );
}