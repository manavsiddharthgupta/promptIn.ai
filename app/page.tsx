import Button from './components/Button';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Search from './components/Search';

export default function Home() {
  return (
    <main className="">
      <nav className="flex rounded-md gap-6 py-4 items-center max-w-5xl mx-auto justify-between">
        <p>Find Your Prompt</p>
        <div className="flex gap-4">
          <Button
            type="button"
            className="bg-blue-500 text-white rounded-[10px] px-6 text-sm flex items-center gap-1 h-10"
          >
            Create a Prompt
            <FontAwesomeIcon
              className="w-[12px] h-[12px] font-bold mt-[2px]"
              icon={faAdd}
            />
          </Button>
          <Button
            type="button"
            className="border-2 border-blue-500 text-blue-500 rounded-[10px] px-6 text-sm flex items-center gap-1 h-10 hover:bg-blue-500 hover:text-white hover:border-transparent"
          >
            Sign In
          </Button>
          <div className="border-blue-500 border-2 w-10 h-10 rounded-full"></div>
        </div>
      </nav>
      <div className="max-w-5xl mx-auto py-8">
        <section className="border-2 border-black rounded-md h-[22rem] mb-8"></section>
        <section className="flex justify-center mb-8">
          <Search />
        </section>
        <section className="columns-3">
          <div className="border-2 border-black w-full h-40 rounded-md mb-4 break-inside-avoid"></div>
          <div className="border-2 border-black w-full h-40 rounded-md mb-4 break-inside-avoid"></div>
          <div className="border-2 border-black w-full h-80 rounded-md mb-4 break-inside-avoid"></div>
          <div className="border-2 border-black w-full h-40 rounded-md mb-4 break-inside-avoid"></div>
          <div className="border-2 border-black w-full h-40 rounded-md mb-4 break-inside-avoid"></div>
          <div className="border-2 border-black w-full h-60 rounded-md mb-4 break-inside-avoid"></div>
          <div className="border-2 border-black w-full h-60 rounded-md mb-4 break-inside-avoid"></div>
          <div className="border-2 border-black w-full h-40 rounded-md mb-4 break-inside-avoid"></div>
          <div className="border-2 border-black w-full h-40 rounded-md mb-4 break-inside-avoid"></div>
          <div className="border-2 border-black w-full h-80 rounded-md mb-4 break-inside-avoid"></div>
          <div className="border-2 border-black w-full h-60 rounded-md mb-4 break-inside-avoid"></div>
          <div className="border-2 border-black w-full h-60 rounded-md mb-4 break-inside-avoid"></div>
        </section>
      </div>
    </main>
  );
}
