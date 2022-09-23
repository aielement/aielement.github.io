import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses }  from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    period,
    content,
) {
    return { period,content };
}

const StyledTableCell = styled(TableCell)(({ theme }) => {
    return ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    });
});

const rows = [
    createData("2014年4月〜2020年3月", "大学・大学院にて地球物理学を学ぶ"),
    createData("2020年4月〜現在", "F2Pゲームの開発会社にて、ゲームエンジニアとして従事"),
];

export default function CareerTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center"><b>時期</b></StyledTableCell>
                        <StyledTableCell align="center"><b>内容</b></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.period}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <StyledTableCell align="center">{row.period}</StyledTableCell>
                            <StyledTableCell align="center">{row.content}</StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
