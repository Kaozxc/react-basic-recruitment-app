import {
  Box,
  Button,
  ButtonProps,
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow as MuiTableRow,
  Typography,
} from "@mui/material";
import { CSSProperties, FC, ReactElement } from "react";
import { TableRow } from "./TableRow";
import { ModelWithId } from "../../types/table.types";

export type TableColumn<Model> = {
  id: string;
  label: string;
  value: keyof Model | ReactElement;
  textAlign?: CSSProperties["textAlign"];
};

type TableProps<Model extends ModelWithId> = {
  columns: TableColumn<Model>[];
  items: Model[];
  title: string;
  ButtonProps?: Pick<ButtonProps, "children" | "onClick">;
};

export const Table: FC<TableProps<any>> = ({
  columns,
  items,
  title,
  ButtonProps,
}) => {
  return (
    <Box>
      <Paper elevation={5} sx={{ display: 'flex', height: '50px', marginLeft: '50px', marginTop: '40px', width: '95%', backgroundColor: '#202020', color: 'white' }}>
        <Typography sx={{ marginLeft: '20px', textAlign: 'center', alignItems: 'center', display: 'flex', }}>{title}</Typography>
        <Box sx={{ justifyContent: 'flex-end', width: '100%', alignItems: 'center', display: 'flex', }}>
          <Button style={{ backgroundColor: '#ff3f00' }} sx={{ height: '25px', marginRight: '25px', }} variant={"contained"} {...ButtonProps} >ADD SPORT</Button>
        </Box>
      </Paper>

      <Paper elevation={5} sx={{ marginLeft: '50px', width: '95%' }}>
        <TableContainer sx={{ width: '100%' }}>
          <MuiTable>
            <TableHead>
              <MuiTableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    sx={{ textAlign: column.textAlign || "left" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </MuiTableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id} item={item} columns={columns} />
              ))}
            </TableBody>
          </MuiTable>
        </TableContainer>
      </Paper>
    </Box>
  );
};
