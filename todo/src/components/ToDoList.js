import React from 'react';

const ToDo = ({task}) => {
    return(
        <div>
            {task.map( task => (
                <div key={task.id}>
                    <h1>{task.task}</h1>
                </div>
            ))}
        </div>
    )
}
export default ToDo;