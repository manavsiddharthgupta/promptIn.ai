'use client';
import { TextField, Typography } from '@mui/material';

const TitleInputField = ({
  inputValue,
  onChangeHandler,
  onBlurHandler,
}: {
  inputValue: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlurHandler: (event: React.FocusEvent<HTMLInputElement>) => void;
}) => {
  return (
    <TextField
      className="w-full"
      value={inputValue}
      onChange={onChangeHandler}
      onBlur={onBlurHandler}
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
