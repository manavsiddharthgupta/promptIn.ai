import dataArray from '../../utils/store/sampledata';
import Feed from '../Feed';

export const StarredPrompts = () => {
  let feed = <Feed dataArray={dataArray} />;
  if (dataArray.length === 0) {
    feed = (
      <p className="text-center text-[#00000093]">
        You have not starred any prompt
      </p>
    );
  }

  return <div>{feed}</div>;
};
