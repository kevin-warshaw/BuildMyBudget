import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import AnnualTableRow from "./AnnualTableRow";
// TODO: Add propTypes

// title: String, used to define table's default name shown to user
// esimated: Bool, indicated if estimated or actual data being used
const AnnualTable = (title, estimated) => {
    const dispatch = useDispatch();
    const months = {"January", "February", "March", "April", "May", "June", "July", "August", "September",
                    "October", "November", "December"};
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        // Call redux load
        loadCells();
    }, [])

    const addCategory = () => {
        // Display component for adding new category
    }

    const addSubcategory = () => {
        // Display component for adding new subcategory
    }

    const addEntry = () => {
        // Display component for adding line
    }

    const editCells = () => {
        // Set cell editing to true and allow user input on click
    }

    const saveCells = () => {
        // Send request to backend with updated data
    }

    const loadCells = () => {
        // Load cell info from backend
        dispatch(getCategories());
    }

    return  (
        <table className={title}>
            <thead>
                <tr>
                    {months.map((name, i)=>(<td title={name}> {name} </td>;))}
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    );
}

/* https://react-redux.js.org/api/hooks
const mapDispatchToProps = {
    getCategories, deleteCategory, createCategory
}
*/

/*
Example of accessing state
import React from 'react'
import { useSelector } from 'react-redux'

export const CounterComponent = () => {
  const counter = useSelector((state) => state.counter)
  return <div>{counter}</div>
}
*/

export default AnnualTable
