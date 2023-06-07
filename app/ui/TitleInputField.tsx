'use client';
import { TextField, Typography } from '@mui/material';

const TitleInputField = () => {
  return (
    <TextField
      className="w-full"
      inputProps={{ style: { fontSize: 24 } }}
      label={
        <Typography variant="body1" fontWeight="bold" fontSize="1.5rem">
          Title
        </Typography>
      }
      variant="standard"
    />
  );
};

export default TitleInputField;
