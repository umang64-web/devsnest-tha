import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions';
import { TextField, Button } from '@material-ui/core';

const Addtodo = () => {
    const dispatch = useDispatch()
    const [item, setItem] = useState('');
    return (
        <div>
            <TextField 
                style={{
                  marginTop:10,
                  marginRight: 25,
                  marginBottom: 10
              }}
                size="small"
                variant="outlined" 
                id="outlined-basic" 
                label="Add Item" 
                type="text" 
                placeholder="Add todo.." 
                value={item} 
                onChange={(e) => setItem(e.target.value)}

            />
            <Button 
                style={{
                  marginTop:10,
                  fontSize: 16, 
                  marginBottom: 10
              }}
                size="medium"
                variant="contained"
                color="primary"
                onClick={() => {
                    dispatch(addItem(item)); 
                    setItem('');
            }}>Add</Button>
            <hr />
        </div>
    )
}

export default Addtodo
