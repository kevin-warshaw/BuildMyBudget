import React, { useState } from "react";
import TableCell from "./TableCell";

// title: String
// id: Int
// isParent: Bool
const AnnualTableRow = (title, id, isParent) => {
    const [cells, setCells] = useState(Array.from(Array(13)).forEach(TableCell));

    return  (
        <tr>
            {cells.map((cell) => {
                return <TableCell />
            })}
        </tr>
    );
}

/*
See right above useDispatch here for how to use selector for multiple instances

*/


export default AnnualTableRow
