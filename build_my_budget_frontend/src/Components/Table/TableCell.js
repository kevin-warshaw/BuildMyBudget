import React, { useState } from "react";

const TableCell = (value, isEditing) => {
    return  (
        <td key={value}>{value}</td>
    );
}

export default TableCell
