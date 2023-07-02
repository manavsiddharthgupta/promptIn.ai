'use client';
import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton, Tooltip } from '@mui/material';

export const MailIcon = () => {
  return <EmailIcon fontSize="small" />;
};

export const WebLink = () => {
  return <LinkIcon fontSize="small" />;
};

export const EditBtn = () => {
  return (
    <Tooltip title="Edit Profile">
      <IconButton className="hover:bg-black bg-[#0000005a]">
        <EditIcon className="text-white" fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};
