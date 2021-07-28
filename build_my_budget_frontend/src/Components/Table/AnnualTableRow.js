import React from "react";
import TableCell from "./TableCell";

// title: String, name used for row in first cell and as key of the row
// cells: Int, all entries to display as part of the row replacing default values
// isParent: Bool, Indicates if row should be formatted as a category or subcategory
const AnnualTableRow = ({ title, cells, isParent }) => {
    const spreadCells = (cells, isParent) => {
        if (cells && !isParent) {
            var output = Array(12).fill(<TableCell value="-" isEditing={false}/>);

            cells.map((cell) => {
                var cellDate = new Date(cell.date);
                output[cellDate.getMonth() + 1] = <TableCell value={cell.amount} isEditing={false} />
            })

            return output;
        }
    }

    return (
        <tr key={title}>
            <td>{title}</td>
            {spreadCells(cells, isParent)}
        </tr>
    );
};

/*
See right above useDispatch here for how to use selector for multiple instances

*/


export default AnnualTableRow
