import React from "react";

// value: String, value to be displayed in the cell
// isEditing: Bool, should the UI be updated to allow the cell's value to change
const TableCell = ({ value, isEditing }) => {
    return (
        <td key={value}>{value}</td>
    );
};

export default TableCell
