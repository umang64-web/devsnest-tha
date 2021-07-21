// import React,{ useState } from 'react'
import './App.js'
import './App.css'


export default function foodCard({ data, state, setstate }) {
    let deleteMe = (e) => {
        let newState = state.filter((el) => el.id !== data.id);
        setstate(newState)
    }
    return (
        <div className="card">
            <div className = "text">
            <h1>{data.food}</h1>
            <p>{data.food} takes {data.calorie} calories</p>
            </div>
            <div className="dlt">
                <button  onClick={deleteMe}>Delete</button>
            </div>
        </div>

    )
}
