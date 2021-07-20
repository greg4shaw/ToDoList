import React from 'react';
import { api } from '../api';
//Adding functionality with items specific to the form
function ToDoForm({addTodo}) {
    
    const [value, setValue] = React.useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        // mock api testing
        api.createItem(value).then((persistedItem) => {
        
        // below added inside above for testing - remove back out if testing is removed
            if (!value) return; 
            addTodo(value);
            setValue('');
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add ToDo ..."
                onChange={e => setValue(e.target.value)}
                />
        </form>
    );
}

export default ToDoForm;