import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { RouterLink } from 'src/routes/components';
// ----------------------------------------------------------------------

export interface LogoProps {
  disabledLink?: boolean;
  single?: boolean; // Adicione esta linha
  sx?: object;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, single = false, sx, ...other }, ref) => {
    const singleLogo = (
      <Box
        component="img"
        src="/assets/dirijafacil/logo1.png"
        sx={{ width: 40, height: 40 }}
      />
    );

    const fullLogo = (
      <Box
        component="img"
        src="/assets/dirijafacil/logo1.png"
        sx={{ width: 200, height: 'auto' }}
      />
    );

    const logo = (
      <Box
        ref={ref}
        component="img"
        src="/assets/dirijafacil/logo2
        1.png"
        sx={{
          width: 200,
          height: 'auto',
          cursor: 'pointer',
          ...sx,
        }}
        {...other}
      />
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link
        component={RouterLink}
        href="/"
        color="inherit"
        aria-label="go to homepage"
        sx={{ lineHeight: 0 }}
      >
        <Box
          sx={{
            width: single ? 64 : 75,
            lineHeight: 0,
            cursor: 'pointer',
            display: 'inline-flex',
            ...sx,
          }}
        >
          {single ? singleLogo : fullLogo}
        </Box>
      </Link>
    );
  }
);

export default Logo;
