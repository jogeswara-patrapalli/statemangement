import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styled from "styled-components";
import CheckBox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { useTable } from "./useTable";
import Summary from "../Summary";

const TableContainerStyled = styled(TableContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  isolation: isolate;
  width: 100%;
  height: 416px;
  overflow-x: scroll;
  border: 0px;

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  ::-webkit-scrollbar {
    width: 8px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #2d2d30;
  }

  ::-webkit-scrollbar-thumb {
    background: #727080;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

function createData(
  id: number,
  name: string,
  type: string,
  perpayment: string,
  termlength: string,
  payment: number
) {
  return { id, name, type, perpayment, termlength, payment };
}

const rows = [
  createData(0, "Contract 1", "Monthly", "$12,000.25", "12 months", 63360.0),
  createData(1, "Contract 6", "Monthly", "$6,000.00", "12 months", 126722.64),
  createData(2, "Contract 5", "Monthly", "$6,000.00", "12 months", 63360.0),
  createData(3, "Contract 4", "Monthly", "$6,000.00", "12 months", 63360.0),
  createData(4, "Contract 3", "Monthly", "$6,000.00", "12 months", 63360.0),
  createData(5, "Contract 2", "Monthly", "$6,000.00", "12 months", 63360.0),
];

export const MyTable:React.FC=()=> {
 const {selectedRows,total,handleRowClick,handleHeaderCheckboxChange,handleSlider,isSelected}=useTable(rows)

  return (
    <div>
      <TableContainerStyled sx={{ width: 785 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow
              sx={{
                "& th": {
                  color: "#A5A5A6",
                  backgroundColor: "#262529",
                  border: 0,
                  fontWeight: 600,
                  height: 0,
                },
              }}
            >
              <TableCell>
                <CheckBox
                  sx={{
                    color: "#727080",
                    borderRadius: 100,
                  }}
                  checked={selectedRows.length === rows.length}
                  indeterminate={
                    selectedRows.length > 0 &&
                    selectedRows.length < rows.length
                  }
                  onChange={(event) => {
                    handleHeaderCheckboxChange(event);
                  }}
                  size="small"
                />
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Per payment</TableCell>
              <TableCell>Term length</TableCell>
              <TableCell>Payment amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              const isRowSelected = isSelected(row.id);

              return (
                <TableRow
                  key={row.id}
                  selected={isRowSelected}
                  className={isRowSelected ? "activeRow" : ""}
                  sx={{
                    "& td": {
                      color: "#A5A5A6",
                      border: 0,
                    },
                  }}
                >
                  <TableCell>
                    {" "}
                    <CheckBox
                      checked={isRowSelected}
                      color="primary"
                      size="small"
                      sx={{ color: "#A5A5A6" }}
                      onClick={(event) => handleRowClick(event, row.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography color="#E8E7F0" variant="body2">
                      {row.name}
                    </Typography>
                  </TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.perpayment}</TableCell>

                  <TableCell>
                    {row.termlength}
                    <br />
                    <Typography variant="caption">12.0% fee</Typography>
                  </TableCell>

                  <TableCell>
                    ${Number(row.payment.toFixed(2)).toLocaleString("en-US")}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainerStyled>

      <Summary
        total={total}
        count={selectedRows.length}
        slider={handleSlider}
      ></Summary>
    </div>
  );
}


export default MyTable;