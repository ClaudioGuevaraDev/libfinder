import LibFinderForm from "@/components/LibFinderForm";
import LibFinderList from "@/components/LibFinderList";

function Home() {
  return (
    <div>
      <h1 className="mb-6 text-5xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-7xl text-center bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
        LibFinder
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 text-center">
        Find the Perfect Library for Every Project with AI-Powered
        Recommendations from LibFinder
      </p>

      <LibFinderForm />

      <LibFinderList />
    </div>
  );
}

export default Home;
