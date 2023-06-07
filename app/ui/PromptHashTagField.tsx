'use client';
import { TextField, Typography } from '@mui/material';

const PromptHashTagField = () => {
  return (
    <TextField
      className="w-full"
      inputProps={{ style: { fontSize: 14 } }}
      label={
        <Typography
          variant="body1"
          fontSize="0.875rem"
          paddingLeft="0.75rem"
          color="#9ca3af"
        >
          Write your hashtag e.g - #web, #app, #history
        </Typography>
      }
      variant="standard"
    />
  );
};

export default PromptHashTagField;
