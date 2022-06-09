import React, { useEffect, useState } from "react";
import { navigationRoutes } from "../navigationRoutes";
import { DashboardItem, DashboardType } from "../types/dashboard.types";
import { NoResults } from "../components/NoResults/NoResults";
import { getDashboards } from "../service/dashboard.service";
import Box from '@mui/material/Box';
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { DashboardCard } from "../components/Card/DashboardCard";

export const DashboardScreen = () => {
  const [items, setItems] = useState<DashboardType[]>([]);

  const fetchContent = async () => {
    const result = await getDashboards();
    setItems(Object.values(result));
  };

  const getLinkTo = (id: DashboardItem) => {
    switch (id) {
      case DashboardItem.DASHBOARD:
        return navigationRoutes.dashboard.path;
      case DashboardItem.SPORTS:
        return navigationRoutes.sports.path;
      case DashboardItem.COMPETITIONS:
      case DashboardItem.ORGANISATIONS:
      case DashboardItem.USERS:
      case DashboardItem.SCHEDULING:
        return navigationRoutes.dashboard.path;
    }
  };


  useEffect(() => {
    fetchContent();
  }, []);

  if (!items || items.length <= 5) {
    return <NoResults />;
  }

  return (
    <Grid container spacing={{ md: 2 }} columns={{ xs: 4 }}>
      {items.map((item, i) => {
        return <Grid item xs={2} sm={4} md={4} key={i}>
          {/* <DashboardCard title={item.title} text={item.text} key={i} linkTo={getLinkTo(item.id)}></DashboardCard> */}
        </Grid>
      })}
    </Grid>
  )
};
