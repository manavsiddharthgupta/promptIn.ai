'use client';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export const SearchPrompt = () => {
  return (
    <div className="hover:bg-[#00000017] px-4 py-2 mt-2 rounded-lg cursor-pointer">
      <h1 className="text-sm font-semibold truncate max-w-3xl w-full">
        The Art of Mindfulness: Cultivating Present-Moment Awareness for a
        Balanced Life
      </h1>
      <p className="text-xs truncate max-w-3xl w-full">
        In today's fast-paced and digital-driven world, finding moments of
        stillness and inner peace has become increasingly challenging. In this
        article, explore the concept of mindfulness as a powerful tool for
        achieving a balanced and fulfilling life.
      </p>
      <div className="flex gap-4 items-center mt-1">
        <div className="flex items-center gap-1 w-fit py-[0.5px] pr-[3px] pl-[2px] text-base bg-[#0000001a] rounded-sm">
          <StarBorderIcon fontSize="inherit" />
          <p className="text-xs font-medium">54</p>
        </div>
        <p className="text-xs font-semibold text-gray-700">16 days ago</p>
      </div>
    </div>
  );
};
