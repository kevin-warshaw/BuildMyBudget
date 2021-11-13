import React from "react";
import TableCell from "./TableCell";

// title: String, name used for row in first cell which doubles as the key of the row
// cells: Int, all entries to display as part of the row replacing default values
// isParent: Bool, indicates if row should be formatted as a category or subcategory
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
        <tr className={ isParent ? `row100 parent-row` : `row100` } key={title}>
            <td colspan={ isParent ? "13" : "1" }>{title}</td>
            {spreadCells(cells, isParent)}
        </tr>
    );
};

export default AnnualTableRow
