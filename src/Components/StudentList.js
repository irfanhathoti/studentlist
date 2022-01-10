import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useState from 'react'

function createData(name, age, course, batch) {
    return { name, age, course, batch };
}

const rows = [
    createData('Irfan H', 23, "MERN", "July"),
    createData('Imran H', 22, "MERN", "July"),
    createData('Darshan ', 21, "MERN", "July"),
    createData('Sai Kiran', 22, "MERN", "July"),
    createData('Shatish', 21, "MERN", "July"),
];

export default function StudentList() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Age</TableCell>
                        <TableCell align="right">Course</TableCell>
                        <TableCell align="right">Batch</TableCell>
                        {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{'&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.age}</TableCell>
                            <TableCell align="right">{row.course}</TableCell>
                            <TableCell align="right">{row.batch}</TableCell>
                            {/* <TableCell align="right">{row.protein}</TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
