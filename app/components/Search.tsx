'use client';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

const CustomTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    '&::placeholder': {
      padding: '0px 20px', // Set your desired padding here
    },
    borderRadius: '10px',
    padding: '0px 10px',
  },
});

const Search = () => {
  return (
    <section className="flex justify-center mb-8">
      <CustomTextField
        className="max-w-[550px] w-full"
        id="outlined-basic"
        label="Search Your AI Powered Prompt"
        variant="outlined"
      />
    </section>
  );
};

export default Search;
