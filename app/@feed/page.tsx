import PromptCard from '.././components/PromptCard';
import Card from '../ui/Card';
import dataArray from '../utils/store/sampledata';

const Feed = () => {
  return (
    <Card>
      <section className="columns-1 min-[600px]:columns-2 min-[860px]:columns-3">
        {dataArray.map((data) => {
          return <PromptCard key={data.title} promptData={data} />;
        })}
      </section>
    </Card>
  );
};

export default Feed;
