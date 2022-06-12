import { createRef, useEffect, useState } from 'react';
import { SportsType, SportType } from '../types/sports.types';
import { NoResults } from '../components/NoResults/NoResults';
import { getSportById, getSports } from '../service/sports.service';
import { Container } from '@mui/system';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Table, TableColumn } from '../components/Table/Table';
import { Box, Paper } from '@mui/material';

export const SportsScreen = () => {
  const index = Math.random() * 100;
  const [sports, setSports] = useState<SportsType | undefined>(undefined);
  const [sportDetails, setSportDetails] = useState<any | undefined>(undefined);
  const [toggleTable, setToggleTable] = useState(false);

  const iconStyle = {
    color: toggleTable === true ? '#ff3f00' : '#757575', cursor: 'pointer'
  }

  const tableStyle = {
    height: '90%', width: '38%', marginTop: '-356px', marginRight: '30px'
  }

  const columns: TableColumn<SportType>[] = [
    { id: 'sport', label: 'Sport', value: 'name' },
    { id: 'location', label: 'Location', value: 'location' },
    { id: 'name', label: 'Name', value: 'shortDescription' },
    {
      id: 'actions',
      label: 'Actions',
      value: <VisibilityIcon key={index} style={iconStyle} onClick={(event) => { onEyeIconClick(event) }} />,
      textAlign: 'right',
    },
  ];

  const getSportDetails = async (id: SportType['id']) => {
    const result = await getSports();
    setSports(result);
    const sport = await getSportById(id);
    setSportDetails(sport?.description);
  }

  useEffect(() => {
    getSportDetails(4);
  }, []);


  if (!sports) {
    return <NoResults />;
  }

  const onEyeIconClick = (event: any) => {
    const headerRef = document.querySelector('.headerTable')?.attributes[1].textContent;
    const headerBigIcon = 'display: flex; height: 50px; margin-left: 50px; margin-top: 40px; width: 95%; background-color: rgb(32, 32, 32); color: white;';
    const headerSmallIcon = 'display: flex; height: 50px; margin-left: 50px; margin-top: 40px; width: 55%; background-color: rgb(32, 32, 32); color: white;';
    const tableRef = document.querySelector('.table')?.attributes[1].textContent;
    let smallIconTable = 'width: 55%; margin-left: 50px;'
    let bigIconTable = 'width: 95%; margin-left: 50px;'

    if (headerRef === headerSmallIcon && tableRef === smallIconTable) {
      setToggleTable(false);
      document.querySelector('.headerTable')!.attributes[1].textContent = headerBigIcon;
      document.querySelector('.table')!.attributes[1].textContent = bigIconTable;
    } else {
      setToggleTable(true);
      document.querySelector('.headerTable')!.attributes[1].textContent = headerSmallIcon;
      document.querySelector('.table')!.attributes[1].textContent = smallIconTable;
    }
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Container style={{ margin: '0', minWidth: '95%' }}>
        <h3 style={{ marginTop: '80px', marginLeft: '26px' }}>Sports</h3>
        <p style={{ marginLeft: '26px' }}>{sports?.teaser}</p>
      </Container>
      <div style={{ minWidth: '95%' }}>
        <Table columns={columns} items={sports.items} title={'Sports'} />
        {toggleTable && (
          <Paper elevation={5} style={tableStyle} sx={{ display: 'block', float: 'right' }}>
            <h4 style={{ marginLeft: '26px', width: '100%' }}>{sports.items[1].name} ({sports.items[1].location})</h4>
            <p style={{ marginLeft: '26px' }}>{sportDetails}</p>
          </Paper>
        )}
      </div>
    </div>
  );
}
