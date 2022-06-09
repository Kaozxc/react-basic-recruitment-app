import { useEffect, useState } from "react";
import { SportsType, SportType } from "../types/sports.types";
import { NoResults } from "../components/NoResults/NoResults";
import { TableColumn } from "../components/Table/Table";
import { Visibility } from "@mui/icons-material";
import { getSports } from "../service/sports.service";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from "@mui/system";

export const SportsScreen = () => {
  const [sports, setSports] = useState<SportsType | undefined>(undefined);
  const [sportDetails, setSportDetails] = useState<SportType | undefined>(undefined);

  const columns: TableColumn<SportType>[] = [
    { id: "sport", label: "Sport", value: "name" },
    { id: "location", label: "Location", value: "location" },
    { id: "name", label: "Name", value: "shortDescription" },
    {
      id: "actions",
      label: "Actions",
      value: <Visibility />,
      textAlign: "right",
    },
  ];

  function createData(
    name: string,
    calories: number,
    fat: number,
    protein: number,
  ) {
    return { name, calories, fat, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 4.3),
    createData('Eclair', 262, 16.0, 6.0),
    createData('Cupcake', 305, 3.7, 4.3),
    createData('Gingerbread', 356, 16.0, 3.9),
  ];

  const getSportDetails = async (id: SportType['id']) => {
    // TODO: get sport details
    const result = await getSports();
    setSports(result);
    //console.log('result for basketball', Object.values(result.items))
    let res: string = '';
    result.items.forEach((item, i) => {
      if (i + 1 === id) {
        console.log('wuuda', item);
        setSportDetails(item)
      }
    })
  }

  const fetchContent = async () => {
    const result = await getSports();
    console.log(Object.values(result.items));

  };


  useEffect(() => {
    // TODO: get data from sports.service
    fetchContent()
    getSportDetails(1);
  }, []);

  // if (!sports) {
  //   return <NoResults />;
  // }

  // TODO: display data got form service
  return (
    <div>
      <Container>
        <h2>Sports</h2>
        <p>{sports?.teaser}</p>
      </Container>
      <TableContainer component={Paper} sx={{ width: '50%', marginLeft: '50px', marginTop: '50px' }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>{'Sport'}</TableCell>
              <TableCell align="right">{'Location'}</TableCell>
              <TableCell align="right">{'Name'}</TableCell>
              <TableCell align="right">{'Action'}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
