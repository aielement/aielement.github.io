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
    createData("2014年12月", "普通自動車一種運転免許　取得"),
    createData("2015年7月", "測量士補試験　合格"),
    createData("2018年3月", "高等学校教諭一種免許状（理科）　取得"),
    createData("2021年6月", "応用情報技術者試験　合格"),
    createData("2021年9月", "第四級アマチュア無線技師　取得"),
    createData("2021年12月", "第一級陸上特殊無線技師　取得"),
    createData("2022年4月", "第二級アマチュア無線技師　取得"),
    createData("2023年1月", "第一級アマチュア無線技師試験　取得"),
    createData("2023年2月", "第一級陸上無線技術士　合格")
];

export default function LicenseTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center"><b>時期</b></StyledTableCell>
                        <StyledTableCell align="center"><b>資格名</b></StyledTableCell>
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
