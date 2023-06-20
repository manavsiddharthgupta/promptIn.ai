'use client';
import { FormControlLabel, Checkbox, Typography } from '@mui/material';

const CheckBox = ({ children }: { children: string }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          defaultChecked
          color="default"
          style={{ padding: 4, marginLeft: 4 }}
          sx={{ '& .MuiSvgIcon-root': { fontSize: 16 } }}
        />
      }
      label={<Typography sx={{ fontSize: 14 }}>{children}</Typography>}
    />
  );
};

export default CheckBox;
