import { createRef, useEffect, useState } from "react";
import { SportsType, SportType } from "../types/sports.types";
import { NoResults } from "../components/NoResults/NoResults";
import { TableColumn } from "../components/Table/Table";
import { Visibility } from "@mui/icons-material";
import { getSportById, getSports } from "../service/sports.service";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Container } from "@mui/system";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button, Grid } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export const SportsScreen = () => {
  const [sports, setSports] = useState<SportsType | undefined>(undefined);
  const [sportDetails, setSportDetails] = useState<SportType | undefined>(undefined);
  const [toggle, setToggle] = useState(false);

  // const columns = [
  //   { id: "sport", label: "Sport", value: "name" },
  //   { id: "location", label: "Location", value: "location" },
  //   { id: "name", label: "Name", value: "shortDescription" },
  //   {
  //     id: "actions",
  //     label: "Actions",
  //     value: <Visibility />,
  //     textAlign: "right",
  //   },
  // ];


  const renderButton = () => {
    return (
      <>
        <VisibilityIcon sx={{ color: toggle === true ? '#ff3f00' : 'black' }} onClick={() => {
          let header = headerRef.current.attributes[1].textContent;
          let table = tableRef.current.attributes[1].textContent;

          let smallIconHeader = 'display: flex; height: 50px; margin-left: 50px; margin-top: 40px; border: 1px solid red; width: 50%; background-color: rgb(32, 32, 32); color: white;'
          let bigIconHeader = 'display: flex; height: 50px; margin-left: 50px; margin-top: 40px; border: 1px solid red; width: 95%; background-color: rgb(32, 32, 32); color: white;'
          let smallIconTable = 'height: 266px; width: 50%; margin-left: 50px;'
          let bigIconTable = 'height: 266px; width: 95%; margin-left: 50px;'
          if (bigIconHeader === headerRef.current.attributes[1].textContent && bigIconTable === tableRef.current.attributes[1].textContent) {
            tableRef.current.attributes[1].textContent = smallIconTable;
            headerRef.current.attributes[1].textContent = smallIconHeader;
            setToggle(true);
          } else {
            setToggle(false);
            tableRef.current.attributes[1].textContent = bigIconTable
            headerRef.current.attributes[1].textContent = bigIconHeader;
          }
        }} />
      </>
    )
  }

  // Important part, without 'as' there is an issue - https://github.com/DefinitelyTyped/DefinitelyTyped/issues/35572#issuecomment-493942129
  const headerRef = createRef() as React.MutableRefObject<HTMLInputElement>;
  const tableRef = createRef() as React.MutableRefObject<HTMLInputElement>;

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Sport', width: toggle === false ? 450 : 150, sortable: false, },
    {
      field: 'location',
      headerName: 'Location',
      width: toggle === false ? 450 : 250,
      sortable: false,
    },
    {
      field: 'shortDescription',
      headerName: 'Name',
      width: toggle === false ? 450 : 300,
      sortable: false,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 80,
      sortable: false,
      renderCell: renderButton,
    },
  ];

  function createData(
    name: string,
    calories: number,
    fat: number,
    protein: any,
  ) {
    return { name, calories, fat, protein };
  }

  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, <VisibilityIcon onClick={() => { console.log('elo') }} />),
  //   createData('Ice cream sandwich', 237, 9.0, <VisibilityIcon onClick={() => { console.log('elo') }} />),
  //   createData('Eclair', 262, 16.0, <VisibilityIcon onClick={() => { console.log('elo') }} />),
  //   createData('Cupcake', 305, 3.7, <VisibilityIcon onClick={() => { console.log('elo') }} />),
  // ];

  // const rows = [
  //   { id: 'Soccer', location: 'Madrid', shortDescription: 'Lorem Ipsum', action: <VisibilityIcon /> },
  //   { id: 'Basketball', location: 'London', shortDescription: 'Lorem Ipsum', action: <VisibilityIcon /> },
  //   { id: 'Snooker', location: 'London', shortDescription: 'Lorem Ipsum', action: <VisibilityIcon /> },
  //   { id: 'Volleyball', location: 'Gliwice', shortDescription: 'Lorem Ipsum', action: <VisibilityIcon /> },
  // ];

  let rows: any[] = [];

  const getSportDetails = async (id: SportType['id']) => {
    // TODO: get sport details
    const result = await getSports();
    setSports(result);
    result.items.forEach((item, i) => {
      if (i + 1 === id) {
        setSportDetails(item)
      }
    })
  }

  const fetchContent = async () => {
    const result = await getSports();
    console.log('fetchcontent', Object.values(result.items));
    rows = Object.values(result.items)
  };


  useEffect(() => {
    // TODO: get data from sports.service
    fetchContent()
    getSportDetails(1);
    console.log('getsportbyid', getSportById(1))
    console.log('columns', columns)
    setTimeout(() => {
      console.log('rows', rows)
    }, 1000)
  }, []);

  const renderTable = () => {
    return (
      <DataGrid
        sx={{ width: '100%' }}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[]}
        autoPageSize={true}
        disableSelectionOnClick
        hideFooter={true}
        disableColumnMenu
      />
    )
  }


  useEffect(() => {
    console.log('rows changed, rerendering');

    renderTable();
  }, [])

  if (!sports) {
    return <NoResults />;
  }

  // TODO: display data got form service
  return (
    <div>
      <Container>
        <h2>Sports</h2>
        <p>{sports?.teaser}</p>
      </Container>
      <div  >
        <Paper className="headerSportsDataTable" ref={headerRef} style={{ display: 'flex', height: '50px', marginLeft: '50px', marginTop: '40px', width: '95%', backgroundColor: '#202020', color: 'white' }}>
          <h3 style={{ marginLeft: '20px', }}>Sports</h3>
          <Box sx={{ justifyContent: 'flex-end', width: '100%', alignItems: 'center', display: 'flex' }}>
            <Button sx={{ bgcolor: '#ff3f00', height: '25px', marginRight: '25px' }} variant="contained">ADD SPORT</Button>
          </Box>
        </Paper>
        {/* <TableContainer component={Paper} sx={{ width: '50%', marginLeft: '50px' }}>
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
                  key={row.firstName}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.firstName}
                  </TableCell>
                  <TableCell align="right">{row.age}</TableCell>
                  <TableCell align="right">{row.age}</TableCell>
                  <TableCell align="right">{row.age}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> */}
        {/* <DataGrid columns={columns}></DataGrid> */}
        <div className="sportsDataTable" ref={tableRef} style={{ height: '266px', width: '95%', marginLeft: '50px' }}>
          {renderTable()}

        </div>
      </div>
    </div >
  );
}
