'use client';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import { usePathname } from 'next/navigation';
import { useState, useRef, RefObject, useEffect } from 'react';
import Card from '../ui/Card';
import { motion } from 'framer-motion';
import CancelIcon from '@mui/icons-material/Cancel';
import { SearchExpanded } from './SearchExpanded';

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
    height: 'calc(100vh - 130px)',
    boxShadow:
      'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
    borderRadius: '16px',
    marginTop: '10px',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    display: 'block',
    width: '100%',
  },
  collapsed: {
    height: '0px',
    display: 'none',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: '100%',
  },
};

const SearchDissimalComponent = ({
  onDismissExpand,
}: {
  onDismissExpand: () => void;
}) => {
  return (
    <div
      onClick={onDismissExpand}
      className="cursor-pointer p-1 bg-white absolute left-1/2 -translate-x-1/2 -top-2 transition-all duration-300 ease-in-out drop-shadow-sm rounded-full border-t-[1px] border-gray-300 z-10"
    >
      <CancelIcon fontSize="medium" />
    </div>
  );
};

const SearchExpandComponent = ({
  onDismissExpand,
}: {
  onDismissExpand: () => void;
}) => {
  return (
    <>
      <SearchDissimalComponent onDismissExpand={onDismissExpand} />
      <SearchExpanded />
    </>
  );
};

const SearchExpandContainer = ({
  onDismissExpand,
  isExpanded,
}: {
  onDismissExpand: () => void;
  isExpanded: boolean;
}) => {
  return (
    <section className="w-full relative">
      <motion.div
        children={<SearchExpandComponent onDismissExpand={onDismissExpand} />}
        animate={isExpanded ? 'expanded' : 'collapsed'}
        variants={expandContainerVariant}
      />
    </section>
  );
};

const Search = () => {
  const path = usePathname();
  if (path !== '/') {
    return null;
  }

  const [isExpanded, setExpanded] = useState(false);
  const [searchText, setSearchText] = useState('');
  const expandedRef = useRef(null) as RefObject<HTMLInputElement>;

  const onDismissExpandHandler = () => {
    setSearchText('');
    setExpanded(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!expandedRef.current?.contains(e.target as Node)) {
        onDismissExpandHandler();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <section className="sticky top-0 bg-white">
      <Card>
        <div ref={expandedRef}>
          <div className="flex justify-center">
            <CustomTextField
              className={`${
                isExpanded ? 'scale-100 w-full' : 'w-[550px]'
              } transition-all ease-in-out duration-300`}
              id="outlined-basic"
              label="Search Your AI Powered Prompt"
              variant="outlined"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              onFocus={() => {
                setExpanded(true);
              }}
            />
          </div>
          <SearchExpandContainer
            onDismissExpand={onDismissExpandHandler}
            isExpanded={isExpanded}
          />
        </div>
      </Card>
    </section>
  );
};

export default Search;
