import { FC } from "react";
import { Paper, Stack, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { fontSize } from "@mui/system";

type DashboardCardProps = {
  title: string;
  text: string;
  linkTo: string;
};

const divStyles = {
  backgroundColor: '#202020',
  color: '#e2e2e2',
  height: '50px'
}

const titleStyles = {
  marginLeft: '30px',
  lineHeight: '20px',
}

const textStyles = {
  fontSize: '12px',
}

const linkStyle = {
  textDecoration: 'none',
  color: '#ff6633',
  // Need to change that
  fontWeight: 'bold',
  letterSpacing: '2px',
}

// TODO: style to match designs
export const DashboardCard: FC<DashboardCardProps> = ({
  title,
  text,
  linkTo,
}) => {
  const theme = useTheme();

  return (
    <Paper elevation={4} sx={{ width: '100%', minHeight: '240px' }}>
      <Stack>
        <div style={divStyles}>
          <p style={titleStyles}>{title}</p>
        </div>
        <div style={{ padding: theme.spacing(1, 2) }}>
          <p style={textStyles}>{text}</p>
        </div>
        <Stack
          style={{ padding: theme.spacing(1, 2) }}
          direction={"row"}
          justifyContent={"flex-end"}
        >
          <Link to={linkTo} style={linkStyle}>MORE INFO</Link>
        </Stack>
      </Stack >
    </Paper >
  );
};
