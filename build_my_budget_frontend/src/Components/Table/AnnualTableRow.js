import React from "react";
import TableCell from "./TableCell";

// title: String
// id: Int
// isParent: Bool
const AnnualTableRow = ({ title, cells, isParent }) => {
    //const [cells, setCells] = useState(Array.from(Array(13)).forEach(TableCell));

    const spreadCells = (cells, isParent) => {
        if (cells && !isParent) {
            return cells.map((value) => {
                return <TableCell value={value} isEditing={false} />
            });
        } else {
            return <TableCell value="" isEditing={false}/>
        }
    }

    return  (
        <tr>
            <td key={title}>{title}</td>
            {spreadCells(cells, isParent)}
        </tr>
    );
};

/*
See right above useDispatch here for how to use selector for multiple instances

*/


export default AnnualTableRow
