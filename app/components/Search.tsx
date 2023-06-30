'use client';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Card from '../ui/Card';
import { motion } from 'framer-motion';
import CancelIcon from '@mui/icons-material/Cancel';

const CustomTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    '&::placeholder': {
      padding: '0px 20px',
    },
    borderRadius: '10px',
    padding: '0px 10px',
  },
});

const expandContainerVariant = {
  expanded: {
    height: 'calc(100vh - 140px)',
    boxShadow:
      'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
    borderRadius: '16px',
    marginTop: '10px',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    display: 'block',
  },
  collapsed: {
    height: '0px',
    display: 'none',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
};

const SearchDissimalComponent = () => {
  return (
    <div className="cursor-pointer p-1 bg-white absolute left-1/2 -translate-x-1/2 top-0 transition-all duration-300 ease-in-out drop-shadow-sm rounded-full border-t-[1px] border-gray-300">
      <CancelIcon fontSize="medium" />
    </div>
  );
};

const SearchExpandComponent = () => {
  return (
    <>
      <SearchDissimalComponent />
      <div className="h-full p-8"></div>
    </>
  );
};

const SearchExpandContainer = ({ isExpanded }: { isExpanded: boolean }) => {
  return (
    <section className="absolute w-full">
      <motion.div
        children={<SearchExpandComponent />}
        animate={isExpanded ? 'expanded' : 'collapsed'}
        variants={expandContainerVariant}
      />
    </section>
  );
};

const Search = () => {
  const [isExpanded, setExpanded] = useState(false);

  const path = usePathname();
  if (path !== '/') {
    return null;
  }

  return (
    <section className="sticky top-0 bg-white">
      <Card>
        <div className="relative">
          <div className="flex justify-center">
            <CustomTextField
              className={`${
                isExpanded ? 'scale-100 w-full' : 'w-[550px]'
              } transition-all ease-in-out duration-300`}
              id="outlined-basic"
              label="Search Your AI Powered Prompt"
              variant="outlined"
              onFocus={() => {
                setExpanded(true);
              }}
              onBlur={() => {
                setExpanded(false);
              }}
            />
          </div>
          <SearchExpandContainer isExpanded={isExpanded} />
        </div>
      </Card>
    </section>
  );
};

export default Search;
