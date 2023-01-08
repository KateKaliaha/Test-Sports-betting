import { styled } from '@mui/material/styles';
import Radio, { RadioProps } from '@mui/material/Radio';

export const BisqueRadio = styled(Radio)<RadioProps>(() => ({
  '&, &.Mui-checked': {
    color: 'bisque',
  },
}));
