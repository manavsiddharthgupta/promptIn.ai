'use client';
import { Bookmark, Star, IosShare } from '@mui/icons-material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const PromptCardIcons = ({
  iconType,
  selected,
}: {
  iconType: string;
  selected?: boolean;
}) => {
  let icon = <StarBorderOutlinedIcon fontSize="small" />;
  if (iconType === 'star' && selected) icon = <Star fontSize="small" />;
  if (iconType === 'bookmark') icon = <BookmarkBorderIcon fontSize="small" />;
  if (iconType === 'bookmark' && selected) icon = <Bookmark fontSize="small" />;
  if (iconType === 'share') icon = <IosShare fontSize="small" />;
  return <div className="w-fit rounded-full p-[2px]">{icon}</div>;
};

export default PromptCardIcons;
