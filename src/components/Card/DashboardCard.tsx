import { FC } from "react";
import { Paper, Stack, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

type DashboardCardProps = {
  title: string;
  text: string;
  linkTo: string;
};

const divStyles = {
  paddingLeft: '80px',
  backgroundColor: '#202020',
  color: '#e2e2e2'
}

const linkStyle = {
  textDecoration: 'none',
  color: '#ff6633',
}

// TODO: style to match designs
export const DashboardCard: FC<DashboardCardProps> = ({
  title,
  text,
  linkTo,
}) => {
  const theme = useTheme();

  return (
    <Paper elevation={4} sx={{ margin: '100px' }}>
      <Stack>
        <div style={divStyles}>
          <p>{title}</p>
        </div>
        <div style={{ padding: theme.spacing(1, 2) }}>
          <p>{text}</p>
        </div>
        <Stack
          style={{ padding: theme.spacing(1, 2) }}
          direction={"row"}
          justifyContent={"flex-end"}
        >
          <Link to={linkTo} style={linkStyle}>More</Link>
        </Stack>
      </Stack>
    </Paper>
  );
};
