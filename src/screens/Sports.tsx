import { useEffect, useState } from "react";
import { SportsType, SportType } from "../types/sports.types";
import { NoResults } from "../components/NoResults/NoResults";
import { getSportById, getSports } from "../service/sports.service";
import { Container } from "@mui/system";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Table, TableColumn } from '../components/Table/Table';

export const SportsScreen = () => {
  const [sports, setSports] = useState<SportsType | undefined>(undefined);
  const [sportDetails, setSportDetails] = useState<any | undefined>(undefined);


  const columns: TableColumn<SportType>[] = [
    { id: "sport", label: "Sport", value: "name" },
    { id: "location", label: "Location", value: "location" },
    { id: "name", label: "Name", value: "shortDescription" },
    {
      id: "actions",
      label: "Actions",
      value: <VisibilityIcon />,
      textAlign: "right",
    },
  ];

  const getSportDetails = async (id: SportType['id']) => {
    const result = await getSports();
    setSports(result);
    const sport = await getSportById(id);
    setSportDetails(sport?.description)
  }

  useEffect(() => {
    getSportDetails(2);
  }, []);


  if (!sports) {
    return <NoResults />;
  }

  return (
    <div>
      <Container style={{ margin: '0', minWidth: '95%' }}>
        <h3 style={{ marginTop: '80px', marginLeft: '26px' }}>Sports</h3>
        <p style={{ marginLeft: '26px' }}>{sports?.teaser}</p>
      </Container>
      <div>
        <Table columns={columns} items={sports.items} title={'Sports'} />
      </div>
    </div >
  );
}
