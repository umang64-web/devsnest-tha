import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearAll } from '../actions';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button'

const List = () => {
    const todos = useSelector((state) => state.todoReducer);
    const dispatch = useDispatch();
    return (
        <>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    <span style={{display: 'inline-block'}}>{todo}</span>
                    <DeleteIcon 
                        style={{fontSize: 30}}
                        onClick={() => dispatch(removeItem(index))}> Delete
                    </DeleteIcon>
                </li>
            ))}
        </ul>
        <Button
            style={{
                marginTop:10,
                fontSize: 16
            }}
            size="medium"
            variant="contained"
            color="secondary"
            onClick={() => { dispatch(clearAll())}}>Clear</Button>
        </>
    )
}

export default List
