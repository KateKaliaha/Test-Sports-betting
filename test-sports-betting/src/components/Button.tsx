import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const YellowButton = styled(Button)(() => ({
  backgroundColor: 'bisque',
  fontSize: '14px',
  color: 'grey',
  fontWeight: 700,
  ':hover': {
    backgroundColor: 'rgb(231, 189, 137)',
    cursor: 'pointer',
  },
  ':disabled': {
    backgroundColor: 'rgb(223, 228, 233)',
  },
})) as typeof Button;
