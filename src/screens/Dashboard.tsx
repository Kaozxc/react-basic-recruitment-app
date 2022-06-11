import React, { useEffect, useState } from "react";
import { navigationRoutes } from "../navigationRoutes";
import { DashboardItem, DashboardType } from "../types/dashboard.types";
import { NoResults } from "../components/NoResults/NoResults";
import { getDashboards } from "../service/dashboard.service";
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
    <Grid xs={12} item container rowSpacing={5} columnGap={1} columns={{ xs: 2 }} sx={{ paddingTop: '50px', paddingLeft: '10px' }}>
      {items.map((item, i) => {
        return <Grid item xs={8} sm={8} md={8} key={i} sx={{ maxWidth: '760px', margin: '10px' }}>
          <DashboardCard title={item.title} text={item.text} key={i} linkTo={getLinkTo(item.id)}></DashboardCard>
        </Grid>
      })}
    </Grid >
  )
};
