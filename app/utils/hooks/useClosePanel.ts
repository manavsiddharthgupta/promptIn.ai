import { RefObject, useCallback, useEffect } from 'react';

interface closePanel {}

export const useClosePanel = (
  onClosePanel: () => void,
  profileBarRef: RefObject<HTMLInputElement>,
  profileBtnRef: RefObject<HTMLInputElement>
) => {
  const clickingOutside = useCallback((event: { target: any }) => {
    if (
      !profileBarRef.current?.contains(event.target) &&
      !profileBtnRef.current?.contains(event.target)
    ) {
      onClosePanel();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', clickingOutside);

    return () => {
      document.removeEventListener('mousedown', clickingOutside);
    };
  }, [clickingOutside]);
};
