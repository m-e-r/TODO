import React from 'react';
export default function Frontpage(props) {

    return (
        <div>
            <ul>
                {props.taskList}
            </ul>
        </div>
    );
}