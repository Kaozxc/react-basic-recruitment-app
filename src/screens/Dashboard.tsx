import React, { useEffect, useState } from "react";
import { navigationRoutes } from "../navigationRoutes";
import { DashboardItem, DashboardType } from "../types/dashboard.types";
import { NoResults } from "../components/NoResults/NoResults";
import { getDashboards } from "../service/dashboard.service";
import Box from '@mui/material/Box';

export const DashboardScreen = () => {
  const [items, setItems] = useState<DashboardType[]>([]);

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
    const fetchContent = async () => {
      const result = await getDashboards();
      //console.log(result);
      setItems(result);
    };
    fetchContent();

  }, []);

  // if (!items || items.length === 0) {
  //   return <NoResults />;
  // }
  return <>{
    items.forEach((item, i) => {
      <div key={i}>
        {item.title}
      </div>
    })
  }</>
};
