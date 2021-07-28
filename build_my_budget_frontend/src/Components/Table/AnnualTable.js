import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { getCategories, deleteCategory} from '../../Redux/actions.js'
import AnnualTableRow from "./AnnualTableRow";
// TODO: Add propTypes

// title: String, used to define table's default name shown to user
// esimated: Bool, indicated if estimated or actual data being used
// categories: Array<Category>, array of categories returned from the backend to show the user
const AnnualTable = ({ title, estimated, categoryStore }) => {
    const dispatch = useDispatch();
    const months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September",
                    "October", "November", "December"];
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        // Get initial data for categories
        dispatch(getCategories());
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
    }

    const getRows = () => {
        var rows = [];
        (categoryStore.categories ? categoryStore.categories : []).map((parent) => {
            rows.push(<AnnualTableRow title={parent.name} cells={[]} isParent={true} />);
            (parent.subcategories ? parent.subcategories : []).map((child) => {
                rows.push(<AnnualTableRow title={child.name} cells={child.entries} isParent={false} />);
            })
        })

        return rows;
    }

    return (
        <div>
            <table className={title}>
                <thead>
                    <tr>
                        {months.map((name) => {
                            return (<th key={name}> {name} </th>);
                        })}
                    </tr>
                </thead>
                <tbody>
                    {getRows()}
                </tbody>
            </table>
        </div>
    );
};

/* https://react-redux.js.org/api/hooks
const mapDispatchToProps = {
    getCategories, deleteCategory, createCategory
}


categories.map((cat) => {
    return (
        <AnnualTableRow title={"test"} cells={cat.entries} isParent={false} />
    );
})
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

function mapStateToProps(state) {
    return {
        entries: state.entries,
        categoryStore: state.categories
    }
};


export default connect(mapStateToProps)(AnnualTable)
