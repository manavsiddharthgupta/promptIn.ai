'use client';
import LinkIcon from '@mui/icons-material/Link';
import { Tooltip } from '@mui/material';
import { faEnvelope, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MailIcon = () => {
  return <FontAwesomeIcon className="text-[#454545]" icon={faEnvelope} />;
};

export const WebLink = () => {
  return <LinkIcon fontSize="small" />;
};

export const EditBtn = () => {
  return (
    <Tooltip title="Edit Profile">
      <FontAwesomeIcon
        className="text-white hover:bg-black bg-[#0000005a] rounded-full p-2 transition-all ease-in-out duration-300 cursor-pointer"
        icon={faPenToSquare}
      />
    </Tooltip>
  );
};
