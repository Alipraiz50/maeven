// material-ui
import { useTheme } from '@mui/material/styles';

// ==============================|| LOGO SVG COMPONENT ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circle Background */}
      <circle cx="50" cy="50" r="45" fill={theme.palette.primary.main} />

      {/* Inner Circle */}
      <circle cx="50" cy="50" r="30" fill={theme.palette.background.paper} />

      {/* Triangle */}
      <path
        d="M50 20 L70 60 H30 Z"
        fill={theme.palette.primary.dark}
      />

      {/* Lines */}
      <line x1="35" y1="60" x2="65" y2="60" stroke={theme.palette.primary.contrastText} strokeWidth="2" />
      <line x1="50" y1="35" x2="50" y2="60" stroke={theme.palette.primary.contrastText} strokeWidth="2" />
    </svg>
  );
};

export default Logo;
