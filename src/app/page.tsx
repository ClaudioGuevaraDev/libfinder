import LibFinderForm from "@/components/LibFinderForm";
import LibFinderList from "@/components/LibFinderList";

function Home() {
  return (
    <div>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl text-center">
        LibFinder
      </h1>

      <LibFinderForm />

      <LibFinderList />
    </div>
  );
}

export default Home;
