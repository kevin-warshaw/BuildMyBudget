import React from "react";
import TableCell from "./TableCell";

// title: String
// id: Int
// isParent: Bool
const AnnualTableRow = ({ title, cells, isParent }) => {
    //const [cells, setCells] = useState(Array.from(Array(13)).forEach(TableCell));

    const spreadCells = (cells, isParent) => {
        if (cells && !isParent) {
            var output = Array(12).fill(<TableCell value="-" isEditing={false}/>);

            cells.map((cell) => {
                var cellDate = new Date(cell.date);
                output[cellDate.getMonth() + 1] = <TableCell value={cell.amount} isEditing={false} />
            })
            console.log("OUTPUT")
            console.log(output)
            return output;
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
