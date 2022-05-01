import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
export default function QuoteList({ quotes }) {
  return (
    quotes.length && (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Author</TableCell>
              <TableCell align="left">Quote</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {quotes.map((quote) => (
              <TableRow
                key={quote.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{quote.author}</TableCell>
                <TableCell align="left">{quote.quote}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
}
