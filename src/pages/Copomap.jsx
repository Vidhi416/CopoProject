import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper
} from '@mui/material';
import { useLocation } from 'react-router-dom';
const CO_ROWS = ['CO1', 'CO2', 'CO3', 'CO4', 'CO5', 'CO6'];
const PO_COLUMNS = Array.from({ length: 12 }, (_, i) => `PO${i + 1}`);
const PSO_COLUMNS = Array.from({ length: 4 }, (_, i) => `PSO${i + 1}`);



export default function Copomap() {
    const { state } = useLocation();
  const { matrixData, courseDetails } = state || {};
  return (
    <>
    <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell><strong>Course Name</strong></TableCell>
              <TableCell>{courseDetails.courseName}</TableCell>
              <TableCell><strong>Course Code</strong></TableCell>
              <TableCell>{courseDetails.courseCode}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Semester</strong></TableCell>
              <TableCell>{courseDetails.semester}</TableCell>
              <TableCell><strong>Programme</strong></TableCell>
              <TableCell>{courseDetails.programme}</TableCell>
              <TableCell><strong>Year</strong></TableCell>
              <TableCell>{courseDetails.year}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} aria-label="Course Outcome Table">
        <TableHead>
          <TableRow>
            <TableCell><strong>CO</strong></TableCell>
            {PO_COLUMNS.map((po) => (
              <TableCell align="center" key={po}>{po}</TableCell>
            ))}
            {PSO_COLUMNS.map((pso) => (
              <TableCell align="center" key={pso}>{pso}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
  {matrixData.map((row, rowIndex) => (
    <TableRow key={rowIndex}>
      {row.map((cell, colIndex) => (
        <TableCell align={colIndex === 0 ? "left" : "center"} key={colIndex}>
          {cell}
        </TableCell>
      ))}
    </TableRow>
  ))}
</TableBody>

      </Table>
    </TableContainer>
</>
  );
}