'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShare,
  faStar as solidStar,
  faBookmark as solidBookmark,
} from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

const PromptCardIcons = ({
  iconType,
  selected,
}: {
  iconType: string;
  selected?: boolean;
}) => {
  let icon = <FontAwesomeIcon icon={faStar} />;
  if (iconType === 'star' && selected)
    icon = <FontAwesomeIcon icon={solidStar} />;
  if (iconType === 'bookmark') icon = <FontAwesomeIcon icon={faBookmark} />;
  if (iconType === 'bookmark' && selected)
    icon = <FontAwesomeIcon icon={solidBookmark} />;
  if (iconType === 'share') icon = <FontAwesomeIcon icon={faShare} />;
  return <span className="rounded-full p-[2px]">{icon}</span>;
};

export default PromptCardIcons;
