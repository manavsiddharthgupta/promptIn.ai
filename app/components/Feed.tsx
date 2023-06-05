import PromptCard from './PromptCard';
import dataArray from '../utils/store/sampledata';

const Feed = () => {
  return (
    <section className="columns-1 min-[600px]:columns-2 min-[860px]:columns-3">
      {dataArray.map((data) => {
        return <PromptCard key={data.title} promptData={data} />;
      })}
    </section>
  );
};

export default Feed;
