import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import './style.css';
const CustomTable = (props) => {
    const { columns, data, btnData, isSearch } = props;
    const [searchVal, setSearchVal] = useState("");
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        setTableData(data);
    }, [data]);
    const handleSearch = () => {
        setTableData(data.filter((data) => {
            return data.taskName.toLowerCase().includes(searchVal.toLowerCase());
        }))
    }
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    }
    const handleKeyBackSpace = (evant) => {
        if (!searchVal) {
            setTableData(data);
        }
    }
    return (
        <section id="customTable">
            <ul>
                {btnData?.map((data, index) => (
                    <li key={index}>
                        <Button onClick={() => data.handleonClick()}>{data.text}</Button>
                    </li>
                ))}
                {isSearch &&
                    <li>
                        <InputGroup className="col-md-4">
                            <input
                                className="form-control"
                                placeholder="Search"
                                value={searchVal}
                                onChange={(e) => setSearchVal(e.target.value)}
                                onKeyDown={handleKeyPress}
                                onKeyUp={handleKeyBackSpace}
                            />
                            {/* <Button variant="outline-secondary" id="button-addon2" onClick={handleSearch}>
                            Search
                            </Button> */}
                        </InputGroup>
                    </li>
                }
            </ul>
            <div className="responsive_Table">
                <Table striped="columns">
                    <thead>
                        <tr>
                            <th>Sl.No</th>
                            {columns.map((headers, columnIndex) => {
                                return (
                                    <th key={columnIndex}>{headers.Header}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.length > 0 ? (
                            tableData.map((rowData, rowIndex) => (
                                <tr key={rowIndex}>
                                    <td>{rowIndex + 1}</td>
                                    {columns.map((columnData, columnIndex) => (
                                        <td key={columnIndex}>
                                            {columnData.Cell
                                                ? columnData.Cell(
                                                    { value: rowData[columnData.accessor], row: rowData },
                                                    rowData
                                                )
                                                : rowData[columnData.accessor] || '-'}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={columns.length + 1} className="noDataMsg">No data available</td>
                            </tr>
                        )}

                    </tbody>
                </Table>
            </div>
        </section>
    )
}
export default CustomTable;